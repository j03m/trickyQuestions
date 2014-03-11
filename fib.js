
function fib(n){
    if (n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}


//memoized (note - across calls!!)
var lookupMem;
function fibMem(n){
    if(!lookupMem){
        lookupMem=[];
    }
    if (lookupMem[n]==undefined){
        if (n<=1){
            lookupMem[n]=n;
        }else{
            lookupMem[n]=fib(n-1)+fib(n-2);
        }
    }
    return lookupMem[n];
}

//tabulated on each run
function fibTab(n){
    var lookupTab=[];
    lookupTab[0]=0; lookupTab[1]=1;
    for(var i=2;i<=n;i++){
        lookupTab[i] = lookupTab[i-1]+lookupTab[i-2];
    }
    return lookupTab[n];
}

//tabulated saved across calls
var lookupTabX=[];
function fibTabCross(n){
    if (lookupTabX[n]){
        return lookupTabX[n];
    }

    lookupTabX[0]=0; lookupTabX[1]=1;
    for(var i=2;i<=n;i++){
        lookupTabX[i] = lookupTabX[i-1]+lookupTabX[i-2];
    }
    return lookupTabX[n];
}





var start = Date.now();
for(var i=0;i<5000;i++){
    //fib(Math.floor(Math.random()*25 + 1));
}
console.log("Time:" + (Date.now()-start))

var start = Date.now();
for(var i=0;i<5000;i++){
    fibMem(Math.floor(Math.random()*25 + 1));
}
console.log("Time:" + (Date.now()-start))

var start = Date.now();
for(var i=0;i<5000;i++){
    fibTab(Math.floor(Math.random()*25 + 1));
}
console.log("Time:" + (Date.now()-start))

var start = Date.now();
for(var i=0;i<5000;i++){
    fibTabCross(Math.floor(Math.random()*25 + 1));
}
console.log("Time:" + (Date.now()-start))
