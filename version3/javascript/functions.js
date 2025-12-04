//public functions
var body = document.querySelector("body");
var root = document.querySelector(':root');
var noticeSound = document.querySelector('.noticeSound');
var errorSound = document.querySelector('.errorSound');
var alertSound = document.querySelector('.alertSound');

//全屏
document.querySelector(".full").onclick = function () {
    if (body.requestFullScreen) { // 正常浏览器 
        body.requestFullScreen();
    } else if (body.webkitRequestFullScreen) { // webkit 内核
        body.webkitRequestFullScreen();
    } else if (body.mozRequestFullScreen) { // moz
        body.mozRequestFullScreen();
    } else if (body.msRequestFullscreen) { // ms 微软  这里面有个坑 别掉进去了
        body.msRequestFullscreen();
    } else { // 欧朋
        body.oRequestFullScreen();
    }
}

//控制台互动
if (languageFlag === 1) {
    console.log('%c%s',
        'color: skyblue; font-weight:700', '\n\n\
    .-------------------------------------------------      \n\
    |   _          _          _      _           _          \n\
    |  | ||        \\ \\\\      / //    \\ \\\\       / //  \n\
    |  | ||         \\ \\\\    / //      \\ \\\\     / //   \n\
    |  | ||          \\ \\\\__/ //        \\ \\\\   / //    \n\
    |  | ||           \\_   _//          \\_\\\\_/ //       \n\
    |  | ||             | ||            / // \\ \\\\        \n\
    |  | ||             | ||           / //   \\ \\\\       \n\
    |  \\ \\\\______..     | ||          / //     \\ \\\\   \n\
    |   \\________||     \\_//         /_//       \\_\\\\   \n\
    *------------------------------------------------\n');
    console.log('%c%s', 'background:rgb(200, 200, 255);padding:5px;margin-bottom:10px', '一切皆有可能。');
    console.log('%c%s', 'background:rgb(200, 200, 255);padding:5px;margin-bottom:10px', '长风破浪会有时，直挂云帆济沧海。');
    console.error("错误：您正在呼吸");
    console.error("错误：您睁着眼睛");
    console.error("错误：您没有睡着");
    console.info("在下方输入“怎么办()”以查看可能的解决方案。\n注：应使用英文状态下的括号。直接复制也可以。");
} else if (languageFlag === 2) {
    console.log('%c%s',
        'color: skyblue; font-weight:700', '\n\
    .-------------------------------------------------      \n\
    |   _          _          _      _           _          \n\
    |  | ||        \\ \\\\      / //    \\ \\\\       / //  \n\
    |  | ||         \\ \\\\    / //      \\ \\\\     / //   \n\
    |  | ||          \\ \\\\__/ //        \\ \\\\   / //    \n\
    |  | ||           \\_   _//          \\_\\\\_/ //       \n\
    |  | ||             | ||            / // \\ \\\\        \n\
    |  | ||             | ||           / //   \\ \\\\       \n\
    |  \\ \\\\______..     | ||          / //     \\ \\\\   \n\
    |   \\________||     \\_//         /_//       \\_\\\\   \n\
    |-------------------------------------------------');
    console.log('%c%s', 'background:rgb(200, 200, 255);padding:5px;margin-bottom:10px', 'Everything is possible.');
    console.error("error: You are breathing");
    console.error("error: Your eyes are open");
    console.error("error: You are not asleep");
    console.info("You can turn to the Chinese page to look for possible solution.");
}

function 怎么办() {
    console.log('-我怎么知道。\n\n人工智障并不知道怎么办。\n输入“滚()”以召唤人工智能。');
}

function 滚() {
    console.log('正在召唤人工智能……\n');
    setTimeout(function () {
        console.log('-走开，我在睡觉。等我睡醒了再说。\n\n');
        console.log('人工智能正在睡觉。\n请等他睡醒（大约需要114514小时），\n或者输入密码以叫醒他。格式：起床啦(密码)。');
    })
}

function 起床啦(pw) {
    if (pw != 114514) {
        console.log('密码错误。\n请按格式重新输入。');
    } else {
        console.log('！！！你居然知道密码\n\n-啊我醒了。我要吃饭。\n\n他要吃晚饭了。请等他吃完。');
        eat();
    }
}

function eat() {
    var eatNum = Math.floor(Math.random() * 3);
    var count = 1;
    console.log('他开始吃饭了。');
    var eating = setInterval(function () {
        eatNum = Math.floor(Math.random() * 3);
        if (eatNum === 0) {
            console.log('他吃了一口饭。(%d/100)', count);
        } else if (eatNum === 1) {
            console.log('他喝了一口汤。(%d/100)', count);
        } else {
            console.log('他吃了一口菜。(%d/100)', count);
        }
        count++;
        if (count > 100) {
            clearInterval(eating);
            setTimeout(function () {
                console.log('他吃完了。\n\n-没想到你居然这么有耐心！\n-那么，解决方法就是——\n（请稍等，他正在思考）');
                setTimeout(function () {
                    console.log('-不需要解决！');
                    setTimeout(function () {
                        console.log('\n嘿嘿\n\n祝你天天开心呀\n\n\\(≧▽≦*)o\n');
                    }, 1500)
                }, 8000);
            }, 2000)
        }
    }, 2000);
}

// 拖动窗口
var mx = 0,
    my = 0; //鼠标x、y轴坐标（相对于left，top）
var dx = 0,
    dy = 0; //对话框坐标（同上）
var isDraging = false; //不可拖动
var pageDragged;
function dragPage_1(page) {
    pageDragged = document.querySelector(page);
}
function dragPage_2(e) {
    var e = e || window.event;
    mx = e.pageX; //点击时鼠标X坐标
    my = e.pageY; //点击时鼠标Y坐标
    dx = pageDragged.offsetLeft;
    dy = pageDragged.offsetTop;
    isDraging = true; //标记对话框可拖动

    document.onmousemove = function (e) {
        var e = e || window.event;
        var x = e.pageX; //移动时鼠标X坐标
        var y = e.pageY; //移动时鼠标Y坐标
        if (isDraging) { //判断对话框能否拖动
            var moveX = dx + x - mx; //移动后对话框新的left值
            var moveY = dy + y - my; //移动后对话框新的top值
            pageDragged.style.left = moveX + 'px'; //重新设置对话框的left
            pageDragged.style.top = moveY + 'px'; //重新设置对话框的top
        };
    };
}

// 弹出提示
function alertBox(content) {
    // 询问是否跳转
    var check = document.querySelector(".alert-btn");
    var alertPage = document.querySelector(".alert");
    var box = document.querySelector(".alert-box");
    document.querySelector(".alert-content").innerHTML = content;
    alertPage.style.display = 'block';
    alertPage.style.animation = 'public_show ease .3s 1 normal both';
    box.style.animation = 'alert-in ease .5s 1 normal both';
    check.onclick = function () {
        alertPage.style.animation = 'public_hide ease .5s 1 normal both';
        setTimeout(() => {
            alertPage.style.display = 'none';
        }, 500)
        return false;
    }
}

