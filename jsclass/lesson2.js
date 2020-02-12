let price=[124,48,268];
let tip1,tip2,tip3,bill1,bill2,bill3;
let amount=(price)=>{
    for(i=0;i<price.length;i++){
    if(price[i]<50){
        tip1=price[i]*0.2;
        bill1=tip1*price[i];
        console.log(tip1);
        console.log(bill1);
    }
    else if(price[i]>=50 && price[i]<=200){
        tip2=price[i]*0.15;
        bill2=tip2*price[i];
        console.log(tip2);
        console.log(bill2)
    }
    else if(price[i]>200){
        tip3=price[i]*0.1;
        bill3=tip3*price[i];
        console.log(tip3);
        console.log(bill3);
    }
}}
amount(price);