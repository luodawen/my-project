import axios from 'axios'

let base = '';

export const requestLogin = params =>{
  return axios.post(`${base}/api/login`,params).then(res=>{
    return res.data;
  },err=>{
    throw err
  })
}