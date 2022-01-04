import {  cryptoApi,cryptoApiDetail} from "../../../react-app-env.d"

export const fetchList = (start:string,length:any) => {
    return fetch(cryptoApi+length+"&start="+start,{method:"GET"})
    .then(response => response.json())
    .catch(error => error)
}

export const fetchDetail = (id:any) => {
    return fetch(cryptoApiDetail+id,{method:"GET"})
    .then(response => response.json())
    .catch(error => error)
}