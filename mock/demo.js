function getDemo(req, res) {
  res.status(200).json({
    code: 'success',
    message: '获取公告失败',
    text: 'this is demo'
  })
}

module.exports = {
  'GET /demo': getDemo,
}
