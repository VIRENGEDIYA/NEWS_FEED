import HttpClient from './index'
import axios from 'axios';


const NewsFeed = `${HttpClient.base_url}everything?q=bitcoin&from=2018-10-18&sortBy=publishedAt&apiKey=${HttpClient.api_key}`


const getNewsFeed = (params={},config={}) => {
    data = HttpClient.get("https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-19&sortBy=publishedAt&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027", params, config).then(response => {dispatch()})
    // console.log("====================########################################## ",axios.get("https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-19&sortBy=publishedAt&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027"))
    return data;
}

const ApiCall = {
    getNewsFeed
}

export default ApiCall