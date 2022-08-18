import axios from 'axios'
import { baseURL, timeout } from './request.config'

class Request {
  constructor() {
    const instance = axios.create({
      baseURL: baseURL,
      timeout: timeout
    })
    this.loading = null
    instance.interceptors.request.use(
      (req) => {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        return req
      },
      (err) => {
        console.log(err)
      }
    )

    instance.interceptors.response.use(
      (res) => {
        this.loading.close()
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance = instance
  }
  getRequest(url, config) {
    return this.instance.get(url, config)
  }
  postRequest(url, config) {
    return this.instance.post(url, config)
  }
}

export default Request
