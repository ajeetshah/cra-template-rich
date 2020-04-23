module.exports = (req, res, next) => {
  res.header('X-Hello', 'World')
  next()

  // res.writeHead(500, { 'Content-Type': 'application/json' })
  // res.end(
  //   JSON.stringify({
  //     message: 'Some error at the server',
  //   })
  // )
}
