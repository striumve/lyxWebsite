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

//获取与显示时间

function getNowDate() {
    var getdate = new Date();
    var year = getdate.getFullYear();
    var month = getdate.getMonth() + 1;
    var date = getdate.getDate();
    var day = getdate.getDay();
    var hour = getdate.getHours();
    var minute = getdate.getMinutes();
    var chiday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var outday = chiday[day];
    var outhour = hour;
    var outmin = minute;
    var output = 'Time';
    if (hour < 10) {
        outhour = '0' + hour;
    }
    if (minute < 10) {
        outmin = '0' + minute;
    }
    output = year + '年' + month + '月' + date + '日' + ' / ' + outday + ' / ' + outhour + ':' + outmin;
    return output;
}

document.querySelector(".time").innerHTML = getNowDate();
var updateTime = setInterval(function () {
    document.querySelector(".time").innerHTML = getNowDate();
}, 10000);


//一言
function getSentence() {
    var hitokoto = document.querySelector('.yiyan-sen');
    var from = document.querySelector('.yiyan-from');
    var hitokoto_jump = document.querySelector('.yiyan-a');
    fetch('https://v1.hitokoto.cn/?c=d&c=i&c=k')
        .then(response => response.json())
        .then(data => {
            hitokoto_jump.href = 'https://hitokoto.cn/?uuid=' + data.uuid
            hitokoto.innerText = data.hitokoto
            from.innerText = '——' + data.from
        })
        .catch(console.error)
}

getSentence();
document.querySelector(".yiyan-new").addEventListener("click", function () {
    // alert(1);
    getSentence();
});

//页面切换

var talkPage = document.querySelector(".talk");
var artiPage = document.querySelector(".article");
var linkPage = document.querySelector(".link");
var abouPage = document.querySelector(".about");
var othePage = document.querySelector(".other");
var toolPage = document.querySelector(".tool");
var talkBtn = document.querySelector(".nav-btn-talk");
var artiBtn = document.querySelector(".nav-btn-article");
var linkBtn = document.querySelector(".nav-btn-link");
var abouBtn = document.querySelector(".nav-btn-about");
var otheBtn = document.querySelector(".nav-btn-other");
var toolBtn = document.querySelector(".nav-btn-tool");
var curPage = 1;
var pageSelector = [0, talkPage, artiPage, linkPage, toolPage, othePage, abouPage];
var btnSelector = [0, talkBtn, artiBtn, linkBtn, toolBtn, otheBtn, abouBtn];

function changePage(fromNum, toNum, fromPage, toPage) {
    // 页面代码1,2,3,4
    if (toNum != curPage) {
        if (fromNum < toNum) {
            toPage.style.opacity = 0;
            toPage.style.display = 'block';
            fromPage.style.animation = 'page_hide_totop ease .3s both';
            toPage.style.animation = 'page_show_totop ease .3s both';
            setTimeout(() => {
                fromPage.style.display = 'none';
            }, 350);
        }
        if (fromNum > toNum) {
            toPage.style.opacity = 0;
            toPage.style.display = 'block';
            fromPage.style.animation = 'page_hide_tobottom ease .3s both';
            toPage.style.animation = 'page_show_tobottom ease .3s both';
            setTimeout(() => {
                fromPage.style.display = 'none';
            }, 350);
        }
        curPage = toNum;
        btnSelector[fromNum].classList.remove('active');
        btnSelector[curPage].classList.add('active');
    }
}

talkBtn.addEventListener("click", function () {
    changePage(curPage, 1, pageSelector[curPage], pageSelector[1]);
})

artiBtn.addEventListener("click", function () {
    changePage(curPage, 2, pageSelector[curPage], pageSelector[2]);
})

linkBtn.addEventListener("click", function () {
    changePage(curPage, 3, pageSelector[curPage], pageSelector[3]);
})

toolBtn.addEventListener("click", function () {
    changePage(curPage, 4, pageSelector[curPage], pageSelector[4]);
})

otheBtn.addEventListener("click", function () {
    changePage(curPage, 5, pageSelector[curPage], pageSelector[5]);
})

abouBtn.addEventListener("click", function () {
    changePage(curPage, 6, pageSelector[curPage], pageSelector[6]);
})