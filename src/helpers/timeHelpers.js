import moment from 'moment';

const unixTimeStampToString = unixTimeStamp => {
  return moment(unixTimeStamp).format('dddd Do MMMM YYYY hh:mm:ss');
};

export { unixTimeStampToString };
