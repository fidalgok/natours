require('../css/style.scss');
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
  console.log('dev mode', process.env.NODE_ENV);
}
const videos = {
  bg: require('../img/video.mp4'),
  'bg-webm': require('../img/video.webm'),
};
