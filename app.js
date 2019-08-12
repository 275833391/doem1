const ws = require('nodejs-websocket');
// import Websocket from "./view/websocket.vue"
const server = ws.createServer(function(conn) {
    conn.on("text", function(str) {
        var data = JSON.parse(str)
        s
        switch (data.type) {
            case "name":
                console.log(data.name)
                conn.clickname = data.name




                break;
            case "text":
                console.log(data.name)
                boardcast(data.text, data.name)

                break;
        }

    })
    conn.on("error", function(err) {
        console.log(err)

    })

}).listen(3000);
console.log(server.connections)

function boardcast(str, name) {
    server.connections.forEach(function(conn) {
        if (conn.clickname != name) {
            // console.log(conn.)
            conn.sendText(str)
        }

    })

}