// import { waitings } from '../inout/waitings.js'
export async function searchOzon_polaris(city, selector, lines, $) {
    try {
        // await page.waitForSelector(selector.plashka, { timeout: waitings.selector })
        ($(selector.plashka)).each((i, el) => {
            const $el = $(el).find(selector.link)
            let link = $el.attr('href')

            if (link) {
                let articul = ''
                link = selector.domen + $el.attr('href')
                if (link.includes('\?')) {
                    link = link.split('\?')[0]
                }
                if (link.includes('\/id\/')) {
                    articul = link.split('\/id\/')[1].replace(/[^\d]/g, '')
                } else {
                    articul = link.split('-').slice(-1)[0].replace(/[^\d]/g, '')
                }
                let title = $(el).find(selector.link).text()
                if (title) {
                    title = title.replace(/\n/g, ' ').replace(/;/g, ' ') || ''
                }
                let raiting = $(el).find(selector.raiting).attr('title') || ''
                if (raiting) {
                    raiting = raiting.replace(/[^\d\.]/g, '').replace('\.', ',')
                }
                let review = $(el).find(selector.review).text() || ''
                if (review) {
                    review = review.replace(/[^\d]/g, '')
                }
                let price = $(el).find(selector.price).text() || ''
                if (price) {
                    price = price.replace(/[^\d]/g, '')
                }
                // console.log(link, 'ссылка')
                // console.log(articul, 'артикул')
                // console.log(title, 'тайтл')
                // console.log(raiting, 'рейтинг')
                // console.log(review, 'отзывы')
                // console.log(price, 'цена')
                lines.push({
                    link: link,
                    articul: articul,
                    title: title,
                    city: city,
                    raiting: raiting,
                    review: review,
                    price: price
                })
            }
        })
    } catch (error) {
        throw error
    }
    return lines
}