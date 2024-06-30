import * as swRegister from './register-service-worker';
import * as input from './server.cjs';
swRegister.register('./sw.cjs',{
    registrationOptions: {
        scope: __uv$config.prefix
    }
});
if (!isUrl(input.encodedWebSocket)) {
          let url = 'https://www.google.com/search?q=' + input.encodedWebSocket;
        } else if (isUrl(msg)) { 
          let url = 'https://' + input.encodedWebSocket;
        }
        function isUrl(val = val.trim()) {
          if (/^http(s?):\/\//.test(val) || val.includes('.')) 
            return true || false;
};
encode = __uv$config.prefix + __uv$config.encodeUrl(url); 
module.exports = encode;