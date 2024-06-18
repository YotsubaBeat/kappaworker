self.__uv$config = {
    prefix: '/service/',
    bare: 'https://aluu.xyz/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.cjs',
    bundle: 'uv.bundle.cjs',
    config: 'uv.config.cjs',
    sw: 'uv.sw.cjs'
};
