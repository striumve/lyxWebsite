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
    *-------------------------------------------------\n');


var url = new URL(window.location.href);
var urlParams = new URLSearchParams(url.search);
const body = document.querySelector("body");
const root = document.querySelector(':root');


//移动端适配

var vw = document.documentElement.clientWidth;
var vh = document.documentElement.clientHeight;
var is_mobile = false;
if ((vw / vh) <= 1.2) {
    document.querySelector('.showInfo').style.display = 'block';
    is_mobile = true;
    visionMobilise();
}

function visionMobilise() {
    root.style.setProperty('--start_btn_width', '40vw');
    root.style.setProperty('--box_width', '80vw');
    root.style.setProperty('--box_left', '10vw');
    root.style.setProperty('--page_width', '70vw');
    root.style.setProperty('--pages_left', '23vw');
    root.style.setProperty('--yiyan_margin', '5vw');
    root.style.setProperty('--padding_top', '7vh');
    root.style.setProperty('--padding_top_minus', '4vh');
    root.style.setProperty('--padding_top_plus', '11vh');
    root.style.setProperty('--pages_columncount', '1');
    root.style.setProperty('--navbtn_fontsize', '2.1vh');
    root.style.setProperty('--navbtn_padding', '2vw');

    root.style.setProperty('--musicSelectorBox_width', '70vw');
    root.style.setProperty('--artiitemgo_right', '5vw');
    root.style.setProperty('--linkitemgo_right', '5vw');
    root.style.setProperty('--item_after_width', '10vw');


    root.style.setProperty('--reader_width', '90vw');
    root.style.setProperty('--readerContainer_width', '90vw');
    root.style.setProperty('--reader_padding', '10vw');
    root.style.setProperty('--reader_top', '10vh');
    root.style.setProperty('--reader_bottom', '3vh');
    root.style.setProperty('--readerBtn_padding', '3vw');
    root.style.setProperty('--readerCtrl_left', '10vw');
    root.style.setProperty('--readerCtrl_width', '60vw');
    root.style.setProperty('--tool_btn_width', '40%');

    document.querySelector(".nav").style.left = '5vw';
    document.querySelector(".music").style.left = '10vw';
    document.querySelector(".info2").style.left = 'calc(10vw + 5vw + (var(--navbtn_fontsize) * 2 + var(--navbtn_padding) * 2))';
    document.querySelector('.info2').style.width = 'calc(80vw - 5vw - (var(--navbtn_fontsize) * 2 + var(--navbtn_padding) * 2))';
    document.querySelector('.nav').style.top = 'calc(var(--padding_top) + 5vh)';
    document.querySelector('.info1').style.top = '15vh';
    document.querySelector('.time').style.left = '25vw';

    document.querySelector('.reader').style.left = '5vw';
    document.querySelector('.reader-back').style.left = '20vw';
    document.querySelector('.reader-back').style.top = '4vh';
    document.querySelector('.reader-nav').style.left = 'calc(26vw + 4vh + 5vw)';
    document.querySelector('.reader-nav').style.top = '4vh';
    // document.querySelector('.reader-ctrl').style.width = '60vw';
    // document.querySelector('.reader-ctrl').style.top = '10vh';

    document.querySelector('.tool-qr-left').style.width = '100%';
    document.querySelector('.tool-qr-output').style.top = '40vh';
    document.querySelector('.tool-qr-output').style.right = '5vh';
    document.querySelector('.tool-qr-main').style.height = '35vh';



    document.querySelector(".info").style.display = 'none';
    document.querySelector(".info").style.opacity = '0';

}

var is_info_show = false;
var is_reader_open = false;

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
        show(document.querySelector('.music'));
        if (!is_reader_open) {
            hide(document.querySelector('.pages'));
            hide(document.querySelector('.nav'));
        } else {
            hide(document.querySelector('.reader'));
        }
        is_info_show = true;
    } else {
        hide(document.querySelector('.info'));
        hide(document.querySelector('.music'));
        if (!is_reader_open) {
            show(document.querySelector('.pages'));
            show(document.querySelector('.nav'));
        } else {
            show(document.querySelector('.reader'));
        }
        is_info_show = false;
    }
})

