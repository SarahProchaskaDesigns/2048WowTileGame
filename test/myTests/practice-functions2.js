var myArr = [[2, 4, '', 4],
             [4, "", 4, 8],
             [8, 8, 2, 4],
             ["", "", 2, ""]];

// FILTERS OUT ALL BLANK SPACES
function firstPassFilter(arr){
    var newArry = arr.filter(function(elem){
        return elem
    })
    return newArry
}
//ADDS ADJECENT NUMBERS AFTER FILTERING SPACES
function addLikeNumbers(arr){
    var newArray = arr.slice();
        for(var i = 0; i < newArray.length; i++){
        if(newArray[i] === newArray[i + 1]){
            newArray[i] = newArray[i] + newArray[i + 1];
            newArray.splice(i + 1, 1)
        }
    }
    return newArray
}
// ADDS EXTRA SPACES AT THE END OF THE ROW - DEPENDING ON THE MOVE
function addSpaces(arr, moveDirection){
    var newArray = arr.slice();
    for(var i = arr.length; i < 4; i++){
        if(moveDirection === 'right'){
            newArray.unshift('');
        }
        if(moveDirection === 'left'){
            newArray.push('');
        }
    }
    return newArray
}
// ROTATES BOARD TO MANAGE VERTICLE MOVES
function rotateBoardCounterClockwise(arr){
    var ccwArray = [[arr[0][3], arr[1][3], arr[2][3], arr[3][3]],
                    [arr[0][2], arr[1][2], arr[2][2], arr[3][2]],
                    [arr[0][1], arr[1][1], arr[2][1], arr[3][1]],
                    [arr[0][0], arr[1][0], arr[2][0], arr[3][0]],
                    ];
    return ccwArray
}
// ROTATES BOARD BACK TO STANDARD POSITION
function rotateBoardClockwise(arr){
        var cwArray = [[arr[3][0], arr[2][0], arr[1][0], arr[0][0]],
                        [arr[3][1], arr[2][1], arr[1][1], arr[0][1]],
                        [arr[3][2], arr[2][2], arr[1][2], arr[0][2]],
                        [arr[3][3], arr[2][3], arr[1][3], arr[0][3]],
                        ];
        return cwArray
}
function populateNewSquare(arr){
    var newArray = arr.map((row) => row.slice());
    var move = false;
    while(!move){
        var row = 0
        var randomNumber = Math.random()*100;
        if(randomNumber >= 25 && randomNumber < 50){
            randomNumber -= 25
            row = 1
        }
        if(randomNumber >= 50 && randomNumber < 75){
            randomNumber -= 50
            row = 2
        }
        if(randomNumber >= 75){
            randomNumber -= 75
            row = 3
        }
        if(randomNumber < 6.25 && !newArray[row][0]){
            newArray[row][0] = 2
            move = true
        }
        if(randomNumber >= 6.25 && randomNumber < 12.5 && !newArray[row][1]){
            newArray[row][1] = 2
            move = true
        }
        if(randomNumber >= 12.5 && randomNumber < 18.75 && !newArray[row][2]){
            newArray[row][2] = 2
            move = true
        }
        if(randomNumber >= 18.75 && randomNumber < 25 && !newArray[row][3]){
            newArray[row][3] = 2
            move = true
        }
    }
    console.log(arr === newArray)
    return newArray
}
var anyMove = (totalBoardArray, move) => {
    // IF MOVE IS VERTICLE - CALL ROTATE CCW BOARD FIRST && CHANGE VALUE OF MOVE
    if(move === 'up' || move === 'down'){
        totalBoardArray = rotateBoardCounterClockwise(totalBoardArray)
        var verticleMove = true
    }
    if(move === 'up'){
        move = 'left'
    }
    if(move === 'down'){
        move = 'right'
    }
    // ALWAYS - DELETE SPACE / ADD ADJECENT NUMBERS / MAP BACK IN SPACES
    var moveCompleted = totalBoardArray.map(function(eachRowArr){
        var deletedSpaceAndAdded = addLikeNumbers(firstPassFilter(eachRowArr));
        // console.log(deletedSpaceAndAdded)
        return addSpaces(deletedSpaceAndAdded, move)
    })
    
    // IF MOVE IS VERTICLE - CALL ROTATE CW BOARD LAST
    if(verticleMove){
        moveCompleted = rotateBoardClockwise(moveCompleted)
    }
    return moveCompleted
}