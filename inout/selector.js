// селекторы findCatalogs
const selector1 = {
    start:'https://www.conference-service.com/conferences/healthcare.html',
    conferenceListing:'ul>li>div a',
    evnt:'div[class="evnt"]',
    catDomen:'https://www.conference-service.com/conferences/',
    divTitle:'div[class="conflist_value conflist_title"]',
    datesEvent:'div[class="dates_location"]',
    webSiteEvent:'div[class="conflist"]',
    char:'.panel-content>div',
    header:{
      nameCategory:'Имя категории',
      nameEvent:'Имя конференции',
      dateEvent:'Дата конференции',
      geoEvent:'Место проведения',
      idEvent:'id Конференции',
      relatedSubject:'Связанные объекты',
      webSiteEvent:'Веб-Сайт Конференции',
      abstract:'Резюме(описание)',
      organizer:'Организатор',
     contact:'Контакты',
      topics:'Тема',
    }
  //  categoryLink:'a.category__link',
    //buttonClick:'[name="button"]',
    }
    // селекторы findCompany
const selector2 = {
       domen:'https://www.wlw.de',
       buttonClick:'[name="button"]',
       pagination:'[data-test="pagination"]',
       containerCompany:'[data-test="company"]',
       companyLink:'[class="company-link"]',
       companyEmpoyees:'[class="feature feature-employee-count"]',
       address3:'ul.address > li'

    }
    //схема на companyChar
const selector3 = {
    domen:'https://www.wlw.de',
    buttonClick:'[name="button"]',
    desck:'[class="vis-section description"]>div>div>div',
    address:'[id="location-and-contact"] address>div>div',
    clickTelephone:'[id="location-and-contact__phone"] span',
    ClickFax:'[id="location-and-contact__fax"] span',
    faxAndTelephopne:'[class="vis-phone__number"] span',
    email:'[id="location-and-contact__email"] span',
    site:'[id="location-and-contact__website"]',
    link404:'[class="not-found__title"]',
    containerCon:'[class="category"]',
    cityAndTel:'div>span',
    nameUslugi:'div>div>div',
    chip:'[class="chip__title"]',
    chip_content:'[class=category-content__type]',
    
    }
    // схема каталога
const selector4 = {
    plashka1: 'bebeff',
    plashka2: 'dedeff',
    plashka3: 'table tbody[id].listing-inner',
    form: '.listing-container-border', //[method="post"]
    partnumber: '.listing-final-partnumber',
    brand: '.listing-final-manufacturer',
    partnumber2: 'span[title="Replaces these Alternate/ OE Part Numbers"]',
    antiplashka1: 'background: #ffe8be;',
    antiplashka2: 'background: #fff3de;',
    price: '.listing-price'
}
const selector = [selector1, selector2, selector3, selector4]
module.exports = selector