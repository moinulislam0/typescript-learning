"use strict";
//enum data type 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "readData";
    RequestType2["deleteData"] = "deleteData";
    RequestType2[RequestType2["id"] = 101] = "id";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.readData);
