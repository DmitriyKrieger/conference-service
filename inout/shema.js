
const shema1={ //схема для парса
      nameCategory:'',
      nameEvent:'',
      dateEvent:'',
      geoEvent:'',
      idEvent:'',
      relatedSubject:'',
      webSiteEvent:'',
      abstract:'',
      organizer:'',
     contact:'',
      topics:'',
};
//схема всех запчастей
const shema2 = { // схема для результата
   
  
    companyName:'',
    companyCountry:'',
    companyCity:'',
  //  companyIndex:'',
    companyStreet:'',
    companyNumber:'',
    companyIndex:'',
    companyEmpoyees:'',
    companyDesck:'',
    companyTelephone:'',
    companySite:'',
    companyFax:'',
    companyEmail:'',
    companyDop:'',
   
};
const shema3 = { // схема для результата
   
    brand:'',
    catNum:'',
  //  desc:'',
    price:'',
   
};
//схема на поиске

const shema4 = {
    id: '',
    adress: '',
    link: '',
    gps: '',
    nazvanie: '',
    type: '',
    photo: '',
    adress: '',
    roomType: '',
    facil: '',
    pfacil: '',
    pfacilChild: '',
    facilChild: '',
    hfacil: '',
    city: '',
    cityID: '',
    stars: '',
    descript: '',
    country: ''
};
var shema = [shema1, shema2, shema3, shema4]
module.exports = shema