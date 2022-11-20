const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const userdb = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults())

const SECRET_KEY = '123123'

const expiresIn = '24h'

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

function isLoginAuth({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password,
    ) !== -1
  )
}

server.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body
  if (userdb.users.findIndex((user) => user.email === email)) {
    const status = 401
    const message = 'Email already exist'
    res.status(status).json({ status, message })
    return
  }
  if (password.length < 6) {
    const status = 401
    const message = "Password can't be less than 6 symbols"
    res.status(status).json({ status, message })
    return
  }

  fs.readFile('./users.json', (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    }
    data = JSON.parse(data.toString())

    let last_item_id = data.users[data.users.length - 1].id

    data.users.push({
      id: last_item_id + 1,
      email: email,
      password: password,
    })
    let writeData = fs.writeFile(
      './users.json',
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({ status, message })
          return
        }
      },
    )
  })
  const token = createToken({ email, password })
  res.status(200).json({ email, token })
})

server.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body

  if (!isLoginAuth({ email, password })) {
    const status = 401
    const message = 'Incorrect Email or Password'
    res.status(status).json({ status, message })
    return
  }

  const token = createToken({ email, password })
  res.status(200).json({ email, token })
})

server.get('/api/feature-flag', (req, res) => {
  res.status(200).json({ isTelegramShareEnabled: true })
})

server.listen(5000)
