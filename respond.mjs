import * as input from '/server.js';
import * as swRegister from 'register-service-worker';
swRegister.register('/sw.cjs',{
    registrationOptions: {
        scope: __uv$config.prefix
    }
});
encode = __uv$config.prefix + __uv$config.encodeUrl(input.respond); 
data["response"] = encode;
module.exports = data;
