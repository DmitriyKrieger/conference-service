import { waitings } from '../inout/waitings.js'
export async function pageOzon(selector, fromPage, $) {
    try {
        // console.log(($(selector.brand)).length)
        let selectorBrand = selector.brand + ':nth-child(' + (($(selector.brand)).length).toString() + ')' + ' > a > span'
            // console.log(selectorBrand)
        fromPage.brand = $(selectorBrand).text().replace(/\n/g, ' ').trim() || ''
            // console.log(fromPage.brand)
        fromPage.title = $(selector.title).text().replace(/\n/g, ' ').replace(/;/g, ' ') || $(selector.title2).text().replace(/\n/g, ' ').replace(/;/g, ' ')
            // console.log(fromPage.title)
        fromPage.articul = $(selector.articul).text().replace(/\n/g, '').replace('Код товара: ', '').trim()
            // console.log(fromPage.articul)
            // fromPage.articul1 = $(selector.articul1).parent().parent().parent().find(selector.articul2).text().trim()
            // console.log("Артикул: ", fromPage.articul1)
        fromPage.articul1 = $(selector.articul1).parent().parent().find(selector.articul2).text().trim() || $(selector.articul1).parent().parent().find(selector.articul3).text().trim()
            // fromPage.razmer = $(selector.razmer1).parent().parent().parent().find(selector.razmer2).text().trim() || ''
        fromPage.razmer = $(selector.razmer1).parent().parent().find(selector.razmer2).text().trim() || ''
        if (fromPage.razmer == '') {
            // let shirina = $(selector.shirina).parent().parent().parent().find(selector.razmer2).text().trim() || ''
            let shirina = $(selector.shirina).parent().parent().find(selector.razmer2).text().trim() || ''
                // let visota = $(selector.visota).parent().parent().parent().find(selector.razmer2).text().trim() || ''
            let visota = $(selector.visota).parent().parent().find(selector.razmer2).text().trim() || ''
                // let glubina = $(selector.glubina).parent().parent().parent().find(selector.razmer2).text().trim() || ''
            let glubina = $(selector.glubina).parent().parent().find(selector.razmer2).text().trim() || ''
            if (shirina != '') {
                fromPage.razmer = shirina + '0x' + visota + '0'
                if (glubina != '') {
                    fromPage.razmer += '0x' + glubina + '0'
                }
            }


        }
        // console.log("Размер mm: ", fromPage.razmer)
        // fromPage.razmerX = $(selector.razmerX1).parent().parent().parent().find(selector.razmerX2).text().trim() || ''
        // console.log("Размеры: ", fromPage.razmerX)
        fromPage.razmerX = $(selector.razmerX1).parent().parent().find(selector.razmerX2).text().trim() || ''
        fromPage.price1 = $(selector.price1).text().trim().replace(/[^\d]/g, '')
            // console.log("Цена1: ", fromPage.price1)
            // fromPage.price2 = $(selector.price2).text().trim().replace(/[^\d]/g, '')
            // console.log("Цена2: ", fromPage.price2)
            // let actions = $(selector.actions).text() || ''
            // let period = $(selector.period).text() || ''
            // fromPage.actions = period + ' ' + actions
            // console.log(fromPage.actions)
        fromPage.actions = $(selector.actions).text().replace(/\d/g, '') || ''
        console.log(fromPage.actions)
        fromPage.period = $(selector.period).text() || ''
        console.log(fromPage.period)
        fromPage.kolvo = $(selector.actions).text().replace(/[^\d]/g, '') || ''
        console.log(fromPage.kolvo)
    } catch (error) {
        throw error
    }
    return fromPage
}