//夜间模式
// scheme 0 = bright, 1 = night
let scheme;
if (localStorage.scheme != undefined) {
    scheme = localStorage.scheme;
} else {
    scheme = 0;
    localStorage.setItem('scheme', scheme);
}

function switchMode(mode) {
    if (mode == 1) {
        scheme = 1;
        localStorage.setItem('scheme', scheme);
        document.querySelector('.background').style.background = 'url(/version4/images/bg_night.jpg)';
        document.querySelector('.background').style.backgroundSize = 'cover';
        document.querySelector('.other-mode-option-1').selected = true;
        root.style.setProperty('--color-bodyBackground', 'rgb(118, 140, 206)');
        root.style.setProperty('--color-basic', 'rgba(220, 220, 220, .95)');
        root.style.setProperty('--color-grey', 'rgba(170, 170, 170, .95)');
        root.style.setProperty('--color-theme', 'rgb(2, 179, 58)');
        root.style.setProperty('--color-box', 'rgba(150, 150, 170, .55)');
        root.style.setProperty('--color-box_hover', 'rgba(140, 140, 160, .65)');
        root.style.setProperty('--color-box_solid', 'rgba(150, 150, 170, .6)');
        root.style.setProperty('--color-box_solid_hover', 'rgba(140, 140, 160, .7)');
        root.style.setProperty('--color-pagebox', 'rgba(150, 150, 180, .55)');
        root.style.setProperty('--color-pagebox_hover', 'rgba(140, 140, 170, .65)');
        root.style.setProperty('--color-reader', 'rgba(150, 150, 170, .55)');
        root.style.setProperty('--color-input', 'rgba(190, 190, 220, .55)');
        root.style.setProperty('--color-input_hover', 'rgba(180, 180, 210, .6)');
        root.style.setProperty('--color-item_time', 'rgba(69, 164, 99, 1)');
    } else if (mode == 0) {
        scheme = 0;
        localStorage.setItem('scheme', scheme);
        document.querySelector('.background').style.background = 'url(/version4/images/background.png)';
        document.querySelector('.background').style.backgroundSize = 'cover';
        document.querySelector('.other-mode-option-0').selected = true;
        root.style.removeProperty('--color-bodyBackground');
        root.style.removeProperty('--color-basic');
        root.style.removeProperty('--color-grey');
        root.style.removeProperty('--color-theme');
        root.style.removeProperty('--color-box');
        root.style.removeProperty('--color-box_hover');
        root.style.removeProperty('--color-box_solid');
        root.style.removeProperty('--color-box_solid_hover');
        root.style.removeProperty('--color-pagebox');
        root.style.removeProperty('--color-pagebox_hover');
        root.style.removeProperty('--color-reader');
        root.style.removeProperty('--color-input');
        root.style.removeProperty('--color-input_hover');
        root.style.removeProperty('--color-item_time');
    }
}

var getdate = new Date();
if (scheme == 1) {
    switchMode(1);
}

let selectedMode = document.querySelector('.other-mode-select').value;
document.querySelector('.other-mode-select').addEventListener('blur', function () {
    selectedMode = document.querySelector('.other-mode-select').value;
    switchMode(selectedMode);
})


//开始

