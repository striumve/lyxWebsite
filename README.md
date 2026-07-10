# lyx 的个人网站

> **Striumve** — Strive. Triumph.
>
> 网址：[lyxlyx.top](https://lyxlyx.top)

## 简介

个人网站，包含个人空间（竹芒云蹊）、终端。

## 竹芒云蹊

个人空间，存放一些文章、一些介绍，以及一些想做的功能。

-  版本历史

| 版本 | 目录 | 说明 |
|------|------|------|
| **v4（当前）** | `/v4/` | 更名竹芒云蹊，全面重写的现代风格，支持文章阅读、评论留言 |
| v3 | `/v3/` | 过渡版本，现已弃项 |
| v2 | `/v2/` | 改版，支持多个页面、多种功能 |
| v1 | `/v1/` | 初代版本，基于 GitHub Pages 的纯静态页面 |

- 网页开发日志

  - [v4版本](/public/diary4.html)
  - [v2,3版本](/public/diary.html)
  - [v1版本](/public/diary_origin.html)

- 功能特色

  - 暗色/亮色主题 — 系统级切换，保存用户偏好
  - 博客文章 — 分类、标签，支持代码高亮（Highlight.js）
  - 音乐播放器 — 内嵌音乐列表与播放控制
  - 评论区 — 访客可留言，数据持久化存储
  - 响应式设计 — 适配桌面与移动端

在local storage中设置debug_stopAutoMusicPlay项为1，可以停止自动播放音乐。

## 终端

仿Linux风格的终端，支持一些命令

| 命令名称 | 命令说明 |
|----------|----------|
| about | 关于我 |
| whoami | 显示当前用户身份 |
| projects | 项目列表 |
| neofetch | 系统信息 |
| contact | 联系方式 |
| date | 显示当前时间 |
| cowsay | 让牛说句话 |
| clear | 清空屏幕 |
| exit | 结束会话 |
| help | 显示此帮助信息 |
| ??? | ??? |

## 技术栈

- **前端**：原生 HTML + CSS + JavaScript，未使用框架
- **后端**：Node.js + Express
- **部署**：阿里云，nginx
- **字体**：DIN、思源黑体、思源宋体、Consolas
- **代码高亮**：Highlight.js（定制的主题）

## API 接口

| 路由 | 方法 | 说明 |
|------|------|------|
| `/api/pw` | GET | 密码验证 |
| `/api/self` | GET | 个人后台（需要密码） |
| `/api/comments` | POST | 提交评论（`{content, name, time}`） |
| `/api/` | GET | API 状态页 |

## 部署说明

### Cloudflare Pages（静态页面）
静态部分可以直接部署到 Cloudflare Pages，根目录为项目根。

### nginx + Node.js API
项目配置 proxy 将 `/api/*` 请求转发到 `app.js`。需安装：
- nginx
- Node.js
  - Express
  - Express-Session

## 许可

本项目为个人作品，仅供学习与分享。

---

*竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。*
