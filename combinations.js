function stringCombos(str){
    if (typeof str == 'string'){
        str = str.split(''); //to ary
    }

    for(var i=0;i<str.length;i++){
        var swap = str[0];
        str[0]=str[i];
        str[i]=swap;
        for(var ii=1;ii<str.length;ii++){
            var combo = str[ii];
            for(var iii=0;iii<str.length;iii++){
                if (ii != iii){
                    combo+=str[iii];
                }
            }
            console.log(combo);
        }
    }
}


function stringCombosFaster(str, i){
    if (typeof str == 'string'){
        str = str.split(''); //to ary
    }
    if (i==undefined){
        i=0;
    }

    if (i==str.length){
        console.log(str);
        return;
    }
    for(var x=0;x<str.length;x++){
        var swap = str[i];
        str[i]=str[x];
        str[x]=swap;
        stringCombosFaster(str, i+1);
        swap = str[i];
        str[i]=str[x];
        str[x]=swap;

    }


}


function intCombos(n, ary){
    if (!ary){
        ary=[];
    }
    if (n==0){
        console.log(ary);
        return;
    }

    for(var i =0;i<10;i++){
        ary[n-1]=i;
        intCombos(n-1,ary);

    }
}
var spins = 0;
var recurs = 0;
function intCombosUntil(n, maxint, ary){
    if (!ary){
        ary=[];
    }
    if (n==0){
        console.log(ary);
        return;
    }
    recurs++;
    for(var i =0;i<maxint;i++){
        ary[n-1]=i;
        spins++
        intCombosUntil(n-1, maxint, ary);
    }
}



function matrixCombos(n, max, marked, ary, col){
    if(!ary){
        ary=[];
    }

    if (col == marked){
        console.log(ary);
        return;
    }

    if (col == undefined){
        col = 0;
    }


    if (!ary[col]){
        ary[col]=[];
    }

    for(var row=0;row<n;row++){
        for(var i=1;i<max;i++){
            ary[col][row] =i;
            matrixCombos(n, max, marked, ary, col+1);
            ary[col][row] = 0;
        }
    }


}


//stringCombos("dogs");
matrixCombos(4,10, 7);
//intCombos(5);
//intCombosUntil(5,4); //binary
//console.log(spins);
//console.log(recurs);
//matrixCombos(5,10);