// 禁用F12
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 123) {
        // console.log(1);
        // event.preventDefault();
        // window.location = 'f12.html';
    }
})

document.addEventListener("visibilitychange", function () {
    // alert(1)
})

//nav栏按钮点击后弹出对应界面
var webBtn = document.querySelector('.web');
var toolBtn = document.querySelector('.tool');
var setBtn = document.querySelector('.set');
var webPage = document.querySelector('.webPage');
var toolPage = document.querySelector('.toolPage');
var setPage = document.querySelector('.setPage');
var main = document.querySelector('.main');
var hitokotoDiv = document.querySelector('.hitokoto');

var flagA = 0;
var flagB = 0;
var flagC = 0;
var infoFlag = 0;

function pageOut(name, btn) {
    name.style.animation = 'pageOut ease .5s both';
    setTimeout(() => {
        name.style.zIndex = '-1';
    }, 500);
    hitokotoDiv.style.animation = 'hitokotoCome ease .5s both';
    btn.style.fontWeight = '100';
    if (name === webPage) {
        flagA = 0;
    }
    if (name === toolPage) {
        flagB = 0;
    }
    if (name === setPage) {
        flagC = 0;
    }
}

function pageCome(name, btn) {
    name.style.animation = 'pageCome ease .5s both';
    setTimeout(() => {
        name.style.zIndex = '100';
    }, 0);
    hitokotoDiv.style.animation = 'hitokotoOut ease .5s both';
    btn.style.fontWeight = '700';
    if (name === webPage) {
        flagA = 1;
    }
    if (name === toolPage) {
        flagB = 1;
    }
    if (name === setPage) {
        flagC = 1;
    }
}

webBtn.addEventListener("click", function () {
    // if (infoFlag === 1) {
    //     infoOutFrame();
    // }
    // if (flagB === 1) {
    //     pageOut(toolPage, toolBtn);
    // }
    // if (flagC === 1) {
    //     pageOut(setPage, setBtn);
    // }

    // if (flagA === 0) {
    //     pageCome(webPage, webBtn);
    // } else if (flagA === 1) {
    //     pageOut(webPage, webBtn);
    // }
})

toolBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagA === 1) {
        pageOut(webPage, webBtn);
    }
    if (flagC === 1) {
        pageOut(setPage, setBtn);
    }

    if (flagB === 0) {
        pageCome(toolPage, toolBtn);
    } else if (flagB === 1) {
        pageOut(toolPage, toolBtn);
    }
})

setBtn.addEventListener("click", function () {
    if (infoFlag === 1) {
        infoOutFrame();
    }
    if (flagA === 1) {
        pageOut(webPage, webBtn);
    }
    if (flagB === 1) {
        pageOut(toolPage, toolBtn);
    }

    if (flagC === 0) {
        pageCome(setPage, setBtn);
    } else if (flagC === 1) {
        pageOut(setPage, setBtn);
    }
})

//浏览器界面
if (deviceFlag === 1) {
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    if (vw <= 800 || vh <= 500 || vw / vh >= 2.5 || vw / vh <= 0.5) {
        noticeSound.play();
        alertBox('请调整浏览器界面，不要过宽、过高、过于窄小，<br>以获取最佳浏览体验。');
    }

}

//消息
var msg1 = document.querySelector('.msg1');
var msg1Title = document.querySelector('.msg1-title');
var msg1Btn = document.querySelector('.msg1-btn');
var msg1Detail = document.querySelector('.msg1-detail');
var msg2 = document.querySelector('.msg2');
var msg2Title = document.querySelector('.msg2-title');
var msg2Btn = document.querySelector('.msg2-btn');
var msg2Detail = document.querySelector('.msg2-detail');
var msg1Flag = 0;
var msg2Flag = 0;
var dates = new Date();
var month = dates.getMonth() + 1;
var tomorrow = dates.getDate() + 1;
var year = dates.getFullYear();
if (languageFlag === 1) {
    var msg1Date = document.querySelector('.msg1-detail-date');
    var msg2Date = document.querySelector('.msg2-detail-date');
    msg1Date.innerHTML = '请你在家长的陪伴下于' + year + '年' + month + '月' + tomorrow + '日下午12:00前到达中央广播电视台参与节目录制。';
    msg2Date.innerHTML = '请您于' + year + '年' + month + '月' + tomorrow + '日上午7:00至祁门门路与怀宁路交口向西100米 男生女生向前冲观众入口处检录并参加节目录制。';
} else if (languageFlag === 2) {
    var msg2Date = document.querySelector('.msg2-detail-date');
    msg2Date.innerHTML = 'Please arrive at Room 114514 of the Oxford University Trinity College at 7:30 am on ' + tomorrow + '/' + month + '/' + year + '.';
}

function showMsg() {
    var msgNum = Math.floor(Math.random() * 2);
    noticeSound.play();
    if (msgNum === 0) {
        msg1.style.display = 'block';
    } else if (msgNum === 1) {
        msg2.style.display = 'block';
    }
}
msg1Btn.addEventListener("click", function () {
    if (msg1Flag === 0) {
        if (deviceFlag === 1) {
            msg1.style.width = '30vw';
        } else if (deviceFlag === 2) {
            msg1.style.width = '60vw';
        }
        msg1.style.height = '40vh';
        msg1.style.overflow = 'auto';
        msg1Title.style.display = 'none';
        msg1Detail.style.display = 'block';
        if (languageFlag === 1) {
            msg1Btn.innerHTML = '关闭';
        } else if (languageFlag === 2) {
            msg1Btn.innerHTML = 'close';
        }
        msg1Flag = 1;
    } else if (msg1Flag === 1) {
        msg1.style.display = 'none';
    }
})
msg2Btn.addEventListener("click", function () {
    if (msg2Flag === 0) {
        if (deviceFlag === 1) {
            msg2.style.width = '30vw';
        } else if (deviceFlag === 2) {
            msg2.style.width = '60vw';
        }
        msg2.style.height = '40vh';
        msg2.style.overflow = 'auto';
        msg2Title.style.display = 'none';
        msg2Detail.style.display = 'block';
        if (languageFlag === 1) {
            msg2Btn.innerHTML = '关闭';
        } else if (languageFlag === 2) {
            msg2Btn.innerHTML = 'close';
        }
        msg2Flag = 1;
    } else if (msg2Flag === 1) {
        msg2.style.display = 'none';
    }
})

