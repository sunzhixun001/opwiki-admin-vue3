import store from 'store'

export const getToken = () => {
  return store.get('access_token')
}

export const setToken = token => {
  return store.set('access_token', token)
}