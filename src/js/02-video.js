import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

//

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
};
//
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
