

const fs = require('fs');
const path = require('path');

// Input and output file paths
const inputFile = path.join(__dirname, 'input.txt');
const outputFile = path.join(__dirname, 'wordcount.txt');

// Read the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  // Count words by splitting on whitespace
  const wordCount = data.trim().split(/\s+/).length;

  // Write the word count to the output file
  fs.writeFile(outputFile, `Word count: ${wordCount}`, (err) => {
    if (err) {
      console.error('Error writing output file:', err);
    } else {
      console.log(`Word count written to ${outputFile}`);
    }
  });
});