  import * as swRegister from './register-service-worker';
  import * as input from './server.cjs';
swRegister.register('./sw.cjs',{
    registrationOptions: {
        scope: __uv$config.prefix
    }
});
encode = __uv$config.prefix + __uv$config.encodeUrl(input.encodedWebSocket); 
module.exports = encode;