//拼图验证码
var shouldMove = false;
var captcha2 = document.querySelector('.captcha2');
var captcha2All = document.querySelector('.captcha2-scene');
var captcha2Handle = document.querySelector('.handle');
var captcha2Button = document.querySelector('.handle-span');
var captcha2Close = document.querySelector('.captcha2-btn');

if (deviceFlag === 1) {
    captcha2Button.addEventListener('mousedown', (e) => {
        shouldMove = true;
    })
    window.addEventListener('mousemove', (e) => {
        if (shouldMove) {
            var offsetLeft = captcha2Handle.getBoundingClientRect().left;
            var buttonWidth = captcha2Button.getBoundingClientRect().width;
            captcha2.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`);
        }
    })
    window.addEventListener('mouseup', (e) => {
        if (shouldMove) {
            var finalOffset = e.clientX - captcha2Handle.getBoundingClientRect().left;
            captcha2.style.setProperty('--moved', '0px');
            shouldMove = false;
            if (languageFlag === 1) {
                errorSound.play();
                alertBox("图片未拼合，请重试");
            } else {
                errorSound.play();
                alertBox("The image is't matched. <br>Please try again.")
            }
        }
    })
} else if (deviceFlag === 2) {
    captcha2Button.addEventListener('touchstart', (e) => {
        shouldMove = true;
    })
    window.addEventListener('touchmove', (e) => {
        var vw = document.documentElement.clientWidth;
        if (shouldMove) {
            var offsetLeft = e.changedTouches[0].clientX;
            var buttonWidth = vw * (0.3 - 0.07); //30vw：大图片（.captcha2）距离左端长度；7vw：handle左移长度
            // console.log(offsetLeft);
            // captcha2Handle.getBoundingClientRect().left;
            // captcha2.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`);
            captcha2.style.setProperty('--moved', `${offsetLeft - buttonWidth + 3}px`); //3px：handle的border宽
        }
    })
    window.addEventListener('touchend', (e) => {
        if (shouldMove) {
            var finalOffset = e.clientX - captcha2Handle.getBoundingClientRect().left;
            captcha2.style.setProperty('--moved', '0px');
            shouldMove = false;
            if (languageFlag === 1) {
                errorSound.play();
                alertBox("图片未拼合，请重试");
            } else {
                errorSound.play();
                alertBox("The image isn't matched. <br>Please try again.")
            }
        }
    })
}

captcha2Close.addEventListener("click", function () {
    captcha2All.style.display = 'none';
})

//一言
function getSen() {
    var hitokoto = document.querySelector('.sentence');
    var from = document.querySelector('.resource');
    var hitokoto_jump = document.querySelector('.hitokoto-jump');
    fetch('https://v1.hitokoto.cn/?c=d&c=i&c=k')
        .then(response => response.json())
        .then(data => {
            hitokoto_jump.href = 'https://hitokoto.cn/?uuid=' + data.uuid
            hitokoto.innerText = data.hitokoto
            from.innerText = '——' + data.from
        })
        .catch(console.error)
}
if (languageFlag === 1) {
    getSen();
    document.querySelector(".newSen").addEventListener("click", function () {
        getSen();
    })
} else if (languageFlag === 2) {
    var hitokoto_and_weather = document.querySelector('.hitokoto');
    hitokoto_and_weather.style.display = 'none';
}

//天气
var weather_location_text = document.querySelector('.weather-location').value;
var weather_location_input = document.querySelector('.weather-location');
var weather_check = document.querySelector('.weather-check');
var weather_get = document.querySelector('.weather-get');
var weather_city = document.querySelector('.weather-city');
if (languageFlag === 1) {
    if (localStorage.weather != undefined) {
        weather_location_text = localStorage.weather;
        weather_location_input.value = localStorage.weather;
    }
    getWeather();
    weather_check.addEventListener("click", function () {
        weather_location_text = document.querySelector('.weather-location').value;
        getWeather();
        localStorage.setItem("weather", weather_location_text);
    });

    weather_get.addEventListener("click", function () {
        getLocation();
        // getWeather();
    })

    function getWeather() {}

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            errorSound.play();
            alertBox("定位失败<br>浏览器不支持地理定位");
        }
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorSound.play();
                alertBox("定位失败：PERMISSION_DENIED<br>用户拒绝请求地理定位<br>或浏览器禁用非安全域的定位请求");
                break;
            case error.POSITION_UNAVAILABLE:
                errorSound.play();
                alertBox("定位失败：POSITION_UNAVAILABLE<br>位置信息不可用");
                break;
            case error.TIMEOUT:
                errorSound.play();
                alertBox("定位失败：TIMEOUT<br>请求超时");
                break;
            case error.UNKNOWN_ERROR:
                errorSound.play();
                alertBox("定位失败：UNKNOWN_ERROR<br>未知的错误");
                break;
        }
    }

    function showPosition(position) {
        var lag = position.coords.longitude; //经度
        lag = lag.toFixed(2);
        var lat = position.coords.latitude; //纬度
        lat = lat.toFixed(2);
        weather_location_input.value = lag + ',' + lat;
        // alertBox(lat +','+lag);
    }
}

//工具
//tool1_cache：清除缓存
var tool1_cache = document.querySelector('.tool1_cache');
var tool1_cacheChange = document.querySelector('.tool1_cache-change');
tool1_cache.addEventListener("click", function () {
    localStorage.clear();
    body.style.cursor = 'wait';
    setTimeout(function () {
        body.style.cursor = 'url(../public/cursor/normal.cur), default';
        if (languageFlag === 1) {
            noticeSound.play();
            alertBox('&emsp;缓存已清除&emsp;');
        } else if (languageFlag === 2) {
            noticeSound.play();
            alertBox('The cache has been cleared.')
        }
        tool1_cacheChange.innerHTML = '0.0000 MB';
    }, 1234);
})

// var tool2In = document.querySelector('.tool2-input');
// var tool2Out = document.querySelector('.tool2-output');
// var tool2Check = document.querySelector('.tool2-check');
// var tool2Middle = '$$ ' + tool2In.value + ' $$';
// tool2Check.addEventListener("click", function () {
//     
//     tool2Out.innerHTML = tool2Middle;
// });

//tool3_feedback: 意见反馈
var tool3_feedback = document.querySelector('.tool3_feedback-check');
document.querySelector(".tool3_feedback-input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // 按下回车键的键码是13
        event.preventDefault(); // 阻止回车键的默认行为
        if (languageFlag === 1) {
            errorSound.play();
            alertBox("&emsp;发送失败。&emsp;");

        } else if (languageFlag === 2) {
            errorSound.play();
            alertBox("&emsp;Failed.&emsp;");
        }
    }
});
tool3_feedback.addEventListener("click", function () {
    if (languageFlag === 1) {
        errorSound.play();
        alertBox("&emsp;发送失败。&emsp;");
    } else if (languageFlag === 2) {
        errorSound.play();
        alertBox("&emsp;Failed.&emsp;");
    }
})

