const proxy = [
  {
    context: '/api',
    target: 'http://localhost:4000/labfec',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
