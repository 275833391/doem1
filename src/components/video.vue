<template>
 
 <div class="ttt">
    <canvas class="danmu3" v-show="danmakuShow"  ref="tt" width="800" height="365" ></canvas>


        <video id="videoPlayer" muted autoplay="autoplay" ref="danmu"  class="video-js vjs-custom-skin vjs-big-play-centered" style="margin: 0 auto" >
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
        </video>
        <input type="text" v-model="value" value="value"><button v-on:mousedown="danmufs">发送</button>

 </div >


</template>
<style>
    .ttt {
        position: relative;
        /* z-index: -10; */
    }
    
    .danmu3 {
        display: block;
        /* width: 800px;
        height: 365px; */
        background-color: rgba(34, 34, 107, 0.9);
        /* opacity: 0.1; */
        position: absolute;
        z-index: 9999;
        top: 0;
        left: calc(50% - 400px)
    }
    
    .danmu,
    .danmu2 {
        height: 15px;
        width: 30px;
        display: inline-block;
        color: aliceblue;
        border-radius: 7.5px;
        position: relative;
        transform: all 0.5s
    }
    
    .danmu {
        background-color: rgb(109, 110, 110)
    }
    
    .danmu2 {
        background-color: aquamarine;
    }
    
    .danmu::before,
    .danmu2::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: antiquewhite;
        border-radius: 7.5px;
    }
    
    .danmu::before {
        left: 0;
    }
    
    .danmu2::before {
        right: 0;
    }
    
    .danmu-btn {
        /* flex: 1; */
        width: 90%;
        height: 20px;
        margin: 0 auto;
        background-color: rgb(246, 246, 250);
        align-self: center;
        border-radius: 10px;
        box-shadow: rgb(207, 125, 125)
    }
    
    .danmu-btn-2 {
        /* flex: 1; */
        width: 50%;
        height: 20px;
        margin: 0;
        background-color: rgb(255, 166, 0);
        /* align-self: center; */
        border-radius: 10px;
    }
