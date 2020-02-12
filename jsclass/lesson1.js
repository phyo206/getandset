let johnscore=[89,120,103];
let markscore=[116,94,123];
let johnavg=(89+120+103)
/3;
let markavg=(116+94+123)/3;
console.log(`John average score${johnavg}`);
console.log(`Mark average score${markavg}`);

if(johnavg<markavg){
    console.log(`Mark score${markscore}`);
}
else{
    console.log(`John score${johnscore}`);
}

let score=function(win){
    console.log(win);
}
score([116,94,123]);

let maryscore=[97,134,105];
let maryavg=(97+134+105)/3;
console.log(`Mary average score${maryavg}`);