const ResponseHandler = function (data,error){
    let _res = {
        "statusCode": 200,
        "status": "Success" ,
        "data": {} || [],
        "message": "Response Message...",
        "meta": {
            "toast": false,
            "ResType" : "Json" ,
            "sessionActive" : true 
        }
    }
    return _res
}


module.exports = ResponseHandler