//enum data type 

enum RequestType{
    readData=1,
    deleteData,
    saveData
}

console.log(RequestType);

enum RequestType2{
    readData = "readData" ,
    deleteData = "deleteData",
    id =101
}
console.log(RequestType2.readData)