//tool4_signup：注册账号
var tool4_signup = document.querySelector('.tool4_signup-check');
tool4_signup.addEventListener("click", function () {
    captcha2All.style.display = 'block';
    // if (languageFlag === 1) {
    //     alertBox("您还没有注册。\n您需要先注册账号后才能注册账号。");
    // } else if (languageFlag === 2) {
    //     alertBox("You have not registered. \nYou need to register an account before you can register an account.");
    // }
})

//tool5_rareWord：生僻字读音查询
var tool5_rareWord = document.querySelector('.tool5_rareWord-check');
var tool5_rareWordChange = document.querySelector('.tool5_rareWord-output')
tool5_rareWord.addEventListener("click", function () {
    if (languageFlag === 1) {
        tool5_rareWordChange.innerHTML = '正在搜索……';
        setTimeout(() => {
            tool5_rareWordChange.innerHTML = '生shēng&emsp;僻pì&emsp;字zì';
        }, 1234);
    } else if (languageFlag === 2) {
        tool5_rareWordChange.innerHTML = 'searching……';
        setTimeout(() => {
            tool5_rareWordChange.innerHTML = 'rare/reə/ word/wɜ:d/';
        }, 1234);
    }
})

//tool6_bugFeedback：错误反馈
var tool6_bugFeedback = document.querySelector('.tool6_bugFeedback-check');
tool6_bugFeedback.addEventListener("click", function () {
    if (languageFlag === 1) {
        errorSound.play();
        alertBox('什么？？？居然出错了？不可能的。肯定是你的问题。');
    } else if (languageFlag === 2) {
        errorSound.play();
        alertBox('What??? Something went wrong? No way. It must be your problem.');
    }
})

//tool7_formula：求直线解析式
var tool7_formulaOut = document.querySelector('.tool7_formula-output');
var tool7_formulaCheck = document.querySelector('.tool7_formula-check');
var tool7_formulaOutK = document.querySelector('.tool7_formula-out-y');
var tool7_formulaOutB = document.querySelector('.tool7_formula-out-k');
var t7a;
var t7b;
var t7c;
var t7d;
var t7e;
var t7f;
var t7g;
var t7h;
var t7kFzOut;
var t7kFmOut;
var t7hFzOut;
var t7hFmOut;
var t7kFz; //k的分子
var t7kFm; //k的分母
var t7hFz; // y=kx+b 中的b已被占用，用h代替
var t7hFm;
var t7hFzLast, t7hFmLast, t7kFzLast, t7kFmLast;
tool7_formula();
tool7_formulaCheck.addEventListener("click", function () {
    // alertBox("1");
    tool7_formula();
})

//约分
function yf1(m, n) {
    // 返回约分m/n后得到的分子m
    var m;
    var n;
    var a = m;
    var b = n;
    (a >= b) ? (a = m, b = n) : (a = n, b = m);
    if (m != 1 && n != 1) {
        for (var i = b; i >= 2; i--) {
            if (m % i == 0 && n % i == 0) {
                m = m / i;
                n = n / i;
            }
        }
    }
    return m;
}

function yf2(m, n) {
    // 返回约分m/n后得到的分母n
    var m;
    var n;
    var a = m;
    var b = n;
    (a >= b) ? (a = m, b = n) : (a = n, b = m);
    if (m != 1 && n != 1) {
        for (var i = b; i >= 2; i--) {
            if (m % i == 0 && n % i == 0) {
                m = m / i;
                n = n / i;
            }
        }
    }
    return n;
}

function tool7_formula() {
    t7a = parseInt(document.querySelector('.tool7_formula-a').value);
    t7b = parseInt(document.querySelector('.tool7_formula-b').value);
    t7c = parseInt(document.querySelector('.tool7_formula-c').value);
    t7d = parseInt(document.querySelector('.tool7_formula-d').value);
    t7e = parseInt(document.querySelector('.tool7_formula-e').value);
    t7f = parseInt(document.querySelector('.tool7_formula-f').value);
    t7g = parseInt(document.querySelector('.tool7_formula-g').value);
    t7h = parseInt(document.querySelector('.tool7_formula-h').value);
    t7kFzOut = document.querySelector('.tool7_formula-out-k-fz');
    t7kFmOut = document.querySelector('.tool7_formula-out-k-fm');
    t7hFzOut = document.querySelector('.tool7_formula-out-h-fz');
    t7hFmOut = document.querySelector('.tool7_formula-out-h-fm');
    t7kFz = (t7b * t7f) * ((t7c * t7h) - (t7d * t7g));
    t7kFm = (t7d * t7h) * ((t7a * t7f) - (t7b * t7e));
    t7hFz = ((t7b * t7c * t7d * t7h) * ((t7a * t7f) - (t7b * t7e))) - ((t7a * t7b * t7d * t7f) * ((t7c * t7h) - (t7d * t7g)));
    t7hFm = (t7b * t7d * t7d * t7h) * ((t7a * t7f) - (t7b * t7e));
    // alertBox(t7kFz + '/' + t7kFm + ' k' + ' + ' + t7hFz + '/' + t7hFm);

    if (t7kFz <= 0 && t7kFm <= 0) {
        t7kFzLast = yf1((0 - t7kFz), (0 - t7kFm));
        t7kFmLast = yf2((0 - t7kFz), (0 - t7kFm));
        tool7_formulaOutK.innerHTML = 'y =';
    }
    if (t7hFz <= 0 && t7hFm < 0) {
        t7hFzLast = yf1((0 - t7hFz), (0 - t7hFm));
        t7hFmLast = yf2((0 - t7hFz), (0 - t7hFm));
        tool7_formulaOutB.innerHTML = 'x +';
    }
    if (t7kFz >= 0 && t7kFm >= 0) {
        t7kFzLast = yf1((t7kFz), (t7kFm));
        t7kFmLast = yf2((t7kFz), (t7kFm));
        tool7_formulaOutK.innerHTML = 'y =';
    }
    if (t7hFz >= 0 && t7hFm >= 0) {
        t7hFzLast = yf1((t7hFz), (t7hFm));
        t7hFmLast = yf2((t7hFz), (t7hFm));
        tool7_formulaOutB.innerHTML = 'x +';
    }
    if (t7kFz >= 0 && t7kFm <= 0) {
        t7kFzLast = yf1((t7kFz), (0 - t7kFm));
        t7kFmLast = yf2((t7kFz), (0 - t7kFm));
        tool7_formulaOutK.innerHTML = 'y = -';
    }
    if (t7kFz <= 0 && t7kFm >= 0) {
        t7kFzLast = yf1((0 - t7kFz), (t7kFm));
        t7kFmLast = yf2((0 - t7kFz), (t7kFm));
        tool7_formulaOutK.innerHTML = 'y = -';
    }
    if (t7hFz >= 0 && t7hFm <= 0) {
        t7hFzLast = yf1((t7hFz), (0 - t7hFm));
        t7hFmLast = yf2((t7hFz), (0 - t7hFm));
        tool7_formulaOutB.innerHTML = 'x -';
    }
    if (t7hFz <= 0 && t7hFm >= 0) {
        t7hFzLast = yf1((0 - t7hFz), (t7hFm));
        t7hFmLast = yf2((0 - t7hFz), (t7hFm));
        tool7_formulaOutB.innerHTML = 'x -';
    }

    t7kFzOut.innerHTML = t7kFzLast;
    t7kFmOut.innerHTML = t7kFmLast;
    t7hFzOut.innerHTML = t7hFzLast;
    t7hFmOut.innerHTML = t7hFmLast;
};

