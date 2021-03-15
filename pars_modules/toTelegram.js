const fs = require('fs');
import {inout} from '../inout/inout.js'
const { Telegraf } = require('telegraf');

export async function toTelegram({text,file,idClient='default',idOperator='default',idDeveloper='default'}){
    let token='1417531829:AAE4Pb8zDvJnNYfsGNBT5N7-y65f1DiioN4'
    
    const bot = new Telegraf(token)
    //let id = bot.use(ctx=>{console.log(ctx.chat.id.toString())});
    
    if(idClient!='default'){
    bot.telegram.sendDocument(idClient,{source:file}) // Отправляем документ клиенту
    //bot.telegram.sendMessage(idClient,file);
    }
    if(idOperator!='default'){
    bot.telegram.sendMessage(idOperator,text); // Отправляем сообщение оператору
    }
    if(idDeveloper!='default'){
    bot.telegram.sendMessage(idDeveloper,text); // отправляем сообщение разработчику
    }
    
    bot.launch()
    
    }
    