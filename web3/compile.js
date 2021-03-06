const path = require('path');
const fs = require('fs');
const solc = require('solc');
function compile() {
    const filePath = path.resolve(__dirname, '..', "contracts");
    let sources = {};
    fs.readdirSync(filePath).forEach(file => {
        let sourceCode = fs.readFileSync(path.join(filePath, file), 'UTF-8');
        sources[file]={content: sourceCode};
    });
    let input = {
        language: 'Solidity',
        sources:sources,
        settings: {
            outputSelection: {
                '*': {
                    '*': ['*']
                }
            }
        }};
    return JSON.parse(solc.compile(JSON.stringify(input)));
}
module.exports = compile;

