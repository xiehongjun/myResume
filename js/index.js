/**
 * Created by Administrator on 2017/2/14.
 */
var flag=true;
var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    effect: 'coverflow',
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides;
        var curIndex = swiper.activeIndex;
        var lastIndexSlide = slides.length - 1;//现在最后一个滑块
        var trueIndexSlide = slides.length - 2;//原来最后一个滑块
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if (curIndex == index) {
                switch (index) {
                    case 0:
                        item.id = 'page' + trueIndexSlide;
                        break;

                    case lastIndexSlide:
                        item.id = 'page1';
                        break;
                    default :
                        item.id = 'page' + curIndex;
                }

                if (index==6){
                    clearTimeout(fontTimer);
                    var fontTimer=window.setTimeout(function () {
                        if (!flag) return;
                        prender();
                    },1000);
                }
            }
        })
    }

});
/*var oImg = document.querySelector('#self');
 oImg.addEventListener('click', function () {
 prender();
 }, false);*/

function prender() {
    var oDiv = document.querySelector('.des');
    var aSpan = oDiv.getElementsByTagName('span');
    var str = '1.为人诚恳、热心，善于交流与沟通，能快速融入团队工作;2. 热爱前端技术，喜欢去了解新技术;3. 吃苦耐劳、踏实认真使我能够更好的在压力下完成各项工作;4. 有较强的学习适应能力，能通过自学掌握新知识新软件。';
    var n = 0;
    createSpan();
    clearInterval(timer);
    var timer = setInterval(function () {
        if (n >= aSpan.length) {
            clearInterval(timer);
            return;
        }
        animate(aSpan[n], {opacity: 1}, {duration: 100});
        n++;
        //console.log(n);
    }, 100);

    function createSpan() {
        var frg = document.createDocumentFragment();
        for (var i = 0; i < str.length; i++) {
            var oSpan = document.createElement('span');
            oSpan.innerHTML = str[i];
            frg.appendChild(oSpan);
        }
        oDiv.appendChild(frg);
        frg = null;
    }
    flag=false;
};


var music = document.querySelector('.music');
var beyond = document.querySelector('#beyond');
window.setTimeout(function () {
    beyond.play();
    beyond.addEventListener('canplay', function () {
        music.className = "music musicCur";
    }, false)
}, 50);
music.addEventListener('click', function () {
    /*paused属性判断音频文件是播放的晒是停止 如果为true说明是停止的，播放时play*/
    if (beyond.paused) {
        beyond.play();
        music.className = "music musicCur";
    } else {
        beyond.pause();
        music.className = "music";
        music.style.opacity = 1;
    }
}, false);
/*CUBERENDER*/

