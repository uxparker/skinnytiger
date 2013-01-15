var connect = require('connect');
connect.createServer(
	connect.static('/Users/user/skinnytiger/jquery-jkit-master')
).listen(8080);