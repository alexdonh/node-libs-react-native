require('react-native-get-random-values');

global.Buffer = require('buffer').Buffer;
global.process = require('process');

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
};

// Some modules expect userAgent to be a string
global.navigator.userAgent = 'React Native';

const { atob, btoa } = require('react-native-quick-base64');
const { encode, decode } = require('base-64');
global.atob = (b64) => {
  try {
    return atob(b64);
  }
  catch {
    return decode(b64);
  }
};
global.btoa = (data) => {
  try {
    return btoa(data);
  }
  catch {
    return encode(data);
  }
};

require('fast-text-encoding');