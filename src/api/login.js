export function login(username, password) {
  return new Promise((resolve, reject) => {
    const loginParams = new URLSearchParams()
    loginParams.set('username', username)
    loginParams.set('password', password)
    fetch(process.env.BASE_API + 'login', {
      method: 'post',
      body: loginParams
    })
      .then(data => data.json())
      .then(data => {
        if (data.success) {
          resolve(data)
        } else {
          reject('Wrong username')
        }
      })
  })
}

export function logout() {
  return new Promise(resolve => {
    resolve(true)
  })
}
