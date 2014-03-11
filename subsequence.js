function longestSubsequence1(X, Y)
{
    var LCSuff = [];
    var result=0;
    var total = 0;
    /* Following steps build LCSuff[m+1][n+1] in bottom up fashion. */
    for (var i=0; i< X.length; i++)
    {
        LCSuff[i] = [];
        for (var j=0; j< Y.length; j++)
        {
            if (i == 0 || j == 0){
                LCSuff[i][j] = 0;
            }
            else if (X[i-1] == Y[j-1])
            {
                LCSuff[i][j] = LCSuff[i-1][j-1] + 1;
                result = Math.max(result, LCSuff[i][j]);
            }
            else LCSuff[i][j] = 0;

            total++;

        }
    }
    //console.log("Total: " + total);
    return result;
}


function longestSubsequence2(X, Y)
{

    var max = 0;
    var total = 0;
    var returnme;
    for (var i=0; i< X.length; i++){
        var sub = "";
        var iterator = i;
        for (var j=0; j< Y.length; j++){
            if (X[iterator]==Y[j]){
                sub+=X[iterator];
                if (sub.length > max){
                    returnme = sub;
                    max = returnme.length;
                }
                iterator++;
            }
            total++;
            if (iterator> X.length){
                break;
            }
        }
    }
    //console.log("Total: " + total);
    return returnme;
}

var start = Date.now();
for(var i=0;i<10000;i++){
    longestSubsequence1('geeksforweeks'.split(''), 'leeksfortaeks'.split('') );
}
console.log("Time:" + (Date.now()-start));

var start = Date.now();
for(var i=0;i<10000;i++){
    longestSubsequence2('geeksforweeks'.split(''), 'leeksfortaeks'.split('') );
}
console.log("Time:" + (Date.now()-start));