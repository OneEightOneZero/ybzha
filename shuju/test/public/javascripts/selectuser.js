$(() => {

    let getUserList = (goodsid) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "./users/goodlist",
                data: {
                    _buyerid: goodsid
                },
                success(data) {
                    resolve(data);
                }
            })
        })
    }


    let putUserList = (cartid,buyerid,storeid,storename,goodsid) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "./users/putlist",
                data: {
                   _cartid:cartid,
                   _buyerid:buyerid,
                   _storeid:storeid,
                   _storename:storename,
                   _goodsid:goodsid
                },
                success(data) {
                    resolve(data);
                }
            })
        })
    }


    (async () => {
        let dataa = await getUserList("219927");
        // let datab = await getUserList(219927);
        let datab = await putUserList(1,2,3,4,5);
        
        // document.getElementById("ss").innerHTML+=dataa;        
        console.log(dataa);
        console.log(datab);
    })()
})

// function newFunction(data) {
//     console.log(data);
// }