</style>
<script>
    import videojs from "video.js"

    export default {
        // name: "videoPlayer",
        data() {
            return {
                currtime: null,
                value: "asdasd",
                Float: false,
                danmakuShow: false,
                datass: [],
                datas: [{
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

                ],
            }
        },
        mounted() {
            // var mm = document.getElementsByClassName("vjs-input2-bar")
            // mm.onclick = function() {
            //     console.log("weqwe")
            // }
            var yy = this.initVideo();
            this.addDanmaBtn(this.initVideo())
                // this.initVideo.myPlayer.play
                // this.danmu(this.value, currtime)
                // this.stt()
            console.log(yy)
            var qq = document.getElementById("videoPlayer_html5_api")
            var that = this
            qq.addEventListener("timeupdate", function() {
                var timeDisplay;
                timeDisplay = Math.floor(qq.currentTime)
                that.currtime = timeDisplay
                console.log(that.currtime)
                    //用秒数来显示当前播放进度
                    // console.log(Math.floor(qq.currentTime))

                //当视频播放到 4s的时候做处理
                that.datas.forEach(element => {
                    // console.log(element.time)
                    // console.log(timeDisplay)
                    if (element.time == timeDisplay) {
                        // console.log(element)
                        that.datass.push(element)
                            // console.log(that.datass)
                    }

                });

                if (timeDisplay == 4) {
                    //处理代码
                }
            }, false);

            //     function dd() {

            //         yy.canplay = function() {
            //             console.log(this.currentTime = 5);
            //         });

            //     window.requestAnimationFrame(dd)

            // };
            // window.requestAnimationFrame(dd)





        },
        methods: {
            danmufs: function() {
                this.danmu(this.value, this.currtime)
                console.log(this.currtime)
            },
            danmu: function(text, time) {
                // var dmArr = this.datas
                var that = this
                var gap = 20; // 弹幕的上下间距
                var hiddenCanvas = this.$refs.tt;
                // 增加弹幕的方
                let y = getY();
                console.log(y) // 先确定跑道
                let x = 800; // 初始x坐标为canvas的右边界
                let delayWidth = 0; // 同跑道
                for (let i = 0, len = that.datas.length; i < len; i++) {
                    let dm = that.datas[i];
                    if (y === dm.y) { // 如果是同跑道,则往后排,设置一定的间隔，保证弹幕不会重叠；
                        delayWidth += Math.floor(hiddenCanvas.getContext('2d').measureText(dm.text).width * 2 + 30);

                    }
                }
                that.datas.push({
                    text: text,
                    x: x + delayWidth,
                    y: y,
                    speed: 1,
                    time: time,
                    color: getColor()
                });
                // console.log(that.datas)

                // 随机获得y坐标
                function getY() {
                    let range = Math.floor(330 / gap); // 跑道数量
                    return Math.floor(Math.random() * range + 1) * gap;
                }
                // 随机获得颜色
                function getColor() {
                    return `${Math.floor(Math.random() * 16777215).toString(16)}`;
                }
                // 写一个for循环，初始化30条弹幕



            },
            stt: function() {
                var that = this;
                var dmArr = this.datass;
                // setInterval(() => {
                //     if (that.currtime == that.datas[i].time) {
                //         dmArr.push(that.datas[i])

                //     }

                // }, 1000)
                var timer = null;
                var ctx = this.$refs.tt.getContext('2d')
                if (this.danmakuShow) {
                    // console.log(this.danmakuShow)
                    start()
                }

                function start() {
                    // var ctx = that.$refs.tt.getContext('2d')
                    // console.log(dmArr.length)
                    timer = setInterval(() => {
                        ctx.clearRect(0, 0, 800, 365); // 每次需要清空画布
                        ctx.save();
                        ctx.font = '20px Microsoft YaHei'; // 这里需要把字体大小设为需要显示的css大小的2倍（devicePixelRatio为2时）
                        // if (!dmArr.length) stop(); // 如果没有新弹幕了，就停止计时器
                        for (let i = 0, len = dmArr.length; i < len; i++) {

                            let dm = dmArr[i];
                            // console.log(dm.text)
                            let overRange = -ctx.measureText(dm.text).width;
                            // console.log(dm.text)
                            dm.x -= dm.speed;
                            if (dm.x < overRange) {
                                dmArr.splice(i, 1); // 弹幕在画布中不可见时，从数组中移除该项
                                // console.log(dmArr)
                                continue;
                            }
                            ctx.fillStyle = `#${dm.color}`;
                            // console.log(i)
                            ctx.fillText(dm.text, dm.x, dm.y);
                        }
                        ctx.restore();
                    }, 20);
                }

                function stop() {
                    clearInterval(timer);
                    ctx.clearRect(0, 0, 400, 170);
                }

            },
            initVideo() {
                //初始化视频方法
                let myPlayer = this.$video(videoPlayer, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: true,
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: 800,
                    //设置视频播放器的显示高度（以像素为单位）
                    height: 400,
                    playbackRates: [0.5, 1, 1.5, 2],
                    preload: "metadata",
                    // button: true,

                })
                return myPlayer
                    // console.lo(myPlayer.currenTime)

            },


            addDanmaBtn(player) {
                let that = this
                    // console.log('this.danmakuShow')
                var Dan = videojs.getComponent('Button');
                var DanButton = videojs.extend(Dan, {
                    constructor: function() {
                        Dan.apply(this, arguments);
                        this.controlText("弹幕");
                        this.el_.children[0].className = "danmu"

                    },
                    buildCSSClass: function() {
                        return "icon-danmaku vjs-control vjs-button";

                    },
                    // createEl: function() {
                    //     return videojs.dom.createEl("div", {
                    //         className: "asdasdasd"
                    //     })

                    // },
                    handleClick: function() {
                        if (that.danmakuShow) {
                            // danmaku.hide();
                            var tt = this.el_.children[0].className = this.el_.children[0].className.replace(/danmu2/, 'danmu');
                            // console.log(CurrentTimeDisplay(player))
                            // console.log('b')
                            that.danmakuShow = !that.danmakuShow;
                            that.stt()



                        } else {
                            // danmaku.show();
                            var ee = this.el_.children[0].className = this.el_.children[0].className.replace(/danmu/, 'danmu2');
                            // console.log('n')
                            that.danmakuShow = !that.danmakuShow;
                            that.stt()


                        }


                    }
                });
                videojs.registerComponent('DanButton', DanButton);

                var buttn = player.getChild('controlBar').addChild('DanButton', {}, 3);
                // buttn.el().children[0].className = "danmu"
                console.log(buttn.el())

            }




        }


    }
</script>