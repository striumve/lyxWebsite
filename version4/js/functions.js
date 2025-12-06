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



const urlParams = new URLSearchParams(window.location.search);
const body = document.querySelector("body");

//移动端适配

var vw = document.documentElement.clientWidth;
var vh = document.documentElement.clientHeight;
if ((vw / vh) <= 1.2) {
    document.querySelector('.showInfo').style.display = 'block';
    visionMobilise();
}

function visionMobilise() {
    body.style.setProperty('--start_btn_width', '30vw');
    body.style.setProperty('--box_width', '80vw');
    body.style.setProperty('--box_left', '10vw');
    body.style.setProperty('--page_width', '70vw');
    body.style.setProperty('--pages_left', '23vw');
    body.style.setProperty('--yiyan_margin', '5vw');
    body.style.setProperty('--padding_top', '7vh');
    body.style.setProperty('--padding_top_minus', '4vh');
    body.style.setProperty('--padding_top_plus', '11vh');
    body.style.setProperty('--pages_columncount', '1');
    body.style.setProperty('--navbtn_fontsize', '2.1vh');
    body.style.setProperty('--navbtn_padding', '2vw');
    body.style.setProperty('--artiitemgo_right', '5vw');
    body.style.setProperty('--linkitemgo_right', '5vw');
    body.style.setProperty('--item_after_width', '10vw');
    document.querySelector(".nav").style.left = '5vw';
    document.querySelector('.nav').style.top = 'calc(var(--padding_top) + 5vh)';
    document.querySelector('.info1').style.top = '15vh';
    document.querySelector('.time').style.left = '25vw';

    document.querySelector(".info").style.display = 'none';
    document.querySelector(".info").style.opacity = '0';
}

var is_info_show = false;

function hide(page) {
    page.style.animation = 'public_hide ease .3s both';
    setTimeout(function () {
        page.style.display = 'none';
    }, 300);
}

function show(page) {
    page.style.display = 'block';
    page.style.animation = 'public_show ease .3s both';
}

document.querySelector('.showInfo').addEventListener('click', function () {
    if (!is_info_show) {
        show(document.querySelector('.info'));
        hide(document.querySelector('.pages'));
        hide(document.querySelector('.nav'));
        is_info_show = true;
    } else {
        hide(document.querySelector('.info'));
        show(document.querySelector('.pages'));
        show(document.querySelector('.nav'));
        is_info_show = false;
    }
})

//开始

function start() {
    document.querySelector(".start").style.animation = 'startpage_hide ease .5s both';
    setTimeout(function () {
        document.querySelector(".home").style.display = 'block';
        document.querySelector(".home").style.animation = 'public_show ease .5s both';
        document.querySelector(".start").style.display = 'none';
    }, 300)
}

function quickstart() {
    document.querySelector(".start").style.display = 'none';
    document.querySelector(".home").style.display = 'block';
    document.querySelector(".home").style.animation = 'public_show ease .3s both';
}

document.querySelector(".start-btn").addEventListener("click", start);

if (urlParams.get('start') == 1) {
    quickstart();
}

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


const page = urlParams.get('page');
if (page) {
    changePage(curPage, page, pageSelector[curPage], pageSelector[page]);
}

//加载文章
async function loadArticles() {
    try {
        const response = await fetch('../version4/articles/articles.json');
        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error('加载文章失败 ', error);
        document.querySelector(".article").innerHTML = "加载文章列表失败，请联系我<br>" + error;
    }
}

function displayArticles(articles) {
    const container = document.querySelector(".article");

    articles.forEach(article => {
        const articleElement = document.createElement('a');
        articleElement.className = 'pageitem arti-item';
        articleElement.href = `${article.href}`;
        articleElement.innerHTML = `
            <div class="arti-item-time"><span style="font-family: 'icomoon';"></span> ${article.time} &emsp14; <span style="font-family: 'icomoon';font-weight:700; "></span> ${article.author} </div>
            <div class="arti-item-title">${article.title}</div>
            <div class="arti-item-go"></div>
            <div class="arti-item-preview">${article.preview}</div>
        `;
        container.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', loadArticles);