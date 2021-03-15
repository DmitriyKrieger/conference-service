const fs = require("fs");
var ourFiles = {
    inputFile1: "./input/categories.csv",
    //inputFile2: "./input/goroda_ozon.csv",
    outputFile1: "./output/catLinks.csv",
    outputFile2: "./output/conference.csv",
    outputFile3: "./output/conference.json",
    outputFile4: "./output/companyChar.json",
    outputFile5: "./output/test.xlsx",
    //outputFailed1: "./output/ozon_fail1.csv",
    //outputFailed2: "./output/ozon_fail2.csv",
    //fileStarter: "./input/starter.csv",
    lines1: [],
    lines2: [],
    lines3:[],
    //lines4:[],
    //starter: 0,
};


try{
ourFiles.lines1 = fs.readFileSync(ourFiles.outputFile1).toString().split("\n").filter((line) => !!line);
}catch{}  
try{
ourFiles.lines2 = fs.readFileSync(ourFiles.outputFile2).toString().split("\n").filter((line) => !!line);
}catch{}  
try{
    ourFiles.lines3 = fs.readFileSync(ourFiles.outputFile3).toString().split("\n").filter((line) => !!line);
    }catch{}  

module.exports = ourFiles;