interface WeatherInfo {
  title: string;
  icon: string;
  waterTemperature: number;
  airTemperature: number;
}
interface SocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}
interface Hotel {
  id: number;
  name: string;
  img: string;
  address: string;
  phone: string;
  previewImages: string[];
  weather: WeatherInfo;
  socialInfo: SocialInfo;
  type: string;
}
