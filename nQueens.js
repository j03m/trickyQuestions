

var QueenCheck = function(n){
    this.matrix = [];
    this.size = n;
    //init
    for(var i=0;i<this.size;i++){
        this.matrix.push([]);
        for(var ii=0;ii<this.size;ii++){
            this.matrix[i][ii]=0;
        }
    }
}

QueenCheck.prototype.isSafe = function(row, col){
    //verify if anything in this row has been set
    for(var i=0;i<this.size;i++){
        if (this.matrix[row][i]==1){
            return false;
        }
    }

    //check if anything in this col has been set;
    for(var i=0;i<this.size;i++){
        if (this.matrix[i][col]==1){
            return false;
        }
    }



    //south east
    if (!this.checkDiagonal(1,1,row, col, this.size, this.size)){
        return false;
    }

    //north east
    if (!this.checkDiagonal(1,-1,row, col, this.size, -1)){
        return false;
    }

    //south west
    if (!this.checkDiagonal(-1,1,row, col, -1, this.size)){
        return false;
    }

    //north west
    if (!this.checkDiagonal(-1,-1,row, col, -1, -1)){
        return false;
    }

    return true;

}

QueenCheck.prototype.checkDiagonal = function(xDir, yDir, row, col, limitX, limitY){
    //check se
    var tRow = row;
    var tCol = col;
    tRow+=xDir;
    tCol+=yDir;
    while(tRow != limitX && tCol != limitY){
        if (this.matrix[tRow][tCol]==1){
            return false;
        }
        tRow+=xDir;
        tCol+=yDir;
    }

    return true;
}

QueenCheck.prototype.findSafeConfigs = function(n, col){
    //given n queens, generate a configuration of randomly generated queens
    if (n==undefined){
        n=this.size;
    }

    if (col == undefined){
        col = 0;
    }

    if (col == n){
        console.log(this.matrix);
        return true;

    }

    for(var i =0;i<n;i++){
        for(var row=0;row<n;row++){
            if (this.isSafe(row, col)){
                this.matrix[row][col] = 1;
                if (this.findSafeConfigs(n, col+1)){
                    return true;
                };
                this.matrix[row][col]=0;
            }
        }
    }
    return false;
}



var queenCheck = new QueenCheck(8);
queenCheck.findSafeConfigs();