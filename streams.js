const fs = require('fs');

// Step 1: Create a docs folder if it doesn't exist
if (!fs.existsSync('./docs')) {
    fs.mkdirSync('./docs');
    console.log('docs folder created');
}

// Step 2: Create a sample "HugeFile.txt" for testing (only if not already present)
const sourceFile = './docs/HugeFile.txt';
if (!fs.existsSync(sourceFile)) {
    let sampleContent = '';
    for (let i = 1; i <= 1000; i++) {
        sampleContent += `This is line number ${i} - Vanakkam Nanba, practicing Node.js streams!\n`;
    }
    fs.writeFileSync(sourceFile, sampleContent);
    console.log('Sample HugeFile.txt created for testing');
}

// Step 3: Create ReadStream and WriteStream
const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream('./docs/CopyFile.txt');

let totalChunks = 0;
let totalBytes = 0;

// Step 4: Listen to ReadStream events
readStream.on('open', (fd) => {
    console.log('\nReadStream opened. File descriptor:', fd);
});

readStream.on('data', (chunk) => {
    totalChunks++;
    totalBytes += chunk.length;
    console.log(`Chunk ${totalChunks} received - ${chunk.length} bytes`);

    // Write each chunk to the destination file
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log(`\nReading finished. Total chunks: ${totalChunks}, Total bytes: ${totalBytes}`);
    writeStream.end(); // Important: close the write stream once reading is done
});

readStream.on('error', (err) => {
    console.log('ReadStream error:', err.message);
});

// Step 5: Listen to WriteStream events
writeStream.on('finish', () => {
    console.log('CopyFile.txt written successfully! File copy complete.');
});

writeStream.on('error', (err) => {
    console.log('WriteStream error:', err.message);
});

// Step 6: This proves streams are async - this line runs before the events above
console.log('Script started - streams are working in the background (async)');