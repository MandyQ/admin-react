const path= require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'./dist')
	},
	devServer:{
		open:true,
		port:3000,
	},
	module:{
		rules:[
			{ test: /\.(css|less)$/, use:['style-loader','css-loader','less-loader']},
			{ test: /\.(png|jpg|jpeg|gif|svg)$/, use:'url-loader'},
			{ test: /\.(js|jsx)$/, use:'babel-loader',exclude:/node_modules/}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html')
		})
	]

}