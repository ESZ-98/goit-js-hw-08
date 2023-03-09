import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const updateTime = localStorage.getItem('videoplayer-current-time');
if (updateTime) {
  player.setCurrentTime(updateTime);
}
