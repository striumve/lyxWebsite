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

console.log(`Welcome!\n版本：${currentVersion}\n更新日期：${latestUpdateTime}`);

var url = new URL(window.location.href);
var urlParams = new URLSearchParams(url.search);
const body = document.querySelector("body");
// const root = document.querySelector(':root');  // 此处root声明已移动至html页面

//debug_stopAutoMusicPlay

//移动端适配

var vw = document.documentElement.clientWidth;
var vh = document.documentElement.clientHeight;
var is_mobile = false;
if ((vw / vh) <= 1.2) {
    document.querySelector('.showInfo').style.display = 'block';
    is_mobile = true;
    visionMobilise();
}

// root.style.fontSize = (vw / 1912) * 10 + 'px';
var root_rem_0 = (vw / 1912) <= (vh / 948) ? (vw / 1912) * 10 + 'px' : (vh / 948) * 10 + 'px';
var root_rem_1 = (vw / 1000) <= (vh / 2000) ? (vw / 1000) * 10 + 'px' : (vh / 2000) * 10 + 'px';
root.style.fontSize = is_mobile ? root_rem_1 : root_rem_0;

function visionMobilise() {
    root.style.setProperty('--start_btn_width', '70rem');
    root.style.setProperty('--start_btn_height', '20rem');
    root.style.setProperty('--start_btn_fs', '6rem');
    root.style.setProperty('--box_width', '80rem');
    root.style.setProperty('--box_left', '15rem');
    root.style.setProperty('--page_width', '150rem');
    root.style.setProperty('--pages_left', '27rem');
    root.style.setProperty('--yiyan_margin', '10rem');
    root.style.setProperty('--padding_top', '10rem');
    root.style.setProperty('--padding_top_minus', '4rem');
    root.style.setProperty('--padding_top_plus', '11rem');
    root.style.setProperty('--pages_columncount', '1');
    root.style.setProperty('--navbtn_fontsize', '4rem');
    root.style.setProperty('--navbtn_padding', '4rem');
    root.style.setProperty('--navbtn_height', '8rem');

    root.style.setProperty('--musicSelectorBox_width', '60rem');
    root.style.setProperty('--musicbtn_fontsize', '5rem');
    root.style.setProperty('--artiitemgo_right', '10rem');
    root.style.setProperty('--linkitemgo_right', '10rem');
    root.style.setProperty('--item_after_width', '20rem');

    root.style.setProperty('--reader_width', '100rem');
    root.style.setProperty('--readerContainer_width', '80rem');
    root.style.setProperty('--reader_padding', '10rem');
    root.style.setProperty('--reader_top', '20rem');
    root.style.setProperty('--reader_bottom', '3rem');
    root.style.setProperty('--readerBtn_padding', '6rem');
    root.style.setProperty('--readerCtrl_left', '7rem');
    root.style.setProperty('--readerCtrl_width', '60rem');
    root.style.setProperty('--readerCtrl_fs', '3rem');
    root.style.setProperty('--tool_btn_width', '40%');
    root.style.setProperty('--input_fs', '3rem');
    root.style.setProperty('--talk_item_width', 'calc((100vw - var(--pages_left) - 15rem))');

    document.querySelector(".start-title").style.fontSize = '5rem';
    document.querySelector(".start-title-ch").style.fontSize = '6rem';

    document.querySelector(".nav").style.left = '5rem';
    document.querySelector('.yiyan').style.top = '45rem';
    document.querySelector(".music").style.left = '5rem';
    document.querySelector(".music").style.top = '100rem';
    document.querySelector(".info2").style.left = 'calc(20rem + 10rem + (var(--navbtn_fontsize) * 2 + var(--navbtn_padding) * 2))';
    document.querySelector('.info2').style.width = 'calc(160rem - 10rem - (var(--navbtn_fontsize) * 2 + var(--navbtn_padding) * 2))';
    document.querySelector('.nav').style.top = 'calc(var(--padding_top) + 20rem)';
    document.querySelector('.nav-title').style.fontSize = '4rem';
    document.querySelector('.info1').style.top = '25rem';
    document.querySelector('.time').style.left = '50rem';


    document.querySelector('.reader').style.left = '10rem';
    document.querySelector('.reader-back').style.left = '20rem';
    document.querySelector('.reader-back').style.top = '7rem';
    document.querySelector('.reader-back').style.fontSize = '3rem';
    document.querySelector('.reader-back').style.lineHeight = '7rem';
    document.querySelector('.reader-nav-index').style.fontSize = '3rem';
    document.querySelector('.reader-nav-index').style.lineHeight = '7rem';
    document.querySelector('.reader-nav-setting').style.fontSize = '3rem';
    document.querySelector('.reader-nav-setting').style.lineHeight = '7rem';
    document.querySelector('.reader-setting-default').style.fontSize = '3rem';
    document.querySelector('.reader-nav').style.left = 'calc(25rem + 4rem + 10rem)';
    document.querySelector('.reader-nav').style.top = '7rem';
    // document.querySelector('.reader-ctrl').style.width = '60vw';
    // document.querySelector('.reader-ctrl').style.top = '10vh';

    document.querySelector('.tool-qr-left').style.width = '100%';
    document.querySelector('.tool-qr-output').style.top = '40rem';
    document.querySelector('.tool-qr-output').style.right = '5rem';
    document.querySelector('.tool-qr-main').style.height = '35rem';

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
// let scheme;  // 此处的scheme定义移动至html文件<style>后方的script中
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
        document.querySelector('.background').style.background = 'url(/v4/images/bg_night.png)';
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
        root.style.setProperty('--color-link', 'rgb(187, 160, 255)');
        root.style.setProperty('--color-item_time', 'rgba(69, 164, 99, 1)');
    } else if (mode == 0) {
        scheme = 0;
        localStorage.setItem('scheme', scheme);
        document.querySelector('.background').style.background = 'url(/v4/images/background.png)';
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
        root.style.removeProperty('--color-link');
        root.style.removeProperty('--color-item_time');
    }
}

