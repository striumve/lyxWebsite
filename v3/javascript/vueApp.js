var isPageShowing = [false, false, false];

const vueApp_info = new Vue({
    el: '#app-info',
    data: {
        currentVersion: 'v3.0.2',
        latestUpdate: '2024.06.18',
        isInfoShowing: false
    },
    methods: {
        infoFrame() {
            if (this.isInfoShowing === false) {
                document.querySelector('.info').style.animation = 'infoCome ease .3s both';
                this.isInfoShowing = !this.isInfoShowing;
            } else {
                document.querySelector('.info').style.animation = 'infoOut ease .3s both';
                this.isInfoShowing = !this.isInfoShowing;
            }
        }
    }
})

const vueApp_nav = new Vue({
    el: '#app-nav',
    data: {
        isInfoShowing: false,
        isNavShowing: true,
        isWeatherShowing: false
    },
    methods: {
        infoFrame() {
            if (this.isInfoShowing === false) {
                document.querySelector('.info').style.animation = 'infoCome ease .3s both';
                this.isInfoShowing = !this.isInfoShowing;
            } else {
                document.querySelector('.info').style.animation = 'infoOut ease .3s both';
                this.isInfoShowing = !this.isInfoShowing;
            }
        },
        navFrame() {
            if (this.isNavShowing === false) {
                document.querySelector('.nav').style.animation = 'navUpFrame ease .2s both';
                document.querySelector('.navBtn').style.animation = 'navBtnDown linear .2s both';
                this.isNavShowing = !this.isNavShowing;
            } else {
                document.querySelector('.nav').style.animation = 'navDownFrame ease .2s both';
                document.querySelector('.navBtn').style.animation = 'navBtnUp linear .2s both';
                if (this.isWeatherShowing === true) {
                    document.querySelector('.weather').style.animation = 'weatherOut ease .2s both';
                    this.isWeatherShowing = !this.isWeatherShowing;
                }
                this.isNavShowing = !this.isNavShowing;
            }
        },
        weatherFrame() {
            if (this.isWeatherShowing === false) {
                document.querySelector('.weather').style.animation = 'weatherIn ease .3s both';
                this.isWeatherShowing = !this.isWeatherShowing;
            } else {
                document.querySelector('.weather').style.animation = 'weatherOut ease .3s both';
                this.isWeatherShowing = !this.isWeatherShowing;
            }
        },
        pageFrame(pageIndexNum) {
            var willOpen, willOpenBar;
            switch (pageIndexNum) {
                case 0:
                    willOpen = document.querySelector('.page[pageId="page0"]');
                    willOpenBar = document.querySelector('.pageBar[id="pageBar0"]');
                    vueApp_page.frontPageNum = 0;
                    break;
                case 1:
                    willOpen = document.querySelector('.page[pageId="page1"]');
                    willOpenBar = document.querySelector('.pageBar[id="pageBar1"]');
                    vueApp_page.frontPageNum = 1;
                    break;
                case 2:
                    willOpen = document.querySelector('.page[pageId="page2"]');
                    willOpenBar = document.querySelector('.pageBar[id="pageBar2"]');
                    vueApp_page.frontPageNum = 2;
                default:
                    break;
            }
            if (isPageShowing[pageIndexNum] === false) {
                document.querySelector('.page[pageId="page0"]').style.zIndex = '2';
                document.querySelector('.page[pageId="page1"]').style.zIndex = '2';
                document.querySelector('.page[pageId="page2"]').style.zIndex = '2';
                document.querySelector('.pageBar[id="pageBar0"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
                document.querySelector('.pageBar[id="pageBar1"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
                document.querySelector('.pageBar[id="pageBar2"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
                willOpen.style.display = 'block';
                willOpen.style.zIndex = '4';
                willOpenBar.style.backgroundColor = 'var(--basicColor_pageBar_front)';
                willOpen.style.animation = 'pageCome ease .2s both';
                isPageShowing[pageIndexNum] = !isPageShowing[pageIndexNum];
            } else {
                document.querySelector('.page[pageId="page0"]').style.zIndex = '2';
                document.querySelector('.page[pageId="page1"]').style.zIndex = '2';
                document.querySelector('.page[pageId="page2"]').style.zIndex = '2';
                document.querySelector('.pageBar[id="pageBar0"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
                document.querySelector('.pageBar[id="pageBar1"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
                document.querySelector('.pageBar[id="pageBar2"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
                willOpen.style.zIndex = '4';
                willOpenBar.style.backgroundColor = 'var(--basicColor_pageBar_front)';
            }
        }
    }
})

const vueApp_weather = new Vue({
    el: '#app-weather',
    data: {
        weatherData: [{
                id: '1',
                name: '最高气温',
                dataName: 'tempMax',
                detail: ''
            },
            {
                id: '2',
                name: '最低气温',
                dataName: 'tempMin',
                detail: ''
            },
            {
                id: '3',
                name: '白天天气',
                dataName: 'textDay',
                detail: ''
            },
            {
                id: '4',
                name: '夜间天气',
                dataName: 'textNight',
                detail: ''
            },
            {
                id: '5',
                name: '总降雨量',
                dataName: 'precip',
                detail: ''
            },
            {
                id: '6',
                name: '日出',
                dataName: 'sunrise',
                detail: ''
            },
            {
                id: '7',
                name: '日落',
                dataName: 'sunset',
                detail: ''
            },
            {
                id: '8',
                name: '月升',
                dataName: 'moonrise',
                detail: ''
            },
            {
                id: '9',
                name: '月落',
                dataName: 'moonset',
                detail: ''
            },
            {
                id: '10',
                name: '月相',
                dataName: 'moonPhase',
                detail: ''
            },
            {
                id: '11',
                name: '白天风向',
                dataName: 'windDirDay',
                detail: ''
            },
            {
                id: '12',
                name: '白天风力',
                dataName: 'windScaleDay',
                detail: ''
            },
            {
                id: '13',
                name: '夜间风向',
                dataName: 'windDirNight',
                detail: ''
            },
            {
                id: '14',
                name: '夜间风力',
                dataName: 'windScaleNight',
                detail: ''
            },
            {
                id: '15',
                name: '能见度',
                dataName: 'vis',
                detail: ''
            },
            {
                id: '16',
                name: '相对湿度',
                dataName: 'humidity',
                detail: ''
            },
        ]
    },
    methods: {
        updateWeather() {
            fetch('https://geoapi.qweather.com/v2/city/lookup?&location=' + weather_location_text + '&key=f187e32108ce415bb12408e9a4d33e81')
                .then(response => response.json())
                .then(data => {
                    if (data.code === '400') {
                        errorSound.play();
                        alertBox('获取数据失败：400<br>错误的请求参数');
                    } else if (data.code === '401') {
                        errorSound.play();
                        alertBox('获取数据失败：401<br>错误的key/数字签名/key类型<br>请联系我：QQ:1041095264');
                    } else if (data.code === '402') {
                        errorSound.play();
                        alertBox('获取数据失败：402<br>请求次数过多，请于第二天重试<br>我使用的是免费订阅版本的API，<br>若想要提供支持，请联系我：QQ:1041095264');
                    } else if (data.code === '403') {
                        errorSound.play();
                        alertBox('获取数据失败：403<br>无访问权限');
                    } else if (data.code === '404') {
                        errorSound.play();
                        alertBox('获取数据失败：404<br>查询的数据或地区不存在');
                    } else if (data.code === '429') {
                        errorSound.play();
                        alertBox('获取数据失败：429<br>请求过于频繁，请一分钟后重试');
                    } else if (data.code === '500') {
                        errorSound.play();
                        alertBox('获取数据失败：500<br>无响应或超时');
                    } else if (data.code === '204') {
                        errorSound.play();
                        alertBox('获取数据失败：204<br>该地区暂无数据');
                    }
                    if (data.location[0].adm2 === data.location[0].name) {
                        weather_city.innerHTML = data.location[0].name;
                    } else {
                        weather_city.innerHTML = data.location[0].adm2 + data.location[0].name;
                    }
                    fetch('https://devapi.qweather.com/v7/weather/3d?location=' + data.location[0].id + '&key=f187e32108ce415bb12408e9a4d33e81')
                        .then(response => response.json())
                        .then(data => {
                            this.weatherData[0].detail = data.daily[0].tempMax + '°C';
                            this.weatherData[1].detail = data.daily[0].tempMin + '°C';
                            this.weatherData[2].detail = data.daily[0].textDay;
                            this.weatherData[3].detail = data.daily[0].textNight;
                            this.weatherData[4].detail = data.daily[0].precip + 'mm';
                            this.weatherData[5].detail = data.daily[0].sunrise;
                            this.weatherData[6].detail = data.daily[0].sunset;
                            this.weatherData[7].detail = data.daily[0].moonrise;
                            this.weatherData[8].detail = data.daily[0].moonset;
                            this.weatherData[9].detail = data.daily[0].moonPhase;
                            this.weatherData[10].detail = data.daily[0].windDirDay;
                            this.weatherData[11].detail = data.daily[0].windScaleDay + '级';
                            this.weatherData[12].detail = data.daily[0].windDirNight;
                            this.weatherData[13].detail = data.daily[0].windScaleNight + '级';
                            this.weatherData[14].detail = data.daily[0].vis + 'km';
                            this.weatherData[15].detail = data.daily[0].humidity + '%';
                        })
                        .catch(console.error)
                })
                .catch(console.error)
        }
    }
})

const vueApp_page = new Vue({
    el: '#pages',
    data: {
        frontPageNum: -1
    },
    methods: {
        setFrontPage(frontPageNum) {
            document.querySelector('.page[pageId="page0"]').style.zIndex = '2';
            document.querySelector('.page[pageId="page1"]').style.zIndex = '2';
            document.querySelector('.page[pageId="page2"]').style.zIndex = '2';
            document.querySelector('.pageBar[id="pageBar0"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
            document.querySelector('.pageBar[id="pageBar1"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
            document.querySelector('.pageBar[id="pageBar2"]').style.backgroundColor = 'var(--basicColor_pageBar_back)';
            switch (frontPageNum) {
                case 0:
                    document.querySelector('.page[pageId="page0"]').style.zIndex = '4';
                    document.querySelector('.pageBar[id="pageBar0"]').style.backgroundColor = 'var(--basicColor_pageBar_front)';
                    break;
                case 1:
                    document.querySelector('.page[pageId="page1"]').style.zIndex = '4';
                    document.querySelector('.pageBar[id="pageBar1"]').style.backgroundColor = 'var(--basicColor_pageBar_front)';
                    break;
                case 2:
                    document.querySelector('.page[pageId="page2"]').style.zIndex = '4';
                    document.querySelector('.pageBar[id="pageBar2"]').style.backgroundColor = 'var(--basicColor_pageBar_front)';
                    break;
                default:
                    break;
            }
            this.frontPageNum = frontPageNum;
        },
        closePage(pageIndexNum) {
            var willClose;
            switch (pageIndexNum) {
                case 0:
                    willClose = document.querySelector('.page[pageId="page0"]');
                    vueApp_page.frontPageNum = 0;
                    break;
                case 1:
                    willClose = document.querySelector('.page[pageId="page1"]');
                    vueApp_page.frontPageNum = 1;
                    break;
                case 2:
                    willClose = document.querySelector('.page[pageId="page2"]');
                    vueApp_page.frontPageNum = 2;
                default:
                    break;
            }
            willClose.style.animation = 'pageOut ease .2s both';
            setTimeout(() => {
                willClose.style.display = 'none';
            }, 200);
            isPageShowing[pageIndexNum] = !isPageShowing[pageIndexNum];

        }
    }
})