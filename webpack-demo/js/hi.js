import _ from 'lodash';

function getHi() {
  return _.join(['Hello', 'webpack'], ' ');
};

function zep() {
  return 'zep';
};

export default {
  getHi,
  zep,
};
