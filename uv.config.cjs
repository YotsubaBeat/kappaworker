import('wss.config.mjs').then(({ BARE, PREFIX }) => {
self.__uv$config = {
    prefix: PREFIX,
    bare: BARE,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.cjs',
    bundle: 'uv.bundle.cjs',
    config: 'uv.config.cjs',
    sw: 'uv.sw.cjs'
};
});