var tool7_formulaWhy = document.querySelector('.tool7_formula-why');
var tool7_formulaOpen = document.querySelector('.tool7_formula-why-title');
var tool7_formulaClose = document.querySelector('.tool7_formula-why-close');
tool7_formulaOpen.addEventListener("click", function () {
    tool7_formulaWhy.style.display = 'block';
    if (deviceFlag === 1) {
        tool7_formulaWhy.style.animation = 'tool7_formulaCome ease-in-out .3s both';
    } else if (deviceFlag === 2) {
        tool7_formulaWhy.style.animation = 'tool7_formulaComeM ease-in-out .3s both';
    }
})
tool7_formulaClose.addEventListener("click", function () {
    if (deviceFlag === 1) {
        tool7_formulaWhy.style.animation = 'tool7_formulaOut ease-in-out .3s both';
    } else if (deviceFlag === 2) {
        tool7_formulaWhy.style.animation = 'tool7_formulaOutM ease-in-out .3s both';
    }
    setTimeout(function () {
        tool7_formulaWhy.style.display = 'none';
    }, 300)
})

//tool8_login：登录
var tool8_login;
var tool8_loginUrl;
var tool8_loginCheck = document.querySelector('.tool8_login-check');
var logo = document.querySelector('.logo');
var infoLogo = document.querySelector('.info-headimg');
var infoNum = document.querySelector('.info-qqnum');
var infoName = document.querySelector('.info-qqname');
var captchaCode = '';
var inputCaptcha = document.querySelector('.inputCaptcha').value;
var captchaCanvas = document.querySelector(".captcha");
var captchaCanvasWidth;
var qqName = '';
var qqPhotoUrl = '';
window.onload = function () {
    // captchaCanvas ;
    captchaCanvasWidth = parseInt(document.querySelector(".tool-table-right").getBoundingClientRect().width);
    captchaCanvas.width = captchaCanvasWidth;
    captchaCanvas.height = captchaCanvasWidth / 4;
    newCaptcha();
}

if (localStorage.signin != undefined) {
    getQQName(localStorage.signin);
    getQQPhoto(localStorage.signin);
    logo.style.background = 'url(' + qqPhotoUrl + ')';
    logo.style.backgroundSize = 'cover';
    infoLogo.style.background = 'url(' + qqPhotoUrl + ')';
    infoLogo.style.backgroundSize = 'cover';
    infoNum.innerHTML = localStorage.signin;
    document.querySelector('.tool8_login-right').value = localStorage.signin;
}
tool8_loginCheck.addEventListener("click", function () {
    tryLogIn();
})
document.querySelector(".tool8_login-right").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // 按下回车键的键码是13
        event.preventDefault(); // 阻止回车键的默认行为
        tryLogIn();
    }
});
document.querySelector(".inputCaptcha").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // 按下回车键的键码是13
        event.preventDefault(); // 阻止回车键的默认行为
        tryLogIn();
    }
});

function tryLogIn() {
    inputCaptcha = document.querySelector('.inputCaptcha').value;
    if (inputCaptcha === captchaCode) {
        istool8_loginNaN = document.querySelector('.tool8_login-right').value;
        tool8_login = parseInt(istool8_loginNaN);
        if (istool8_loginNaN === '') {
            if (languageFlag === 1) {
                alertSound.play();
                alertBox('您已退出登录');
            } else if (languageFlag === 2) {
                alertSound.play();
                alertBox('You have logged out');
            }
            if (languageFlag === 1) {
                infoName.innerHTML = '未登录';
            } else if (languageFlag === 2) {
                infoName.innerHTML = 'Not signed in';
            }
            tool8_loginUrl = '../../public/images/logo.jpg';
            infoNum.innerHTML = '&emsp;';
            localStorage.removeItem("signin");
        } else {
            getQQName(tool8_login);
            getQQPhoto(tool8_login);
            // tool8_loginUrl = 'https://api.qqsuu.cn/api/qt?qq=' + tool8_login;
            logo.style.background = 'url(' + qqPhotoUrl + ')';
            logo.style.backgroundSize = 'cover';
            infoLogo.style.background = 'url(' + qqPhotoUrl + ')';
            infoLogo.style.backgroundSize = 'cover';
            infoNum.innerHTML = tool8_login;
            if (languageFlag === 1) {
                alertSound.play();
                alertBox("&emsp;登录成功&emsp;");
            } else if (languageFlag === 2) {
                alertSound.play();
                alertBox("Successfully sign in")
            }
            localStorage.setItem("signin", tool8_login);
            setTimeout(function () {
                showMsg();
            }, 1234);
        }
    } else {
        if (languageFlag === 1) {
            errorSound.play();
            alertBox('&emsp;验证码错误&emsp;');
        } else if (languageFlag === 2) {
            errorSound.play();
            alertBox("The captcha is incorrect.");
        }
        newCaptcha();
    }
}

function getQQName(num) {
    $.ajax({
        // url: "https://api.qqsuu.cn/api/dm-qq.info?qq=" + num,
        // url: "https://api.uomg.com/api/qq.info?qq=" + num,
        url: "https://api.oioweb.cn/api/qq/info?qq=" + num,
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result["data"].name, result["data"].avatar);
            // console.log(result.result.nickname);
            qqName = result.result.nickname;
            infoName.innerHTML = qqName;
            if (result.result.nickname === null) {
                errorSound.play();
                alertBox("QQ昵称获取失败");
            }
        },
        error: function () {
            errorSound.play();
            alertBox("QQ昵称获取失败");
        }
    });
}

