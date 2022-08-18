import Request from './request'

export function getRequest(url, config) {
  const request = new Request()
  return request.getRequest(url, config)
}
export function postRequest(url, config) {
  const request = new Request()
  return request.postRequest(url, config)
}

// export function postLoginRequest(url, config) {
//   config.headers = {
//     'Content-Type': 'application/json'
//   }
//   const request = new Request()
//   return request.postRequest(url, config)
// }
