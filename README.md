## wsProxy
Works similar to [the wisp protocol](https://wisp.mercurywork.shop), but made more to work for production, mass-deployment, customizability, simplicity and handling websocket connections established by [the wsProxy client](https://github.com/yotsubabeat), aswell as a proof-of-concept(s).
## Dependencies
Requires the NodeJS javascript framework to run.
> [!IMPORTANT]
> Needs any client to process the webpage for the protocol to properly work

## Benefits
With the use of [wsProxy client](https://github.com/yotsubabeat), wsProxy can be runned with the use of a plain HTML document runned on any browser,
You will not need to install/download anything else but the [wsProxy client](https://github.com/yotsubabeat), and a proper web browser.

The `consepts/` folder provides alternative PHP documents which can be runned by the HTTP server, including a real-time request analytics for administrative management, and more.

## Configuration
Navigate to `uv.config.cjs` for configuration of the bare server and service prefix.

For configuration of the websocket and HTTP server port, please define `PORT=<YOUR_PREFERED_PORT>` in the `.env`.

For configuration of the file location of the PHP document runned by the HTTP server, please define `HTTP='<FILE_PATH>'` in the `.env`.
