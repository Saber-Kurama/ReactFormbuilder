'use strict';
// 服务的端口
const serverport = 8080;
// 视图
const views = {
    src:"app/index.html",
    dest:"build/"
}
// 图片 拷贝
const images = {
	src:"app/images/**/*",
	dest:"build/images/"
}
// 先实现css的拷贝
const copycss = {
	src:"app/css/*.css",
	dest:"build/css/"
}
const styles = {
	src:"app/scss/*.scss",
	dest:"build/css/"
}
// 压缩文件的根路径
const distroot = "build/";

// react js 路径
const bundle = {
	src:"app/js/**/*"
}

// 浏览器的自动刷新
const browser = {
	proxy:"http://localhost:9300"
}

export default {
    serverport,
    views,images,copycss,styles,bundle,
    browser,
    distroot
}

