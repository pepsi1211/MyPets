 // 定义一个函数，输入的参数不限，将每个参数转为固定的格式
function jisuan(){
	var arr = arguments;
	var obj = {};
	for(var i = 0; i < arr.length; i++){
		obj[arr[i]] = arr[i] / 1.44;
	}
	console.log(obj);
}
jisuan(32,187,109,36,47,38,123,758,37, 61,278,34,104,77,40,855)