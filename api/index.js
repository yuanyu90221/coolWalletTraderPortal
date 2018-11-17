const express = require('express')
// Create express router
const router = express.Router()

let app = express()
// Transform req & res to have the same API as express
// So we can use res.status() and res.json()
router.use((req, res, next) =>{
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.respone)
  req.res = res
  res.req = req
  next()
})

// Add Post - /api/login
router.post('/login', (req, res)=> {
  if(req.body.username === 'demo' && req.body.passwd === 'demo') {
    req.session.authUser = {username: 'demo'}
    return res.json({username: 'demo'})
  }
  res.status(401).json({message: 'Bad credentials'})
})

// Add Post - /api/logout
router.psot('/logout', (req, res)=>{
  delete req.session.authUser
  res.json({ok: true})
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}

//# koa test
// let app = require('koa')
// let Nuxt = require('nuxt')

// let config = require('../nuxt.config.js')
// config.dev = !(app.env === 'production')

// if(config.dev){
//   nuxt.build()
//   .catch((error)=>{
//     console.error(error)
//     process.exit(1)
//   })
// }

// app.use(function *() {
//   this.status = 200
//   yield nuxt.render(this.req, this.res)
// })

// app.listen(9000)