function getQQPhoto(num) {
    qqPhotoUrl = "https://q3.qlogo.cn/headimg_dl?dst_uin=" + num + "&spec=100";
    /*
    $.ajax({
        // url: "https://api.qqsuu.cn/api/dm-qq.info?qq=" + num,
        // url: "https://tenapi.cn/bilibili/?uid=" + num,
        // url: "https://tenapi.cn/wether/?city=北京",
        type: "GET",
        dataType: "json",
        success: function (result) {
            // console.log(result["data"].name, result["data"].avatar);
            qqPhotoUrl = result["data"].imgurl;
            // alertBox(result["data"].imgurl)
        },
        error: function () {
            // alertBox("QQ头像获取失败");
        }
    });
    */
}

document.querySelector('.captcha').addEventListener("click", function () {
    newCaptcha();
    // alertBox(captchaCode);
})

function newCaptcha() {
    let captcha2 = new Captcha({
        lineWidth: captchaCanvasWidth / 240, //线条宽度
        lineNum: 4, //线条数量
        dotR: captchaCanvasWidth / 120, //点的半径
        dotNum: 15, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: captchaCanvasWidth / 8, //字体大小
        fontFamily: ['consolas'], //字体类型
        fontStyle: 'fill', //字体绘制方法，有fill和stroke
        content: 'abcdefghijklmnopqrstuvwxyz0123456789', //验证码内容
        length: 6 //验证码长度
    }); // 传值
    captcha2.draw(document.querySelector('.captcha'), r => {
        captchaCode = r;
        // console.log(captchaCode);
    });
}

//设置
//set1_lang：语言
var set1_langOpt = document.querySelector('.set1_lang-option');
var set1_langCheck = document.querySelector('.set1_lang-check');
var set1_lang = document.querySelector('.set1_lang-select').value;

function set1_langChange() {
    set1_lang = document.querySelector('.set1_lang-select').value;
    if (deviceFlag === 1) {
        if (set1_lang === '1') {
            languageFlag = 1;
            window.location = "index.html";
        } else if (set1_lang === '2') {
            languageFlag = 2;
            window.location = "index.en.html";
        } else if (set1_lang === '3') {
            window.location = '../public/error/403.html';
        }
    } else if (deviceFlag === 2) {
        if (set1_lang === '1') {
            window.location = "index.m.html";
            languageFlag = 1;
        } else if (set1_lang === '2') {
            languageFlag = 2;
            window.location = "index.m.en.html";
        } else if (set1_lang === '3') {
            window.location = "../public/error/403.html";
        }
    }

}
set1_langCheck.addEventListener("click", function () {
    set1_langChange();
})

//set2_music：音乐
var set2_musicOpt = document.querySelector('.set2_music-option');
var set2_musicOpt1 = document.querySelector('.set2_music-option1');
var set2_musicOpt2 = document.querySelector('.set2_music-option2');
var set2_musicCheck = document.querySelector('.set2_music-check');
var bgm = document.querySelector('.bgm');
var set2_music = document.querySelector('.set2_music-select').value;
if (localStorage.set2_music != undefined) {
    if (localStorage.set2_music === '1') {
        bgm.play();
        set2_musicOpt1.selected = true;
    } else if (localStorage.set2_music === '2') {
        bgm.pause();
        set2_musicOpt2.selected = true;
    }
}
set2_musicCheck.addEventListener("click", function () {
    set2_music = document.querySelector('.set2_music-select').value;
    if (set2_music === '1') {
        bgm.play();
        set2_musicOpt1.selected = true;
    } else if (set2_music === '2') {
        bgm.pause();
        set2_musicOpt2.selected = true;
    }
    localStorage.setItem("set2_music", set2_music);

})

//set3_background：背景图片
//set4_theme：主题色
var themeFlag = '1';
var set3_background = '1';
var set3_backgroundOpt = document.querySelector('.set3_background-option');
var set3_backgroundOpt1 = document.querySelector('.set3_background-option1');
var set3_backgroundOpt2 = document.querySelector('.set3_background-option2');
var set3_backgroundCheck = document.querySelector('.set3_background-check');
var main = document.querySelector('.main');

// var set4_themeOpt = document.querySelector('.set4_theme-option');
var set4_themeCheck = document.querySelector('.set4_theme-check');
var main = document.querySelector('.main');
// var load = document.querySelector('.load');

var set4_theme_option1 = document.querySelector('.set4_theme-preview[themeNum="1"]');
var set4_theme_option2 = document.querySelector('.set4_theme-preview[themeNum="2"]');
var set4_theme_option3 = document.querySelector('.set4_theme-preview[themeNum="3"]');
var set4_theme_option4 = document.querySelector('.set4_theme-preview[themeNum="4"]');
var set4_theme_option5 = document.querySelector('.set4_theme-preview[themeNum="5"]');

function set4_chooseOptionEventListener(option) {
    var selector_this = '.set4_theme-preview[themeNum="' + option + '"]';
    document.querySelector(selector_this).addEventListener("click", function () {
        for (let i = 1; i <= 5; i++) {
            if (i != option) {
                var selector_i = '.set4_theme-preview[themeNum="' + i + '"]';
                document.querySelector(selector_i).style.border = '.5vh solid rgba(0, 0, 200, 0)';
            }
        }
        if (option === '2') {
            this.style.border = '.5vh solid rgba(0, 200, 0, 1)';
        } else {
            this.style.border = '.5vh solid rgba(0, 0, 200, 1)';
        }
        themeFlag = option;
        localStorage.setItem("set4_theme", option);
    });
}
set4_chooseOptionEventListener('1');
set4_chooseOptionEventListener('2');
set4_chooseOptionEventListener('3');
set4_chooseOptionEventListener('4');
set4_chooseOptionEventListener('5');

if (localStorage.set4_theme != undefined) {
    themeFlag = localStorage.set4_theme;
    var selector_this = '.set4_theme-preview[themeNum="' + themeFlag + '"]';
    if (themeFlag === '2') {
        document.querySelector(selector_this).style.border = '.5vh solid rgba(0, 200, 0, 1)';
    } else {
        document.querySelector(selector_this).style.border = '.5vh solid rgba(0, 0, 200, 1)';
    }
    changeTheme();
} else {
    document.querySelector('.set4_theme-preview[themeNum="1"]').style.border = '.5vh solid rgba(0, 0, 200, 1)';
}

set4_themeCheck.addEventListener("click", function () {
    changeTheme();
    localStorage.setItem("set4_theme", themeFlag);
})

function setBackground_day1() {
    main.style.background = 'url(./images/bg_mslight.jpg)';
    main.style.backgroundSize = 'cover';
    if (languageFlag === 1) {
        set3_backgroundOpt1.innerHTML = '背景1(Windows 11主题)';
        set3_backgroundOpt2.innerHTML = '背景2(电影 你的名字。)';
    } else if (languageFlag === 2) {
        set3_backgroundOpt1.innerHTML = 'background1(Windows 11 Theme)';
        set3_backgroundOpt2.innerHTML = 'background2(film: Your Name.)';
    }
    set3_backgroundOpt1.selected = true;
    set3_backgroundOpt2.selected = false;
}

