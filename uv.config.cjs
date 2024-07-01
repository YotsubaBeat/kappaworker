var self = this;
import('uv.bundle.cjs');
self.__uv$config = {
    // The service prefix of the encoded webpages
    prefix: '/service/',
    // The full URL of the bare server
    bare: 'https://aluu.xyz/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.cjs',
    bundle: 'uv.bundle.cjs',
    config: 'uv.config.cjs',
    sw: 'uv.sw.cjs'
};
module.exports.__uv$config = __uv$config;
