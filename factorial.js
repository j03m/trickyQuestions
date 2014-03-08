

function factorialRec(n){
    if (n>0){
        return n * factorialRec(n-1);
    }else{
        return 1;
    }

}


function factorial(n){
    var returnme = n;
    for(var i =n-1;i>0;i--){
        returnme*=i;
    }
    return returnme;

}



var start = Date.now();
for(var i=0;i<100000;i++){
    factorialRec(Math.floor(Math.random()*100 + 1));
}
console.log("Time:" + (Date.now()-start))

var start = Date.now();
for(var i=0;i<100000;i++){
    factorial(Math.floor(Math.random()*100 + 1));
}
console.log("Time:" + (Date.now()-start))