if (scheme == 1) {
    switchMode(1);
}

let selectedMode = document.querySelector('.other-mode-select').value;
document.querySelector('.other-mode-select').addEventListener('blur', function () {
    selectedMode = document.querySelector('.other-mode-select').value;
    switchMode(selectedMode);
    // 工具-调色盘-默认颜色
    if (scheme === 0) {
        updateAllFromRgb(1, 150, 47, 'init');
    } else if (scheme === 1) {
        updateAllFromRgb(56, 105, 65, 'init');
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
    if (localStorage.getItem('debug_stopAutoMusicPlay') == undefined || localStorage.getItem('debug_stopAutoMusicPlay') != 1) {
        playMusic();
    }
}

function quickstart() {
    document.querySelector(".start").style.display = 'none';
    document.querySelector(".home").style.display = 'block';
    document.querySelector(".home").style.animation = 'public_show ease .3s both';
}

function close() {
    document.querySelector(".home").style.animation = 'public_hide ease .5s both';
    setTimeout(function () {
        document.querySelector(".start").style.display = 'block';
        document.querySelector(".start").style.animation = 'public_show ease .5s both';
        document.querySelector(".home").style.display = 'none';
    }, 300)
    if (localStorage.getItem('debug_stopAutoMusicPlay') == undefined || localStorage.getItem('debug_stopAutoMusicPlay') != 1) {
        playMusic();
    }
}

document.querySelector(".start-btn").addEventListener("click", start);

document.querySelector('.info1-msg').addEventListener("click", close);

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

document.querySelector('.info2-talk-ver').innerHTML = `<span style="font-family: 'siyuan', '宋体';">版本号：</span>${currentVersion}`;
document.querySelector('.info2-talk-vertime').innerHTML = `<span style="font-family: 'siyuan', '宋体';">更新日期：</span>${latestUpdateTime}`;

//页面切换

var talkPage = document.querySelector(".talk");
var artiPage = document.querySelector(".article");
var linkPage = document.querySelector(".link");
var abouPage = document.querySelector(".about");
var othePage = document.querySelector(".other");
var toolPage = document.querySelector(".tool");
var zeroPage = document.querySelector(".zero");
var cmntPage = document.querySelector(".cmnt");
var talkBtn = document.querySelector(".nav-btn-talk");
var artiBtn = document.querySelector(".nav-btn-article");
var linkBtn = document.querySelector(".nav-btn-link");
var abouBtn = document.querySelector(".nav-btn-about");
var otheBtn = document.querySelector(".nav-btn-other");
var toolBtn = document.querySelector(".nav-btn-tool");
var zeroBtn = document.querySelector(".nav-title");
var cmntBtn = document.querySelector(".nav-btn-cmnt");
var curPage = 0;
var pageSelector = [zeroPage, talkPage, artiPage, linkPage, toolPage, othePage, abouPage, cmntPage];
//                  0         1         2         3         4         5         6         7
var btnSelector = [zeroBtn, talkBtn, artiBtn, linkBtn, toolBtn, otheBtn, abouBtn, cmntBtn];

var is_talkpage_has_shown = 0;
// 用于记录该page是否已经至少在界面上显示过一次。在display为none时加载瀑布流会出错。

function changePage(fromNum, toNum, fromPage, toPage) {
    // 页面代码1,2,3,4
    if (toNum != curPage) {
        if (fromNum < toNum) {
            toPage.style.opacity = 0;
            toPage.style.display = 'block';
            toPage.style.animation = 'page_show_totop ease .35s both';
            fromPage.style.animation = 'page_hide_totop ease .35s both';
            setTimeout(() => {
                fromPage.style.display = 'none';
            }, 200);
        }
        if (fromNum > toNum) {
            toPage.style.opacity = 0;
            toPage.style.display = 'block';
            toPage.style.animation = 'page_show_tobottom ease .35s both';
            fromPage.style.animation = 'page_hide_tobottom ease .35s both';
            setTimeout(() => {
                fromPage.style.display = 'none';
            }, 200);
        }
        curPage = toNum;
        btnSelector[fromNum].classList.remove('active');
        btnSelector[curPage].classList.add('active');
    }
}

zeroBtn.addEventListener("click", function () {
    changePage(curPage, 0, pageSelector[curPage], pageSelector[0]);
})

talkBtn.addEventListener("click", function () {
    changePage(curPage, 1, pageSelector[curPage], pageSelector[1]);
    if (!is_talkpage_has_shown) {
        loadWaterfall(1);
        is_talkpage_has_shown = 1;
    }
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

cmntBtn.addEventListener("click", function () {
    changePage(curPage, 7, pageSelector[curPage], pageSelector[7]);
})


var openPage = urlParams.get('page');
if (openPage) {
    changePage(curPage, openPage, pageSelector[curPage], pageSelector[openPage]);
    if (openPage == 1 && !is_talkpage_has_shown) {
        loadWaterfall(1);
        is_talkpage_has_shown = 1;
    }
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
        const response = await fetch('/v4/talks.json');
        const talks = await response.json();
        displayTalks(talks);
    } catch (error) {
        console.error('加载说说失败 ', error);
        document.querySelector(".talk").innerHTML = "加载说说列表失败，请联系我<br>" + error;
    }
}

function displayTalks(talks) {
    const container = document.querySelector(".talk");

    container.innerHTML = '';

    talks.forEach(talks => {
        const talkElement = document.createElement('div');
        talkElement.className = 'pageitem talk-item';
        talkElement.innerHTML = `
            <div class="talk-item-time"><span style="font-family: 'icomoon';"></span> ${talks.time}</div>
            <div class="talk-item-content">${talks.content}</div>
        `;
        container.appendChild(talkElement);
    });

    // window.addEventListener('load', function() {
    // setTimeout(function() {
    imagesLoaded(document.querySelector('.talk'), () => {
        new Masonry('.talk', {
            itemSelector: '.talk-item',
            columnWidth: '.talk-item'
        })
    })

    // }, 5000)
    // })
}


//加载文章列表
async function loadArticleList() {
    try {
        const response = await fetch('/v4/articles/articles.json');
        const articles = await response.json();
        // displayArticleList(articles);
        const container = document.querySelector(".article");

        container.innerHTML = '';

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

//文章阅读器

var curReading = 0;

async function openReader(id) {
    document.querySelector('.pages').style.animation = 'public_hide ease .3s both';
    document.querySelector('.nav').style.animation = 'public_hide ease .3s both';
    document.querySelector('.music').style.animation = 'public_hide ease .3s both';
    setTimeout(function () {
        document.querySelector('.nav').style.display = 'none';
        document.querySelector('.pages').style.display = 'none';
        document.querySelector('.music').style.display = 'none';
        document.querySelector('.reader').style.display = 'block';
        document.querySelector('.reader').style.animation = 'public_show ease .3s both';
    }, 200);


    try {
        const response = await fetch('/v4/articles/article' + id + '.html');
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
    document.title = '文章 - 竹芒云蹊';
}

function closeReader() {
    document.querySelector('.reader').style.animation = 'public_hide ease .3s both';
    setTimeout(function () {
        document.querySelector('.reader').style.display = 'none';
        document.querySelector('.pages').style.animation = 'public_show ease .3s both';
        document.querySelector('.pages').style.display = 'block';
        document.querySelector('.nav').style.animation = 'public_show ease .3s both';
        document.querySelector('.nav').style.display = 'block';
        document.querySelector('.music').style.animation = 'public_show ease .3s both';
        document.querySelector('.music').style.display = 'block';
        document.querySelector(".reader-container").innerHTML = '<br>正在加载文章……';
        document.querySelector('.reader-index').innerHTML = '<br>正在加载目录……';
    }, 200);

    urlParams.delete('reading_id');
    urlParams.toString();
    history.pushState(null, "", '?' + urlParams.toString());
    changePage(curPage, 2, pageSelector[curPage], pageSelector[2]);
    loadArticleList();

    is_reader_open = false;
    document.title = '竹芒云蹊';
}

if (urlParams.get('reading_id')) {
    quickstart();
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
    localStorage.setItem('reader_font_size', '18');
    localStorage.setItem('reader_padding', '3');
    localStorage.setItem('reader_lnheight', '28');
    localStorage.setItem('reader_indent', '2');
    root.style.setProperty('--reader_fontSize', '18px');
    root.style.setProperty('--reader_padding', '3vw');
    root.style.setProperty('--reader_lnheight', '28px');
    root.style.setProperty('--reader_indent', '2em');
    fontSizeInput.value = '18';
    paddingInput.value = '3';
    lnheightInput.value = '28';
    indentInput.value = '2';
})

// DOM流加载完成后：加载说说；加载文章列表；加载link瀑布流布局
function loadWaterfall(pageNum) {
    switch (pageNum) {
        case 3:
            break;
        case 1:
            if (is_mobile) {}
            new Masonry('.talk', {
                itemSelector: '.talk-item',
                columnWidth: '.talk-item'
                // itemSelector: '.pageitem',
                // columnWidth: '.pageitem'
            });
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTalks(); //talks瀑布流布局包含在函数中
    loadArticleList();
    // loadWaterfall(3);
});

// 工具
// 二维码生成器
let qrcode = new QRCode(document.querySelector('.tool-qr-output'), {
    // width: vh * 0.2, 
    // height: vh * 0.2,
    colorDark: "#003300",
    colorLight: "#DDF9D6",
    // colorDark: scheme == 0 ? "#003300" : "#000033",
    // colorLight: scheme == 0 ? "#DDF9D6" : "#DDD6F9",
    text: "Jade Cloudtrail"
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

// 调色盘
// ----- 获取DOM元素 -----
const rInput = document.querySelector('.tool-plt-rgb-r');
const gInput = document.querySelector('.tool-plt-rgb-g');
const bInput = document.querySelector('.tool-plt-rgb-b');
const hexInput = document.querySelector('#tool-plt-hex');
const hInput = document.querySelector('.tool-plt-hsl-h');
const sInput = document.querySelector('.tool-plt-hsl-s');
const lInput = document.querySelector('.tool-plt-hsl-l');
const previewBox = document.querySelector('.tool-plt-view');

// ----- 辅助函数：限制数值范围 -----
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

// 将RGB三个值归一化为0-255整数
function sanitizeRgb(r, g, b) {
    return {
        r: clamp(Math.round(r), 0, 255),
        g: clamp(Math.round(g), 0, 255),
        b: clamp(Math.round(b), 0, 255)
    };
}

// ----- RGB → HEX (不带#，大写六位) -----
function rgbToHex(r, g, b) {
    const toHex = (c) => {
        const hex = c.toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex;
    };
    return toHex(r) + toHex(g) + toHex(b);
}

// ----- HEX → RGB (返回对象或null) -----
function hexToRgb(hex) {
    // 去掉 #，去除空格
    let raw = hex.trim().replace(/^#/, '');
    // 支持缩写 #RGB => RRGGBB
    if (raw.length === 3) {
        raw = raw.split('').map(ch => ch + ch).join('');
    }
    // 必须是6位十六进制
    if (!/^[0-9A-Fa-f]{6}$/.test(raw)) {
        return null;
    }
    const r = parseInt(raw.substring(0, 2), 16);
    const g = parseInt(raw.substring(2, 4), 16);
    const b = parseInt(raw.substring(4, 6), 16);
    return {
        r,
        g,
        b
    };
}

// ----- RGB → HSL (返回对象 h:[0,360], s:[0,100], l:[0,100]) -----
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = h * 60;
    }
    // 转换为百分比/度数
    h = Math.round(h);
    s = Math.round(s * 1000) / 10; // 保留一位小数
    l = Math.round(l * 1000) / 10;
    return {
        h: clamp(h, 0, 360),
        s: clamp(s, 0, 100),
        l: clamp(l, 0, 100)
    };
}

// ----- HSL → RGB (h:[0,360], s,l:[0,100]) 返回 {r,g,b} 0-255整数 -----
function hslToRgb(h, s, l) {
    h = clamp(h, 0, 360);
    s = clamp(s, 0, 100) / 100;
    l = clamp(l, 0, 100) / 100;

    if (s === 0) {
        const v = Math.round(l * 255);
        return {
            r: v,
            g: v,
            b: v
        };
    }

    const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hk = h / 360;

    const r = hue2rgb(p, q, hk + 1 / 3);
    const g = hue2rgb(p, q, hk);
    const b = hue2rgb(p, q, hk - 1 / 3);

    return {
        r: clamp(Math.round(r * 255), 0, 255),
        g: clamp(Math.round(g * 255), 0, 255),
        b: clamp(Math.round(b * 255), 0, 255)
    };
}

// ----- 从当前RGB输入框获取值 (已做边界处理) -----
function getRgbFromInputs() {
    let r = parseInt(rInput.value, 10);
    let g = parseInt(gInput.value, 10);
    let b = parseInt(bInput.value, 10);
    if (isNaN(r)) r = 0;
    if (isNaN(g)) g = 0;
    if (isNaN(b)) b = 0;
    return sanitizeRgb(r, g, b);
}

// ----- 更新所有输入框 + 预览颜色 (核心同步) -----
function updateAllFromRgb(r, g, b, source = 'rgb') {
    // 1. 边界处理
    const rgb = sanitizeRgb(r, g, b);
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;

    // 2. 更新RGB输入框 (除非来源就是RGB以避免死循环，但通过标志防抖)
    if (source !== 'rgb') {
        rInput.value = r;
        gInput.value = g;
        bInput.value = b;
    } else {
        // 如果来源是RGB，我们也确保数值规范化（例如舍入/边界）
        rInput.value = r;
        gInput.value = g;
        bInput.value = b;
    }

    // 3. 计算HEX并更新 (若来源不是hex)
    const hexStr = rgbToHex(r, g, b);
    if (source !== 'hex') {
        hexInput.value = hexStr;
    } else {
        // 若来自hex, 仍保证HEX显示规范化 (比如把#3b82f6变成#3B82F6)
        // 但为了防止光标跳动，仅当不是焦点时规范？简单处理: 总是格式化，但保留用户输入体验。
        // 这里只做大小写统一：不改变输入过程中的光标，但如果来自hex，我们保持用户原始输入？
        // 更好的交互：失去焦点时再规范，所以我们额外处理。这里仅在非hex来源才覆盖。
        // 额外: 在hex blur时再做规范化。
    }

    // 4. 计算HSL并更新输入框 (除非来源是hsl)
    const hsl = rgbToHsl(r, g, b);
    if (source !== 'hsl') {
        hInput.value = hsl.h;
        sInput.value = hsl.s;
        lInput.value = hsl.l;
    }

    // 5. 更新预览背景色
    const colorStyle = `rgb(${r}, ${g}, ${b})`;
    previewBox.style.backgroundColor = colorStyle;
    previewBox.setAttribute('aria-label', `当前颜色: R${r} G${g} B${b}  HEX #${hexStr}`);
}

// ----- 从HSL输入框取值并同步 (source = 'hsl')-----
function updateFromHslInputs() {
    let h = parseFloat(hInput.value);
    let s = parseFloat(sInput.value);
    let l = parseFloat(lInput.value);
    if (isNaN(h)) h = 0;
    if (isNaN(s)) s = 0;
    if (isNaN(l)) l = 0;

    h = clamp(h, 0, 360);
    s = clamp(s, 0, 100);
    l = clamp(l, 0, 100);

    const rgb = hslToRgb(h, s, l);
    // 传入 source = 'hsl' 避免覆盖HSL输入框本身（保持用户小数精度）
    updateAllFromRgb(rgb.r, rgb.g, rgb.b, 'hsl');

    // 但HSL输入框显示保留一位小数 (防止无限循环改写)
    hInput.value = Math.round(h * 10) / 10;
    sInput.value = Math.round(s * 10) / 10;
    lInput.value = Math.round(l * 10) / 10;
}

// ----- 从HEX输入框取值更新 (source = 'hex') -----
function updateFromHexInput() {
    let hexValue = hexInput.value.trim();
    const rgb = hexToRgb(hexValue);
    if (!rgb) {
        // 如果无效HEX，忽略，可轻微提示但不会崩溃
        // 但可以恢复之前的颜色？为了保证不丢失，不做自动修正，仅保留预览不变。
        // 为了体验，我们可以尝试从当前预览色反推？为了简单，这里不做自动修正。
        // 但我们可以从当前RGB恢复hex显示 (避免用户困惑)
        const currentRgb = getRgbFromInputs();
        const hexCorrect = rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b);
        hexInput.value = hexCorrect;
        return;
    }
    // 有效，同步全部 (source=hex)
    updateAllFromRgb(rgb.r, rgb.g, rgb.b, 'hex');
}

// ----- 从RGB输入框更新 (source='rgb') -----
function updateFromRgbInputs() {
    const rgb = getRgbFromInputs();
    updateAllFromRgb(rgb.r, rgb.g, rgb.b, 'rgb');
}

// ----- 规范化HEX显示 (失去焦点时调用) -----
function normalizeHexDisplay() {
    let val = hexInput.value.trim();
    const rgb = hexToRgb(val);
    if (rgb) {
        const normalized = rgbToHex(rgb.r, rgb.g, rgb.b);
        hexInput.value = normalized;
    } else {
        // 无效则从当前RGB重新填充
        const currentRgb = getRgbFromInputs();
        const hexCorrect = rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b);
        hexInput.value = hexCorrect;
    }
    // 再同步一次保证预览一致
    updateFromHexInput();
}

// ----- 绑定事件 -----
// RGB 输入
rInput.addEventListener('input', updateFromRgbInputs);
gInput.addEventListener('input', updateFromRgbInputs);
bInput.addEventListener('input', updateFromRgbInputs);

// HSL 输入
hInput.addEventListener('input', updateFromHslInputs);
sInput.addEventListener('input', updateFromHslInputs);
lInput.addEventListener('input', updateFromHslInputs);

// HEX 输入: 实时输入时尝试解析，但失去焦点时规范化。
hexInput.addEventListener('input', function () {
    // 实时尝试更新预览，但如果无效就不变化（保留上次有效颜色）
    let val = hexInput.value.trim();
    const rgb = hexToRgb(val);
    if (rgb) {
        updateAllFromRgb(rgb.r, rgb.g, rgb.b, 'hex');
    }
    // 无效时不覆盖预览，但为了不出现奇怪现象，保留预览
    // normalizeHexDisplay();
});

hexInput.addEventListener('blur', normalizeHexDisplay);

// 额外: 当用户按回车时也可以规范化 (方便)
hexInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        hexInput.blur();
    }
});

// 处理边界：如果用户输入超出范围，矫正
function enforceNumberBounds() {
    // 仅用于blur时让显示更干净
    let r = clamp(parseInt(rInput.value, 10) || 0, 0, 255);
    let g = clamp(parseInt(gInput.value, 10) || 0, 0, 255);
    let b = clamp(parseInt(bInput.value, 10) || 0, 0, 255);
    rInput.value = r;
    gInput.value = g;
    bInput.value = b;
    updateFromRgbInputs();
}
rInput.addEventListener('blur', enforceNumberBounds);
gInput.addEventListener('blur', enforceNumberBounds);
bInput.addEventListener('blur', enforceNumberBounds);

// HSL blur 时保留一位小数并限幅
function clampHslBlur() {
    let h = clamp(parseFloat(hInput.value) || 0, 0, 360);
    let s = clamp(parseFloat(sInput.value) || 0, 0, 100);
    let l = clamp(parseFloat(lInput.value) || 0, 0, 100);
    hInput.value = Math.round(h * 10) / 10;
    sInput.value = Math.round(s * 10) / 10;
    lInput.value = Math.round(l * 10) / 10;
    updateFromHslInputs();
}
hInput.addEventListener('blur', clampHslBlur);
sInput.addEventListener('blur', clampHslBlur);
lInput.addEventListener('blur', clampHslBlur);

// 初始化: 以默认值 (#3B82F6) 同步一次
// function initialize() {
if (scheme === 0) {
    updateAllFromRgb(1, 150, 47, 'init');
} else if (scheme === 1) {
    updateAllFromRgb(56, 105, 65, 'init');
}
// };

//留言
let cmntPostBtn = document.querySelector('.cmnt-input-btn');
let timeLimitRecord_1 = -1;
let timeLimitRecord_2;
let timeLimit = 1 * 60 * 1000;

async function postCmnt() {
    let cmntName = document.querySelector('.cmnt-input-name').value;
    let cmntCont = document.querySelector('.cmnt-input-cont').value;
    let cmntTime = Date.now();
    timeLimitRecord_2 = cmntTime;
    if (timeLimitRecord_2 - timeLimitRecord_1 <= timeLimit) {
        let leftTime = Math.floor((timeLimit - (timeLimitRecord_2 - timeLimitRecord_1)) / 1000);
        alert(`请求过于频繁，${leftTime}秒后再试`);
    } else if (timeLimitRecord_2 - timeLimitRecord_1 > timeLimit) {
        let postData = {
            "content": cmntCont,
            "name": cmntName,
            "time": cmntTime
        }
        fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            })
            .then((response) => {
                // alert(response.text());
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        timeLimitRecord_1 = timeLimitRecord_2;
    }
}

cmntPostBtn.addEventListener('click', function () {
    postCmnt();
})

async function loadCommentsList() {
    try {
        const response = await fetch('/v4/comments.json');
        const comments = await response.json();
        const container = document.querySelector(".cmnt-container");

        container.innerHTML = '';

        comments.forEach(comment => {
            const postTime = new Date(Number(comment.time));
            const commentElement = document.createElement('div');
            commentElement.className = 'pageitem cmnt-item';
            commentElement.innerHTML = `
                <div class="cmnt-item-time" style="font-family: 'icomoon';"> ${comment.name} |  ${postTime.toLocaleString()}</div>
                <div class="cmnt-item-cont">${comment.content}</div>
        `;
            container.appendChild(commentElement);
        });
    } catch (error) {
        console.error('加载留言失败 ', error);
        document.querySelector(".article").innerHTML = "加载留言失败，请联系我<br>" + error;
    }
}

loadCommentsList();