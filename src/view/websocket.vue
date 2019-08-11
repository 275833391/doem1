<template>
  <div class="row chat" id="chat-web">
    <div class="chat-left col-md-10">
      <div class="chat-message" id="message"></div>
      <div class="row">
        <input type="text" class="chat-text" id="text">
        <input type="button" value="提交" class="chat-send" id="btn">
      </div>
    </div>
    <div class="chat-right col-md-2"></div>
    
  </div>
</template>
<style>
    .row {
        text-align: right;
        margin: 0
    }
    
    .chat {
        width: 600px
    }
    
    .chat-message {
        width: 100%;
        height: 400px;
        background-color: aliceblue
    }
    
    .chat-text {
        height: 50px;
        width: 70%
    }
    
    .chat-send {
        height: 50px;
        width: 30%;
        /* border-width: 0px; */
        padding: 0
    }
    /* chat-send {} */
    
    .chat-right {
        background-color: aliceblue;
        height: 450px;
        margin-left: -13px
    }
</style>
<script>
    console.log(WebSocket)
    var ws = new WebSocket('ws://localhost:3000/ws');
    var name = "guwangjie" + Math.random()

    ws.onopen = function() {
            ws.send(JSON.stringify({
                name: name,
                type: 'name'
            }))

            document.getElementById("btn").onclick = function() {
                console.log("asdasd")
                var r = document.getElementById("text")
                const P = document.createElement("p")
                P.style.textAlign = "left"
                P.style.display = "block"
                P.style.backgroundColor = "red"
                P.style.width = "100%"
                P.innerText = r.value
                document.getElementById("message").appendChild(P)
                ws.send(JSON.stringify({
                    text: r.value,
                    name: name,
                    type: 'text'
                }));
                r.value = ""
            }


        }
        // 响应onmessage事件:
    ws.onmessage = function(msg) {

        const P = document.createElement("p")
        P.style.textAlign = "right"
        P.style.display = "block"
        P.style.backgroundColor = "#fff"
        P.style.width = "100%"
        P.innerText = msg.data
        document.getElementById("message").appendChild(P)
    };
    // 给服务器发送一个字符串:
</script>