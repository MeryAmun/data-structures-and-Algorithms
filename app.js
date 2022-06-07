function sumNumbers(n){
    let result = 0; //runs 1 time
    let l = n.length; //runs 1 time
    for(let i = 0; i < l; i++){  //(initialization) runs 1 time
        result+= n[i];   //(body) runtime depends on length of n, here  3
        
    }
    return result //runs 1 time
}
//Here the fastest growing term is the length of the array  therefore Time complexity is Linear i .e  O(n)

console.log(sumNumbers([45, 67,80]))

//another example, same Time complexity
// function sumNumbers2(numbs){
//     let result = 0;
//     for (const number of numbs) {
//         result += number;
//     }
//     return result
// }
// console.log(sumNumbers2([345, 67, 788]))

//if the length of the array was known, the complexity will be O(1) because the time is constant since the code only runs once
function sumNumbers1(numbers){
return numbers[0] + numbers[1] + numbers[2]
}

//however we can use thhe reduce() method available in javascript, even though it only reduces our code to one line but since we are calling the reduce() method which is an built function? the process is the same. So sometimes lesser code does not necessarilly change the Time Complexity

function sumNumbers2(numbers){
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0)
}
console.log(sumNumbers2([345, 67, 788]));
//the best method is our loop and we cannot find a faster way

const items = [
    {id:'fish', value:10,weight: 5},
    {id:'bread', value:15,weight: 16},
    {id:'egg', value:10,weight: 5}
]

maxWeight = 16;
let bag = []
for(let i = 0; i < 3; i++){
    if(items[i].weight < maxWeight){
        bag.unshift(items[i]);
        
    }
    
}
 console.log(bag)





function sumNumbers(arr){
    let result1 = 0;
    for(let i = 0; i < arr.length; i++){
    result1 += arr[i]
    }
    return result1
}

console.log(sumNumbers([2,45,67,89,97]))

//Algorithm exercises

//1) Categorize New Members Application
// The Western Subburbs Croquet club has two categories of memberships.Seior and open.They will like your help with an applicatioin that ill tesll prosperctive members which category they will be placed.
//   To be a openOrSenior, a member must be at least 55years onload, and have a handicap greater than 7.Handicaps range from -2 to +26. The better the player the lower the handicap.

// input [[18, 20], [45, 2], [61, 12],[37, 6],[21, 21],[78, 9]];
          //>=55 >7
//output ['open', 'open', 'senior','open', 'open', 'senior']

function openOrSenior(data){
return data.map((info) =>{
    if(info[0] >= 55 && info[1] > 7){
        return 'Senior'
    }else{
        return 'Open';
    }
})
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12],[37, 6],[21, 21],[78, 9]]))