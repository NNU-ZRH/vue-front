import axios from "axios";

const request = axios.create({
  // baseURL: "/api",
});

//添加请求拦截器
request.interceptors.request.use(function ( config){
  //设置请求头
  config.headers.token='eyJhbGciOiJIUzI1NiJ9.eyJlbXBJZCI6MSwiZXhwIjoxNzU0MTU5NzM5fQ.H6nCXskQVQ3iT7zoVzWjy2rTgPbCNgFb1TaBspDaKjA';
  return config;
},function (error){
  return Promise.reject(error);
})
//添加响应拦截器
request.interceptors.response.use(function (response){
    return response.data;
},function (error){
    return Promise.reject(error);
})

export default request;