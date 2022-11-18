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
global.atob = atob;
global.btoa = btoa;

const { TextEncoder, TextDecoder } = require('./encoding');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;