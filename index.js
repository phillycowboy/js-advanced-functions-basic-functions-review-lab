// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapped = "*") {
    return function(adjective = "special"){
        return `You are ${wrapped}${adjective}${wrapped}!`;
        
    }
}

let Calculator = {
    add: function(a,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a / b}
};


function actionApplyer(num, arr){
    let res = num; 
    
    for(let i = 0; i < arr.length; i++){
        res = arr[i](res);
    }
    console.log(res);
    return res;
}


