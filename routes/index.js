var express = require('express');
var router = express.Router();

var HHardyy={};
function html_encode(str){
	var s="";
	if (str.length==0) return ""
	s=str.replace(/&/g,"&gt;");
    s=s.replace(/</g,"&lt;");
    s=s.replace(/>/g,"&gt;");
    s=s.replace(/\s/g,"&nbsp;");
    s=s.replace(/\'/g,"&#39;");
    s=s.replace(/\"/g,"&quot;");
    s=s.replace(/\n/g,"<br>");
    return s;
};

//路由接口
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

//评论接口
router.get('/com',function(req,res,next){
	HHardyy.v=html_encode(req.query.com);
});

//拉取评论接口
router.get('/getcom',function(req,res,next){
	res.json({
		com:HHardyy.v
	})
})

module.exports = router;

