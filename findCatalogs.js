const fs = require('fs')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
import {LineSaver,lineSaverSync} from './pars_modules/saver'
import {getContent, getFetch} from './pars_modules/getContent'
import {inout} from './inout/inout'
import { waitings } from './inout/waitings'
import { liner } from './pars_modules/rasPars'

export async function findCatalogs(){
    const selector = inout.selector1


    let content = await getFetch(selector.start)
    let $ = await cheerio.load(content)

    $(selector.conferenceListing).each((ind,elem)=>{
        console.log('Категория: ',ind)
       
           let nameCat = $(elem).text().replace(/;/g,'').replace(/\n/g,'').trim() || ''
            let linkCat = selector.catDomen + $(elem).attr('href') || ''
       //     console.log(nameCat)
        //    console.log(linkCat)
        let line= nameCat+';'+linkCat
      console.log(line)
       lineSaverSync(line,inout.outputFile1)
    })

 

}