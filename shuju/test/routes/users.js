var express = require('express');
var router = express.Router();
var {
  find, 
  insert,
} = require("../libs/mongo.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/goodlist', async (req, res, next) => {
  let {
    _buyerid
  } = req.body;
  console.log(req.body)
  let data = await find(`k1`, {
    buyer_id:_buyerid
  })
  console.log(data);
  res.send(data); 
})


router.post('/putlist', async (req, res, next) => {
  let {
    _cartid,_buyerid,_storeid,_storename,_goodsid
  } = req.body;
  let data = insert(`k1`,[{
    cart_id:_cartid,
    buyer_id:_buyerid,
    store_id:_storeid,
    store_name:_storename,
    goods_id:_goodsid
  }]);
  res.send(data);
});
module.exports = router;