function setBackground_day2() {
    main.style.background = 'url(./images/background2.jpg)';
    main.style.backgroundSize = 'cover';
    if (languageFlag === 1) {
        set3_backgroundOpt1.innerHTML = '背景1(Windows 11主题)';
        set3_backgroundOpt2.innerHTML = '背景2(电影 你的名字。)';
    } else if (languageFlag === 2) {
        set3_backgroundOpt1.innerHTML = 'background1(Windows 11 Theme)';
        set3_backgroundOpt2.innerHTML = 'background2(film: Your Name.)';
    }
    set3_backgroundOpt1.selected = false;
    set3_backgroundOpt2.selected = true;
}

function setBackground_night1() {
    main.style.background = 'url(./images/bg_msnight.jpg)';
    main.style.backgroundSize = 'cover';
    if (languageFlag === 1) {
        set3_backgroundOpt1.innerHTML = '背景1(Windows 11主题)';
        set3_backgroundOpt2.innerHTML = '背景2(知乎@爱做饭的程序员)';
    } else if (languageFlag === 2) {
        set3_backgroundOpt1.innerHTML = 'background1(Windows 11 Theme)';
        set3_backgroundOpt2.innerHTML = 'background2(Zhihu@爱做饭的程序员)';
    }
    set3_backgroundOpt1.selected = true;
    set3_backgroundOpt2.selected = false;
}

function setBackground_night2() {
    main.style.background = 'url(./images/background_night2.jpg)';
    main.style.backgroundSize = 'cover';
    if (languageFlag === 1) {
        set3_backgroundOpt1.innerHTML = '背景1(Windows 11主题)';
        set3_backgroundOpt2.innerHTML = '背景2(知乎@爱做饭的程序员)';
    } else if (languageFlag === 2) {
        set3_backgroundOpt1.innerHTML = 'background1(Windows 11 Theme)';
        set3_backgroundOpt2.innerHTML = 'background2(Zhihu@爱做饭的程序员)';
    }
    set3_backgroundOpt1.selected = false;
    set3_backgroundOpt2.selected = true;
}

