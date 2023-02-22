require('react-native-get-random-values');

global.Buffer = require('buffer').Buffer;
global.process = require('process');

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
};

// Some modules expect userAgent to be a string
global.navigator.userAgent = 'React Native';

const { encode, decode } = require('react-native-fast-base64');
global.atob = decode;
global.btoa = encode;

require('fast-text-encoding');