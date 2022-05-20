import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getNews = (): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {q: 'Elon Musk', lang: 'en'},
      headers: {
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        'X-RapidAPI-Key': '03299a0c68mshd75eae785c93a4dp1e7955jsn5f309ac716b1'
      }
    };
    return axios.request(options)
}

export default getNews;