function changeTheme() {
    switch (themeFlag) {
        case '1': // 默认 薄荷绿
            localStorage.setItem("set4_theme", '1');
            if (localStorage.set3_background === '1') {
                setBackground_day1();
            } else if (localStorage.set3_background === '2') {
                setBackground_day2();
            } else {
                setBackground_day1();
            }
            // load.style.color = 'rgb(100, 100, 100)';
            body.style.color = 'black';
            body.style.setProperty('--basicColor_purple_a050', 'rgba(150, 150, 255, 0.5)');
            body.style.setProperty('--basicColor_purple_a040', 'rgba(150, 150, 255, 0.4)');
            body.style.setProperty('--basicColor_purple_a030', 'rgba(150, 150, 255, 0.3)');
            body.style.setProperty('--basicColor_purple_a000', 'rgba(150, 150, 255, 0)');
            body.style.setProperty('--basicColor_inputFocus', 'rgba(106, 90, 255, 1)');
            body.style.setProperty('--basicColor_purple_a060', 'rgba(150, 150, 255, 0.6)');
            body.style.setProperty('--basicColor_btnHover', 'rgba(106, 90, 255, 0.7)');
            body.style.setProperty('--basicColor_nav', 'rgba(40, 75, 225, 0.6)');
            body.style.setProperty('--basicColor_info', 'rgba(255, 255, 255, .8)');
            body.style.setProperty('--basicColor_bodyBackground', 'rgb(150, 150, 255)');
            body.style.setProperty('--basicColor_cyan_a050', 'rgba(129, 216, 207, 0.5)');
            body.style.setProperty('--basicColor_white_a030', 'rgba(255, 255, 255, 0.3)');
            body.style.setProperty('--basicColor_white_a070', 'rgba(255, 255, 255, 0.7)');
            body.style.setProperty('--basicColor_white_a080', 'rgba(255, 255, 255, 0.8)');
            body.style.setProperty('--basicColor_white_a100', 'rgba(255, 255, 255, 1)');
            body.style.setProperty('--basicColor_black_a100', 'rgba(0, 0, 0, 1)');
            main.style.backgroundSize = 'cover';
            break;
        case '2': // 暗夜黑
            localStorage.setItem("set4_theme", '2');
            if (localStorage.set3_background === '1') {
                setBackground_night1();
            } else if (localStorage.set3_background === '2') {
                setBackground_night2();
            } else {
                setBackground_night1();
            }
            // load.style.color = 'rgb(200, 200, 200)';
            body.style.color = 'rgb(200, 200, 200)';
            body.style.setProperty('--basicColor_purple_a060', 'rgba(150, 150, 255, 0.6)');
            body.style.setProperty('--basicColor_purple_a050', 'rgba(150, 150, 255, 0.5)');
            body.style.setProperty('--basicColor_purple_a040', 'rgba(150, 150, 255, 0.4)');
            body.style.setProperty('--basicColor_purple_a030', 'rgba(150, 150, 255, 0.3)');
            body.style.setProperty('--basicColor_purple_a000', 'rgba(150, 150, 255, 0)');
            body.style.setProperty('--basicColor_inputFocus', 'rgba(106, 90, 255, 1)');
            body.style.setProperty('--basicColor_btnHover', 'rgba(106, 90, 255, 0.7)');
            body.style.setProperty('--basicColor_nav', 'rgba(200, 200, 255, 0.6)');
            body.style.setProperty('--basicColor_info', 'rgba(25, 25, 75, .8)');
            body.style.setProperty('--basicColor_bodyBackground', 'rgb(25, 25, 75)');
            body.style.setProperty('--basicColor_cyan_a050', 'rgba(79, 166, 157, 0.5)');
            body.style.setProperty('--basicColor_white_a030', 'rgba(255, 255, 255, 0.3)');
            body.style.setProperty('--basicColor_white_a050', 'rgba(255, 255, 255, .3)');
            body.style.setProperty('--basicColor_white_a070', 'rgba(255, 255, 255, 0.7)');
            body.style.setProperty('--basicColor_white_a080', 'rgba(50, 50, 200, .8)');
            body.style.setProperty('--basicColor_white_a100', 'rgba(50, 50, 50, 1)');
            body.style.setProperty('--basicColor_black_a100', 'rgba(255, 255, 255, .7)');
            main.style.backgroundSize = 'cover';
            break;
        case '3': // 少女粉
            localStorage.setItem("set4_theme", '3');
            if (localStorage.set3_background === '1') {
                setBackground_day1();
            } else if (localStorage.set3_background === '2') {
                setBackground_day2();
            } else {
                setBackground_day2();
            }
            // load.style.color = 'rgb(100, 100, 100)';
            body.style.color = 'black';
            body.style.setProperty('--basicColor_purple_a060', 'rgba(255,128,160, 0.6)');
            body.style.setProperty('--basicColor_purple_a050', 'rgba(255,128,160, 0.5)');
            body.style.setProperty('--basicColor_purple_a040', 'rgba(255,128,160, 0.4)');
            body.style.setProperty('--basicColor_purple_a030', 'rgba(255,128,160, 0.3)');
            body.style.setProperty('--basicColor_purple_a000', 'rgba(255,128,160, 0)');
            body.style.setProperty('--basicColor_inputFocus', 'rgba(255,100,140, 1)');
            body.style.setProperty('--basicColor_btnHover', 'rgba(255,128,160, 0.9)');
            body.style.setProperty('--basicColor_nav', 'rgba(244,122,117, 0.9)');
            body.style.setProperty('--basicColor_info', 'rgba(255,227,247, .8)');
            body.style.setProperty('--basicColor_bodyBackground', 'rgb(252, 187, 207)');
            body.style.setProperty('--basicColor_cyan_a050', 'rgba(252,187,207, 0.5)');
            body.style.setProperty('--basicColor_white_a030', 'rgba(255, 255, 255, 0.3)');
            body.style.setProperty('--basicColor_white_a070', 'rgba(255, 255, 255, 0.7)');
            body.style.setProperty('--basicColor_white_a080', 'rgba(255, 255, 255, 0.8)');
            body.style.setProperty('--basicColor_white_a100', 'rgba(255, 255, 255, 1)');
            body.style.setProperty('--basicColor_black_a100', 'rgba(0, 0, 0, 1)');
            main.style.backgroundSize = 'cover';
            break;
        case '4': // 地中海蓝
            localStorage.setItem("set4_theme", '4');
            if (localStorage.set3_background === '1') {
                setBackground_day1();
            } else if (localStorage.set3_background === '2') {
                setBackground_day2();
            } else {
                setBackground_day1();
            }
            // load.style.color = 'rgb(100, 100, 100)';
            body.style.color = 'black';
            body.style.setProperty('--basicColor_purple_a060', 'rgba(7,128,207, 0.6)');
            body.style.setProperty('--basicColor_purple_a050', 'rgba(7,128,207, 0.5)');
            body.style.setProperty('--basicColor_purple_a040', 'rgba(7,128,207, 0.4)');
            body.style.setProperty('--basicColor_purple_a030', 'rgba(7,128,207, 0.3)');
            body.style.setProperty('--basicColor_purple_a000', 'rgba(7,128,207, 0)');
            body.style.setProperty('--basicColor_inputFocus', 'rgba(0,100,255, 1)');
            body.style.setProperty('--basicColor_btnHover', 'rgba(68,86,199, 0.9)');
            body.style.setProperty('--basicColor_nav', 'rgba(68,86,199, 0.9)');
            body.style.setProperty('--basicColor_info', 'rgba(217,255,255, .8)');
            body.style.setProperty('--basicColor_bodyBackground', 'rgb(114, 148, 212)');
            body.style.setProperty('--basicColor_cyan_a050', 'rgba(167,223,236, 0.5)');
            body.style.setProperty('--basicColor_white_a030', 'rgba(255, 255, 255, 0.3)');
            body.style.setProperty('--basicColor_white_a070', 'rgba(255, 255, 255, 0.7)');
            body.style.setProperty('--basicColor_white_a080', 'rgba(255, 255, 255, 0.8)');
            body.style.setProperty('--basicColor_white_a100', 'rgba(255, 255, 255, 1)');
            body.style.setProperty('--basicColor_black_a100', 'rgba(0, 0, 0, 1)');
            main.style.backgroundSize = 'cover';
            break;
        case '5': // 麦浪金
            localStorage.setItem("set4_theme", '5');
            if (localStorage.set3_background === '1') {
                setBackground_day1();
            } else if (localStorage.set3_background === '2') {
                setBackground_day2();
            } else {
                setBackground_day1();
            }
            // load.style.color = 'rgb(100, 100, 100)';
            body.style.color = 'black';
            body.style.setProperty('--basicColor_purple_a060', 'rgba(253,199,101, 0.6)');
            body.style.setProperty('--basicColor_purple_a050', 'rgba(253,199,101, 0.5)');
            body.style.setProperty('--basicColor_purple_a040', 'rgba(253,199,101, 0.4)');
            body.style.setProperty('--basicColor_purple_a030', 'rgba(253,199,101, 0.3)');
            body.style.setProperty('--basicColor_purple_a000', 'rgba(253,199,101, 0)');
            body.style.setProperty('--basicColor_inputFocus', 'rgba(254,140,0, 1)');
            body.style.setProperty('--basicColor_btnHover', 'rgba(254,140,0, 0.9)');
            body.style.setProperty('--basicColor_nav', 'rgba(254,140,0, 0.9)');
            body.style.setProperty('--basicColor_info', 'rgba(255,235,163, .8)');
            body.style.setProperty('--basicColor_bodyBackground', 'rgb(253, 199, 101)');
            body.style.setProperty('--basicColor_cyan_a050', 'rgba(255,195,123, 0.5)');
            body.style.setProperty('--basicColor_white_a030', 'rgba(255, 255, 255, 0.3)');
            body.style.setProperty('--basicColor_white_a070', 'rgba(255, 255, 255, 0.7)');
            body.style.setProperty('--basicColor_white_a080', 'rgba(255, 255, 255, 0.8)');
            body.style.setProperty('--basicColor_white_a100', 'rgba(255, 255, 255, 1)');
            body.style.setProperty('--basicColor_black_a100', 'rgba(0, 0, 0, 1)');
            main.style.backgroundSize = 'cover';
            break;

        default:
            break;
    }
}

set3_backgroundCheck.addEventListener("click", function () {
    set3_background = document.querySelector('.set3_background-select').value;
    localStorage.setItem("set3_background", set3_background);
    if (set3_background === '1') {
        set3_backgroundOpt1.selected = true;
        set3_backgroundOpt2.selected = false;
    } else if (set3_background === '2') {
        set3_backgroundOpt1.selected = false;
        set3_backgroundOpt2.selected = true;
    }
    if (themeFlag != '2') {
        if (set3_background === '1') {
            setBackground_day1();
        } else if (set3_background === '2') {
            setBackground_day2();
        }
    } else if (themeFlag === '2') {
        if (set3_background === '1') {
            setBackground_night1();
        } else if (set3_background === '2') {
            setBackground_night2();
        }
    }
})

if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    themeFlag = '2';
    changeTheme();
}