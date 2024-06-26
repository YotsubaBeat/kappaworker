<?php
<script type="module">
  import * as swRegister from 'register-service-worker';
  import * as input from './server.mjs';
swRegister.register('/sw.cjs',{
    registrationOptions: {
        scope: __uv$config.prefix
    }
});
encode = __uv$config.prefix + __uv$config.encodeUrl(input.respond); 
</script>
?>
<p>This webpage hosts a <span onclick="openRepo()">wsProxy server</span></p>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  p {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }
  span {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 700;
    font-style: normal;
    cursor: pointer;
  }
</style>
<script>
  function openRepo() {
    window.location.href = "https://github.com/YotsubaBeat/wsProxy";
  }
</script>
