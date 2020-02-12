let arr=[
    {
    title:"The Habbit",
    author:"J.R.R.Tolkien",
    alreadyRead:true,
    },
   {
    title:"The Lord of the rings",
    author:"J.R.R.Tolkien",
    alreadyRead:false,
  }  
];
for(let i=0; i<=arr.length;i++){
    if(arr[i].alreadyRead==true){
        console.log(`You alreay read ${arr[i].title} by${arr[i].author}`);
    }
    else if(arr[i].alreadyRead==false){
        console.log(`You still need to read${arr[i].title} by ${arr[i].author}`);
    }
};