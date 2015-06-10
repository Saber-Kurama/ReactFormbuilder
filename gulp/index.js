"use strict";
// 引入文件读取模块
import fs from "fs"
// 同步读取目录 gulp/tasks
let tasks = fs.readdirSync("./gulp/tasks/");
// 循环加载每个任务
tasks.forEach(function(task){
	require("./tasks/"+task);
	//import `./tasks/${task}`
	//.import(`./tasks/${task}`);
	//Promise;
	//system
})