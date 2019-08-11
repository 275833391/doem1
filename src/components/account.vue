<template>
  <div>
    <div class="container body">
      <div class="bd-top">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/websocket">聊天</router-link>
        <input type="button" @click="exportJSON" value="asdasdasd">
      </div>
      <div><router-view></router-view></div>
    </div>

  </div>

</template>
<style scoped>
    .bd-top {
        width: auto;
        margin: 20px auto;
        border-bottom: 1px solid #c5c3c3;
    }
    
    .bd-top a {
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 0;
        width: 80px;
        height: 40px;
        background-color: #c5c3c3;
        text-align: center;
        line-height: 40px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: white
    }
    
    .bd-top a:focus {
        background-color: rgb(90, 90, 90)
    }
</style>
<script>
    import FileSaver from 'file-saver'
    export default {
        data() {
            return {
                CfgInfo: [{
                        text: "wweqwewq",
                        x: 800,
                        y: 200,
                        speed: 1,
                        time: 50,
                        color: "red"
                    }, {
                        text: "adqwrqrqr",
                        x: 800,
                        y: 100,
                        speed: 1,
                        time: 10,
                        color: "red"
                    }, {
                        text: "fgdfgdfgdfg",
                        x: 800,
                        y: 300,
                        speed: 1,
                        time: 6,
                        color: "red"
                    }, {
                        text: "wweqwewq",
                        x: 800,
                        y: 200,
                        speed: 1,
                        time: 50,
                        color: "red"
                    }

                ]
            }
        },
        methods: {
            exportJSON() {
                console.log('asd')
                    // 将json转换成字符串
                const data = JSON.stringify(this.CfgInfo)
                const blob = new Blob([data], {
                        type: ''
                    })
                    // const textStr = 'aaaaa,bbbbbbb,cccccc'
                FileSaver.saveAs(blob, 'hahaha.txt')
            },
            exportText() {
                const textStr = 'aaaaa,bbbbbbb,cccccc'
                FileSaver.saveAs(textStr, 'a.txt')
            }
        }


    }
</script>