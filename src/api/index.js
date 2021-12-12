import ajax from "./ajax";


export const reqLogin = (username,password)=> ajax('http://127.0.0.1:8888/api/private/v1/login',{username,password},'POST')