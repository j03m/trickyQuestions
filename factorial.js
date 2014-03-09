

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


function factorialTail (n)
{
    function fac_helper (n, fac)
    {
        if (n <= 1)
            return fac ;
        return fac_helper (n - 1, n * fac) ;
    }

    return fac_helper (n, 1) ;
}


var start = Date.now();
for(var i=0;i<1000000;i++){
    factorialRec(Math.floor(Math.random()*100 + 1));
}
console.log("Time:" + (Date.now()-start))

var start = Date.now();
for(var i=0;i<1000000;i++){
    factorial(Math.floor(Math.random()*100 + 1));
}
console.log("Time:" + (Date.now()-start));

var start = Date.now();
for(var i=0;i<1000000;i++){
    factorialTail(Math.floor(Math.random()*100 + 1));
}
console.log("Time:" + (Date.now()-start))