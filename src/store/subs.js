import store from '../store'
import apiClient from "../axios";

const subs = store.subscribe((mutation) => {
  console.log('this is a subs',mutation.payload);
  switch (mutation.type) {
    case 'auth/SET_TOKEN':
      if (mutation.payload) {
        apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + mutation.payload
        localStorage.setItem('token', mutation.payload)
      } else {
        apiClient.defaults.headers.common['Authorization'] = null
        localStorage.removeItem('token')
      }
      break;
  }
})

export default subs