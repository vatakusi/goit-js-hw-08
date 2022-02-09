import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const C_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem(C_TIME, data.seconds);
  console.log(data.seconds);
};
//
player.on('timeupdate', throttle(onPlay, 1000));

const time = localStorage.getItem(C_TIME) || 0;

player.setCurrentTime(time);
