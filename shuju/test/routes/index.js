var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/goodlist', async (req, res, next) => {
  let {
    goods_id
  } = req.body
  console.log(req.body)
  let data = await find(`k1`, {
    goods_id: goods_id
  })
  res.send(data);
});
router.get('/yubazha', async (req, res, next)=> {
  let getdata=()=>{
    return new Promise((resolve,reject)=>{
      request('http://wap.ybzha.com/wapmall/index/guess',(err,response,body)=>{
        resolve(body)
      })
    });

  }
  let data=await getdata();
  res.send({
    data:JSON.parse(data).result
  })
});

module.exports = router;