function start() {
    document.querySelector(".start").style.animation = 'startpage_hide ease .5s both';
    setTimeout(function () {
        document.querySelector(".home").style.display = 'block';
        document.querySelector(".home").style.animation = 'public_show ease .5s both';
        document.querySelector(".start").style.display = 'none';
    }, 300)
    playMusic();
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


var openPage = urlParams.get('page');
if (openPage) {
    changePage(curPage, openPage, pageSelector[curPage], pageSelector[openPage]);
}

//音乐
var is_musicSelectbox_on = false;
var is_playing = false;
var curPlaying = 1;
var musicBox = document.querySelector('.music-selectbox');
var playBtn = document.querySelector('.music-btn-play');
var pauseBtn = document.querySelector('.music-btn-pause');
var musicNum = 4;
const bgm1 = document.querySelector('.bgm1');
const bgm2 = document.querySelector('.bgm2');
const bgm3 = document.querySelector('.bgm3');
const bgm4 = document.querySelector('.bgm4');
const bgmSelector = [0, bgm1, bgm2, bgm3, bgm4];
const musicSelectorP = [0, document.querySelector('.music-selector1'), document.querySelector('.music-selector2'), document.querySelector('.music-selector3'), document.querySelector('.music-selector4')];

function playMusic() {
    if (!is_playing) {
        bgmSelector[curPlaying].play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        document.querySelector('.music-title').style.color = 'var(--color-theme)';
    }
}

function pauseMusic() {
    if (!is_playing) {
        bgmSelector[curPlaying].pause();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        document.querySelector('.music-title').style.color = 'var(--color-basic)';
    }
}

document.querySelector('.music-btn-select').addEventListener('click', function () {
    if (!is_musicSelectbox_on) {
        musicBox.style.display = 'block';
        musicBox.style.animation = 'musicbox_show ease .3s both';
        is_musicSelectbox_on = true;
    } else {
        musicBox.style.animation = 'musicbox_hide ease .3s both';
        setTimeout(function () {
            musicBox.style.display = 'none';
        }, 300)
        is_musicSelectbox_on = false;
    }
})

for (let a = 1; a <= musicNum; a++) {
    musicSelectorP[a].addEventListener('click', function () {
        pauseMusic();
        curPlaying = a;
        for (let j = 1; j <= musicNum; j++) {
            musicSelectorP[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}

playBtn.addEventListener('click', playMusic)

pauseBtn.addEventListener('click', pauseMusic)

//加载说说

async function loadTalks() {
    try {
        const response = await fetch('/version4/talks.json');
        const talks = await response.json();
        displayTalks(talks);
    } catch (error) {
        console.error('加载说说失败 ', error);
        document.querySelector(".talk").innerHTML = "加载说说列表失败，请联系我<br>" + error;
    }
}

function displayTalks(talks) {
    const container = document.querySelector(".talk");

    talks.forEach(talks => {
        const talkElement = document.createElement('div');
        talkElement.className = 'pageitem talk-item';
        talkElement.innerHTML = `
            <div class="talk-item-time"><span style="font-family: 'icomoon';"></span> ${talks.time}</div>
            <div class="talk-item-content">${talks.content}</div>
        `;
        container.appendChild(talkElement);
    });
}

document.addEventListener('DOMContentLoaded', loadTalks);


//加载文章列表
async function loadArticleList() {
    try {
        const response = await fetch('/version4/articles/articles.json');
        const articles = await response.json();
        // displayArticleList(articles);
        const container = document.querySelector(".article");

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'pageitem arti-item';
            articleElement.dataset.artiId = `${article.artiID}`;
            articleElement.innerHTML = `
            <div class="arti-item-time"><span style="font-family: 'icomoon';"></span> ${article.time} &emsp14; <span style="font-family: 'icomoon';"></span> ${article.author} &emsp14; # ${article.tag}</div>
            <div class="arti-item-title">${article.title}</div>
            <div class="arti-item-go"></div>
            <div class="arti-item-preview">${article.preview}</div>
        `;
            container.appendChild(articleElement);
        });
    } catch (error) {
        console.error('加载文章失败 ', error);
        document.querySelector(".article").innerHTML = "加载文章列表失败，请联系我<br>" + error;
    }
}


document.addEventListener('DOMContentLoaded', loadArticleList);

//文章阅读器

var curReading = 0;

async function openReader(id) {
    document.querySelector('.pages').style.animation = 'public_hide ease .3s both';
    document.querySelector('.nav').style.animation = 'public_hide ease .3s both';
    setTimeout(function () {
        document.querySelector('.nav').style.display = 'none';
        document.querySelector('.pages').style.display = 'none';
        document.querySelector('.reader').style.display = 'block';
        document.querySelector('.reader').style.animation = 'public_show ease .3s both';
    }, 200);


    try {
        const response = await fetch('/version4/articles/article' + id + '.html');
        const articles = await response.text();
        // displayArticleList(articles);
        const container = document.querySelector(".reader-container");
        container.innerHTML = articles;
    } catch (error) {
        console.error('加载文章失败 ', error);
        document.querySelector(".article").innerHTML = "加载文章失败，请联系我<br>" + error;
    }

    loadIndex();
    is_reader_open = true;
    hljs.highlightAll();
    hljs.initLineNumbersOnLoad();
    window.highlightJsBadge({
        copyIconContent: "",
        checkIconContent: ""
    });
}

function closeReader() {
    document.querySelector('.reader').style.animation = 'public_hide ease .3s both';
    setTimeout(function () {
        document.querySelector('.reader').style.display = 'none';
        document.querySelector('.pages').style.animation = 'public_show ease .3s both';
        document.querySelector('.pages').style.display = 'block';
        document.querySelector('.nav').style.animation = 'public_show ease .3s both';
        document.querySelector('.nav').style.display = 'block';
        document.querySelector(".reader-container").innerHTML = '正在加载文章……';
    }, 200);

    urlParams.delete('reading_id');
    urlParams.toString();
    history.pushState(null, "", '?' + urlParams.toString());
    changePage(curPage, 2, pageSelector[curPage], pageSelector[2]);

    is_reader_open = false;
}

if (urlParams.get('reading_id')) {
    openReader(urlParams.get('reading_id'));
}

document.querySelector('.reader-back').addEventListener('click', closeReader);

document.querySelector('.article').addEventListener('click', function (event) {
    curReading = event.target.closest('.arti-item').dataset.artiId;
    // alert(curReading);
    urlParams.set('reading_id', curReading);
    urlParams.toString();
    history.pushState(null, "", '?' + urlParams.toString());
    openReader(curReading);
})

//文章阅读器-目录与设置
//控件切换
var readerBtnIndex = document.querySelector('.reader-nav-index');
var readerBtnSet = document.querySelector('.reader-nav-setting');
var curReaderCtrl = 1;
var mobile_is_ctrl_open = false;

if (is_mobile) {
    document.querySelector('.reader-nav-index').classList.remove('active');
    document.querySelector('.reader-index').style.display = 'none';
    document.querySelector('.reader-index').style.opacity = '0';
}

readerBtnIndex.addEventListener('click', function () {
    if (is_mobile && !mobile_is_ctrl_open) {
        readerBtnIndex.classList.add('active');
        curReaderCtrl = 1;
        mobile_is_ctrl_open = true;
        show(document.querySelector('.reader-index'));
        document.querySelector('.reader-container').style.animation = 'public_hide ease .3s both';
    } else if (curReaderCtrl === 2) {
        readerBtnSet.classList.remove('active');
        readerBtnIndex.classList.add('active');
        curReaderCtrl = 1;
        mobile_is_ctrl_open = true;
        document.querySelector('.reader-setting').style.animation = 'readerCtrl_hide_toright ease .3s both';
        setTimeout(function () {
            document.querySelector('.reader-setting').style.display = 'none';
            document.querySelector('.reader-index').style.display = 'block';
            document.querySelector('.reader-index').style.animation = 'readerCtrl_show_toright ease .3s both';
        }, 200);
    } else if (is_mobile && mobile_is_ctrl_open && curReaderCtrl === 1) {
        readerBtnIndex.classList.remove('active');
        mobile_is_ctrl_open = false;
        hide(document.querySelector('.reader-index'));
        document.querySelector('.reader-container').style.animation = 'public_show ease .3s both';
    }
})

readerBtnSet.addEventListener('click', function () {
    if (is_mobile && !mobile_is_ctrl_open) {
        readerBtnSet.classList.add('active');
        curReaderCtrl = 2;
        mobile_is_ctrl_open = true;
        show(document.querySelector('.reader-setting'));
        document.querySelector('.reader-container').style.animation = 'public_hide ease .3s both';
    } else if (curReaderCtrl === 1) {
        readerBtnIndex.classList.remove('active');
        readerBtnSet.classList.add('active');
        curReaderCtrl = 2;
        mobile_is_ctrl_open = true;
        document.querySelector('.reader-index').style.animation = 'readerCtrl_hide_toleft ease .3s both';
        setTimeout(function () {
            document.querySelector('.reader-index').style.display = 'none';
            document.querySelector('.reader-setting').style.display = 'block';
            document.querySelector('.reader-setting').style.animation = 'readerCtrl_show_toleft ease .3s both';
        }, 200);
    } else if (is_mobile && mobile_is_ctrl_open && curReaderCtrl === 2) {
        readerBtnSet.classList.remove('active');
        mobile_is_ctrl_open = false;
        hide(document.querySelector('.reader-setting'));
        document.querySelector('.reader-container').style.animation = 'public_show ease .3s both';
    }
})

//加载目录
function loadIndex() {
    var headings = document.querySelectorAll(".reader-container>h2, .reader-container>h3");
    var container = document.querySelector('.reader-container');

    document.querySelector('.reader-index').innerHTML = '';
    if (headings.length === 0) {
        document.querySelector('.reader-index').innerHTML = '<br>该文章没有目录<br><br>';
    }
    headings.forEach((heading, index) => {
        var headingLine = document.createElement('p');
        headingLine.innerHTML = heading.textContent;
        headingLine.classList.add('reader-index-heading');
        if (heading.tagName == 'H2') {
            headingLine.classList.add('reader-index-h2');
            headingLine.dataset.headType = 'h2';
        }
        if (heading.tagName == 'H3') {
            headingLine.classList.add('reader-index-h3');
            headingLine.dataset.headType = 'h3';
        }

        if (index === 0) {
            headingLine.classList.add('active');
        }
        headingLine.dataset.index = index;
        heading.dataset.index = index;
        document.querySelector('.reader-index').appendChild(headingLine);
    })

    //跳转
    document.querySelector('.reader-index').addEventListener("click", function (event) {
        // alert(event.target.dataset.index);
        document.querySelectorAll('.reader-index-heading').forEach(heading => {
            heading.classList.remove('active');
        })
        event.target.classList.add('active');
        // alert(container.scrollTop);
        if (event.target.dataset.headType == 'h2') {
            container.scrollTo({
                top: document.querySelector(`h2[data-index='${event.target.dataset.index}']`).offsetTop - 50,
                behavior: 'smooth'
            });
        } else if (event.target.dataset.headType == 'h3') {
            container.scrollTo({
                top: document.querySelector(`h3[data-index='${event.target.dataset.index}']`).offsetTop - 50,
                behavior: 'smooth'
            });
        }
    })

    //自动高亮
    container.addEventListener('scroll', function (event) {
        var headingNum = document.querySelectorAll('.reader-index-heading').length;

        for (var i = 0; i < headingNum; i++) {
            var currentHeading = document.querySelector(`h2[data-index='${i}'], h3[data-index='${i}']`);
            var nextHeading = document.querySelector(`h2[data-index='${i+1}'], h3[data-index='${i+1}']`);

            if (!currentHeading) continue; // 跳过不存在的元素

            var currentTop = currentHeading.offsetTop - 200;
            var nextTop = nextHeading ? nextHeading.offsetTop - 200 : Infinity;

            if (container.scrollTop >= currentTop && container.scrollTop < nextTop) {
                document.querySelectorAll('.reader-index-heading').forEach(heading => {
                    heading.classList.remove('active');
                })
                document.querySelector(`.reader-index-heading[data-index='${i}']`).classList.add('active');
            }
        }
    });
}

//设置

var readerFontSize = parseFloat(getComputedStyle(document.querySelector(':root')).getPropertyValue('--reader_fontSize'));
var readerPadding = parseFloat(getComputedStyle(document.querySelector(':root')).getPropertyValue('--reader_padding'));
var readerLnheight = parseFloat(getComputedStyle(document.querySelector(':root')).getPropertyValue('--reader_lnheight'));
var readerIndent = parseFloat(getComputedStyle(document.querySelector(':root')).getPropertyValue('--reader_indent'));
var readerContainerWidth = parseFloat(getComputedStyle(document.querySelector(':root')).getPropertyValue('--readerContainer_width'));
var fontSizeInput = document.querySelector('.reader-setting-size');
var paddingInput = document.querySelector('.reader-setting-padding'); //padding存储时全部使用vw值，显示及输入时使用%
var lnheightInput = document.querySelector('.reader-setting-lnheight');
var indentInput = document.querySelector('.reader-setting-indent');

if (localStorage.getItem('reader_font_size')) {
    root.style.setProperty('--reader_fontSize', localStorage.getItem('reader_font_size') + 'px');
    fontSizeInput.value = localStorage.getItem('reader_font_size');
    readerFontSize = localStorage.getItem('reader_font_size');
}
if (localStorage.getItem('reader_padding')) {
    root.style.setProperty('--reader_padding', localStorage.getItem('reader_padding') + 'vw');
    paddingInput.value = Math.round(localStorage.getItem('reader_padding') / readerContainerWidth * 100);
    readerPadding = localStorage.getItem('reader_padding');
}
if (localStorage.getItem('reader_lnheight')) {
    root.style.setProperty('--reader_lnheight', localStorage.getItem('reader_lnheight') + 'px');
    lnheightInput.value = localStorage.getItem('reader_lnheight');
    readerLnheight = localStorage.getItem('reader_lnheight');
}
if (localStorage.getItem('reader_indent')) {
    root.style.setProperty('--reader_indent', localStorage.getItem('reader_indent') + 'em');
    indentInput.value = localStorage.getItem('reader_indent');
    readerIndent = localStorage.getItem('reader_indent');
}

fontSizeInput.value = readerFontSize;
paddingInput.value = Math.round(readerPadding / readerContainerWidth * 100);
lnheightInput.value = readerLnheight;
indentInput.value = readerIndent;

document.querySelectorAll('.reader-input').forEach(input => {
    input.addEventListener('blur', function () {
        switch (input.dataset.setId) {
            case '1':
                localStorage.setItem('reader_font_size', input.value);
                root.style.setProperty('--reader_fontSize', input.value + 'px');
                break;

            case '2':
                localStorage.setItem('reader_padding', (input.value / 100) * readerContainerWidth);
                root.style.setProperty('--reader_padding', (input.value / 100) * readerContainerWidth + 'vw');
                break;

            case '3':
                localStorage.setItem('reader_lnheight', input.value);
                root.style.setProperty('--reader_lnheight', input.value + 'px');
                break;

            case '4':
                localStorage.setItem('reader_indent', input.value);
                root.style.setProperty('--reader_indent', input.value + 'em');
                break;

            default:
                break;
        }
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            this.blur();
        }
    });
})

document.querySelector('.reader-setting-default').addEventListener('click', function () {
    localStorage.clear();
    root.style.setProperty('--reader_fontSize', '18px');
    root.style.setProperty('--reader_padding', '3vw');
    root.style.setProperty('--reader_lnheight', '28px');
    root.style.setProperty('--reader_indent', '2em');
    fontSizeInput.value = '18';
    paddingInput.value = '5';
    lnheightInput.value = '28';
    indentInput.value = '2';
})

// 工具
// 二维码生成器
let qrcode = new QRCode(document.querySelector('.tool-qr-output'), {
    // width: vh * 0.2, 
    // height: vh * 0.2,
    colorDark: "#003300",
    colorLight: "#DDF9D6",
    // colorDark: scheme == 0 ? "#003300" : "#000033",
    // colorLight: scheme == 0 ? "#DDF9D6" : "#DDD6F9",
    text: "Jade Raintrail"
})

document.querySelector('.tool-qr-btn').addEventListener('click', function () {
    qrcode.clear();
    qrcode.makeCode(document.querySelector('.tool-qr-ta').value);
})

document.querySelector('.tool-qr-dl').addEventListener('click', function () {
    let link = document.createElement('a');
    link.download = `Jadetrail_QRCode_${Date.now()}.png`;
    link.href = document.querySelector('.tool-qr-output > img').src;
    link.click();
})

// document.querySelector('.tool-qr-output > canvas').width = vh * 0.2;
// document.querySelector('.tool-qr-output > canvas').height = vh * 0.2;