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

//soluti0n 2; Using array destructuring and Tenary Operators

function openOrSeniorB(data){
return data.map(([age, handicap]) =>
       ( age >= 55 && handicap > 7) ? 'Senior' : 'Open'
           
)
 }
console.log(openOrSenior([[18, 20], [45, 2], [61, 12],[37, 6],[21, 21],[78, 9]]))
console.log(openOrSeniorB([[18, 20], [45, 2], [61, 12],[37, 6],[21, 21],[78, 9]]))



//exercise two

/*Porlycapus works as a DJ in the best Berland nightclub,and he often uses dubstep music in his performance.Recently he has decide to take a couple of old songs and make a dubstep remixSong from them.Berland

Lets assume that a song consists of some number of words
(that dont contain WUB). to make a dubstep remixSong of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song(the number maybe zero), after the last word (the number may be zero) and between words(at least one between any pair of neigbouring words), and then the boy glues together all the words "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remixSong as "WUBWUBIWUBAMWUBWUBX" and cannot translform to "WUBWUBIAMWUBX"
Recently Johnny has heard Polycarpus new dubstep track, but since he isnt into modern music, he decided to find out what was the initial song that Polycarpus remixSonged.Help Johhny restore the original song

Input
The input consist of a single non-empty string cobnsisting of only uppercase English letters and the strings length doesnt exceed 200 characters

Output

Return the words of the original song that Polycarpus used to make a dubstep remixSong. Separate the words with a space

*/

//solution one


const songDecoder = (remixSong) => {
  return console.log('first solution:',remixSong.replaceAll('WUB', ' ').trim())
   
    
} 

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDSWUB")

//solution two, better solution
const songRegex = /(WUB)+/g;

const songDecoderB = (remixSong) => {
    const originalSong =  remixSong.replace(songRegex, ' ').trim()
    
    //remove all whitespaces at start and end of string unsing String.trim()
    console.log(originalSong)
    return originalSong
     
      
  } 
  
  songDecoderB("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDSWUB")


  /*
   Excercise three
   You are give a string of space divide numbers to fing the highest and lowest number
   
   */
  //Solution one

  let str1 = "1 9 -2 3 -4 5 8 6";
  function highAndLow(str){
let test;
      let strArr = str.split(' ');
      let l = strArr.length;
      strArr.sort(function(a,b){ return a - b})

     console.log(strArr[0],strArr[l - 1])
  }

  highAndLow(str1)