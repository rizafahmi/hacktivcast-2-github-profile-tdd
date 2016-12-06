'use strict'

const https = require('https')


let getProfile = (username, callback) => {
  const options = {
    hostname: `api.github.com`,
    port: 443,
    path: `/users/${username}`,
    method: 'GET',
    headers: {
      'user-agent': 'node.js'
    }
  }
  let request = https.request(options, (response) => {
    let body = ""
    response.on('data', (data) => {
      body = body + data
    })

    response.on('end', () => {
      if (response.statusCode === 200) {
        let profile = JSON.parse(body)
        callback(null, profile)

      } else {
        callback("error")
      }
    })

  })

  request.end()

}

module.exports = {
  getProfile: getProfile
}
