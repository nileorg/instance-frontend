import { getToken } from '@/utils/auth'

export function getList(params) {
  return new Promise((resolve, reject) => {
    fetch(process.env.BASE_API + 'nodes', {
      method: 'get',
      headers: {
        'Authentication': getToken()
      }
    })
      .then(data => data.json())
      .then(data => {
        if (data.success) {
          resolve(data.nodes)
        } else {
          reject('Error getting list')
        }
      })
  })
}

export function activateNode(node_id, active) {
  var url = new URL(process.env.BASE_API + 'nodes')
  const params = { node_id, active }
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'put',
      headers: {
        'Authentication': getToken()
      }
    })
      .then(data => data.json())
      .then(data => {
        resolve(data.message)
      })
      .catch(e => {
        reject(e.message)
      })
  })
}

export function deleteNode(node_id) {
  var url = new URL(process.env.BASE_API + 'nodes')
  const params = { node_id }
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'delete',
      headers: {
        'Authentication': getToken()
      }
    })
      .then(data => data.json())
      .then(data => {
        resolve(data.message)
      })
      .catch(e => {
        reject(e.message)
      })
  })
}
