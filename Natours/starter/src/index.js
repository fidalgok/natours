require('../css/style.css');
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
  console.log('dev modde', process.env.NODE_ENV);
}

console.log('again');