const fs = require('fs')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
import {LineSaver,lineSaverSync} from './pars_modules/saver'
import {getContent, getFetch} from './pars_modules/getContent'
import {inout} from './inout/inout'
import { waitings } from './inout/waitings'
import { liner } from './pars_modules/rasPars'

export async function findConference(){
    const selector = inout.selector1
    const shema = inout.shema1
    let lines = inout.lines1
    lineSaverSync('[',inout.outputFile3)
    let header = JSON.stringify(selector.header)
    lineSaverSync(header+',',inout.outputFile3)
    for(let i=0;i<lines.length;i++){
       
        let currentLink = lines[i].split(';')[1]
     
        let content = await getFetch(currentLink)
        let $ = await cheerio.load(content)

        $(selector.evnt).each((index,element)=>{
            console.log('Категория:',i+1,'/',lines.length)
            console.log('Конференция:',index+1)
            shema.nameCategory = lines[i].split(';')[0]
           shema.nameEvent = $(element).find(selector.divTitle).text().replace(/;/g,'').replace(/\n/g,'').trim() || ''
           let strForDateAndCity = $(element).find(selector.datesEvent).text().replace(/;/g,'').replace(/\n/g,'').trim() || ''
            shema.dateEvent = strForDateAndCity.split('•')[0].trim() || ''
            shema.geoEvent = strForDateAndCity.split('•')[1].trim() || ''
            $(element).find(selector.char).each((index,element1)=>{
                let str = $(element1).text().replace(/;/g,'').replace(/\n/g,'').trim() || '' 
                if(str !=''){
                    let currentStr= str.split(':')
                   switch (currentStr[0]) {
                       case 'Organizer':
                          shema.organizer=currentStr[1].trim();
                           break;
                      case 'Event listing ID':
                        shema.idEvent=currentStr[1].trim()
                           break;
                      case 'Event website':
                        shema.webSiteEvent=str.replace(/Event website:/g,'').trim()
                            break;
                      case 'Related subject(s)':
                        shema.relatedSubject=currentStr[1].trim()
                            break;
                     case 'Abstract':
                        shema.abstract=currentStr[1].trim()
                           break;
                      case 'Contact':
                        shema.contact=str.replace(/Contact:/g,'').trim()
                           break;
                      case 'Topics':
                        shema.topics=currentStr[1].trim()
                            break;
                       
                   }
                  
                }
            })
            //console.log(shema)
            let jsonObj = JSON.stringify(shema)
            let line = liner(shema,';')
            lineSaverSync(line,inout.outputFile2)
            lineSaverSync(jsonObj+',',inout.outputFile3)
        })
     
    }
    lineSaverSync(']',inout.outputFile3)
}