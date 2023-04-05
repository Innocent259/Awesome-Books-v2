import { DateTime } from './luxon.js';

const showTime = () => {
  const timeNow = DateTime.now();

  const Datetime = document.querySelector('.time');
  Datetime.innerHTML = timeNow.toLocaleString(DateTime.DATETIME_FULL);
};
export default showTime;
