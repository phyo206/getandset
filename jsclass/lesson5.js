let john={
    fullname:"john",
    mass:30,
    height:60,
    johnbmi:function() {
        let bmi= this.mass/this.height**2;
        console.log(Math.ceil(bmi));
    }
};
john.johnbmi();

let mark={
    fullname:"mark",
    mass:30,
    height:60,
    markbmi:function() {
        let bmi= this.mass/this.height**2;
        console.log(Math.ceil(bmi));
    }
};
mark.markbmi();

if(johnbmi>markbmi){
    console.log(`John's BMI is highest${johnbmi}`);
}
else{
    console.log(`Mike's BMI is height ${markbmi}`);
}