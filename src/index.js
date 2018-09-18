window.onload = function() {
  var messaging = firebase.messaging()

  var tokenEl = document.querySelector('[rel=token]')

  messaging
    .requestPermission()
    .then(function() {
      var token = messaging.getToken()

      if (token) return token

      return Promise.reject(new Error('unable to get token'))
    })
    .then(function(token) {
      var pre = document.createElement('pre')
      pre.appendChild(document.createTextNode(token))

      tokenEl.className = '' // un-hide
      tokenEl.appendChild(pre)
      return Promise.resolve()
    })
    .catch(function(err) {
      console.log(err)
      while (tokenEl.firstChild) {
        tokenEl.removeChild(tokenEl.firstChild)
      }
      tokenEl.appendChild(document.createTextNode('Error: ' + err.toString()))
    })
}
