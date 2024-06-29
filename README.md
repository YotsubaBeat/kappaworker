<p align="center"><img src="https://i.ibb.co/XVWwd0T/wss-Protocol.png" height="200"></p>
<h1 align="center">wssProtocol</h1>
<h3 align="center">Works similar to the <a href="https://wisp.mercurywork.shop">wisp protocol</a>, but made more to work for production, mass-deployment, customizability, simplicity and handling websocket connections established by the <a href="https://github.com/yotsubabeat">wssProtocol client</a>, aswell as a proof-of-concept(s).

<h1 align="center">Dependencies</h1>
<h3 align="center">Requires the NodeJS javascript framework to run.</h3>

<h1 align="center">Benefits</h1>
<h3 align="center">With the use of <a href="https://github.com/yotsubabeat/wssprotocol-client">wssProtocol client</a>, the protocol can be runned with the use of a plain HTML document runned on any browser,
You will not need to install/download anything else but the <a href="https://github.com/yotsubabeat/wssprotocol-client">wssProtocol client</a>, and a proper web browser.</h3>

<h3 align="center">The <code>consepts/</code> folder provides alternative HTML documents which can be runned by the HTTP server, including a real-time request analytics for administrative management, and more.</h3>

<h1 align="center">Configuration</h1>
<h3 align="center">Navigate to <code>uv.config.cjs</code> for configuration of the bare server and service prefix.<br><br>
For configuration of the websocket and HTTP server port, please define <code>PORT=(YOUR_PREFERED_PORT)</code> in <code>wss.config.mjs</code>.<br><br>
For configuration of the file location of the HTML document runned by the HTTP server, please define <code>HTTP='(FILE_PATH)'</code> in <code>wss.config.cjs</code>.</h3>
