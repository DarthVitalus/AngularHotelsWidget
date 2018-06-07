import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export const _HOTELS: Hotel[] = [
  {
    id: 1, name: 'Residence Henri IV',
    img: './assets/images/image1.jpg',
    address: 'Misericordia, 67',
    phone: '4031234789',
    previewImages: [
      './assets/images/r1.jpg',
      './assets/images/res.jpg'],
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      waterTemperature: 20,
      airTemperature: 24
    },
    socialInfo: {
      title: 'Residence Henri IV',
      img: './assets/images/b1.jpg',
      followers: 2390,
      following: 308
    },
    type: 'hotel'
  },
  {
    id: 2, name: 'Sabor da Saudade Resort',
    img: './assets/images/image2.png',
    address: 'Gloriantstraat, 10HS',
    phone: '8123456789',
    previewImages: [
      './assets/images/square/image5s.jpg',
      './assets/images/square/image14s.jpg'
    ],
    weather: {
      title: 'Always sunny',
      icon: 'sun',
      waterTemperature: 25,
      airTemperature: 30
    },
    socialInfo: {
      title: 'Sabor da Saudade Resort',
      img: './assets/images/square/image5s.jpg',
      followers: 4500,
      following: 123
    },
    type: 'weather'
  },
  {
    id: 3, name: 'Novotel',
    img: './assets/images/image33.jpg',
    address: '2 Rue Scribe, 9th',
    phone: '7125656780',
    previewImages: [
      './assets/images/square/image6s.jpg',
      './assets/images/square/image9s.jpg'
    ],
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      waterTemperature: 20,
      airTemperature: 25
    },
    socialInfo: {
      title: 'Novotel',
      img: './assets/images/square/image6s.jpg',
      followers: 11360,
      following: 601
    },
    type: 'hotel'
  },
  {
    id: 4, name: 'Blue Lake',
    img: './assets/images/fishing1.jpg',
    address: 'Perdido Blvd',
    phone: '4563456789',
    previewImages: [
      './assets/images/square/fishing1s.jpg',
      './assets/images/square/fishing2s.jpg'
    ],
    weather: {
      title: 'Rainy',
      icon: 'rain',
      waterTemperature: 18,
      airTemperature: 23
    },
    socialInfo: {
      title: 'Blue Lake',
      img: './assets/images/square/fishing2s.jpg',
      followers: 3089,
      following: 25
    },
    type: 'fishing'
  },
  {
    id: 5, name: 'Orange Beach',
    img: './assets/images/fishing4.jpg',
    address: 'Costa dorado',
    phone: '5553433389',
    previewImages: [
      './assets/images/square/fishing4s.jpg',
      './assets/images/square/fishing3s.jpg'
    ],
    weather: {
      title: 'Rainy',
      icon: 'rain',
      waterTemperature: 21,
      airTemperature: 27
    },
    socialInfo: {
      title: 'Orange Beach',
      img: './assets/images/square/fishing4s.jpg',
      followers: 7082,
      following: 251
    },
    type: 'fishing'
  },
  {
    id: 6, name: 'Hype Park Residence',
    img: './assets/images/image30.jpg',
    address: 'Abbey Road 23',
    phone: '4323408089',
    previewImages: [
      './assets/images/square/image30s.jpg',
      './assets/images/square/image16s.jpg'
    ],
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      waterTemperature: 20,
      airTemperature: 25
    },
    socialInfo: {
      title: 'Hype Park Residence',
      img: './assets/images/square/image30s.jpg',
      followers: 17082,
      following: 1251
    },
    type: 'tours'
  },
  {
    id: 7, name: 'Marriott Guangzhou',
    img: './assets/images/image48.jpg',
    address: '122 Liuhua Rd',
    phone: '101345639',
    previewImages: [
      './assets/images/square/image4s.jpg',
      './assets/images/square/image7s.jpg'
    ],
    weather: {
      title: 'Sunny',
      icon: 'sun',
      waterTemperature: 20,
      airTemperature: 25
    },
    socialInfo: {
      title: 'Marriott Guangzhou',
      img: './assets/images/square/image7s.jpg',
      followers: 24508,
      following: 412
    },
    type: 'tours'
  }
];

export const _HOTELS2 = Observable.of(_HOTELS); //TODO Если раскомментировать - при сборке получаю Unknown property 'of'
