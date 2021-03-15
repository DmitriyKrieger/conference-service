import {findCatalogs} from './findCatalogs'
import {findConference} from './findConference.js'

import {toExcel} from './pars_modules/toExcel'
import { inout } from './inout/inout'



(async ()=>{

//await findCatalogs() // тащим все каталоги
//await findConference() // идем по компаниям, берем некоторые хар-ки


let jsonObj=require(inout.outputFile3)
await toExcel(jsonObj,inout.outputFile5)
})()
