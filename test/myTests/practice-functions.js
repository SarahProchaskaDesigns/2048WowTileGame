var myArr = [[2, 4, '', 4],
             [4, "", 4, 8],
             [8, 8, 2, 4],
             ["", "", 2, ""]];

function firstPassFilter(arr){
    var newArry = arr.filter(function(elem){
        return elem
    })
    return newArry
}
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

function rotateBoardCounterClockwise(arr){
    var ccwArray = [[arr[0][3], arr[1][3], arr[2][3], arr[3][3]],
                    [arr[0][2], arr[1][2], arr[2][2], arr[3][2]],
                    [arr[0][1], arr[1][1], arr[2][1], arr[3][1]],
                    [arr[0][0], arr[1][0], arr[2][0], arr[3][0]],
                    ];
    return ccwArray
}
function rotateBoardClockwise(arr){
        var cwArray = [[arr[3][0], arr[2][0], arr[1][0], arr[0][0]],
                        [arr[3][1], arr[2][1], arr[1][1], arr[0][1]],
                        [arr[3][2], arr[2][2], arr[1][2], arr[0][2]],
                        [arr[3][3], arr[2][3], arr[1][3], arr[0][3]],
                        ];
        return cwArray
}

// addSpaces(firstPassFilter(myArr), 'left')

var moveLeft = myArr.map((arr) => {
    return addSpaces(firstPassFilter(arr), 'left')
}).map(function(eachArr){
    return addSpaces(addLikeNumbers(eachArr), 'left')
})
/////

var moveRight = myArr.map((arr) => {
    return addSpaces(firstPassFilter(arr), 'right')
}).map(function(eachArr){
    return addSpaces(addLikeNumbers(eachArr), 'right')
})
//////

var moveDown = rotateBoardCounterClockwise(myArr).map((arr) => {
    return addSpaces(firstPassFilter(arr), 'right')
}).map(function(eachArr){
    return addSpaces(addLikeNumbers(eachArr), 'right')
})

rotateBoardClockwise(moveDown);

//////

var moveUp = rotateBoardCounterClockwise(myArr).map((arr) => {
    return addSpaces(firstPassFilter(arr), 'left')
}).map(function(eachArr){
    return addSpaces(addLikeNumbers(eachArr), 'left')
})

rotateBoardClockwise(moveUp);