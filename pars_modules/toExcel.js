import { liner } from './rasPars.js'
import { lineSaver } from './saver.js'
var fs = require('fs');
const Excel = require('exceljs')

let workBook = new Excel.Workbook();

export async function toExcel(fileObj,path) {

  

   
    
   await workBook.xlsx.readFile(path).then(function() {
        var worksheet = workBook.getWorksheet(1);
        for(let i=0;i<fileObj.length;i++){
        var row = worksheet.getRow(i+1);
        let shema = fileObj[i]
       // console.log(shema)
        let g = 1;
        for(let key in shema){
           row.getCell(g).value = shema[key];
           g++;
        } 


        row.commit();
      }
       return workBook.xlsx.writeFile(path)
    }).catch((error)=>{console.log(error)})


}
