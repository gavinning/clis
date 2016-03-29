// @author : gavinning
// @example: node rename

var fs = require('fs');
var path = require('path');
var glob = require('glob');


// 源路径
var url = './slogan/**.png';

// 源关键字
var keyword = 'slogan_';

// 重命名关键字
var reword = '';


// 查找源文件
glob(url, function(err, arr){
	// 遍历查询
	arr.forEach(function(src){
		var filename = path.basename(src);
		// 符合规则的源文件将被重命名
		if(filename.indexOf(keyword) >= 0){
			fs.createReadStream(src).pipe(fs.createWriteStream(path.join('./new/' + filename.replace(keyword, reword))))
		}
	})
})