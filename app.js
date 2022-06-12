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

      let strArr = str.split(' ');
      let l = strArr.length;
      strArr.sort(function(a,b){ return a - b})

     console.log(strArr[0],strArr[l - 1])
  }

  highAndLow(str1)

  /*
  Exercise four
  create a function that returns the sum of the two lowest positive numbers given an array of minimum four positive integers.No floats or non positive integers will be passed;
   e.g [ 19, 5, 42,2 77]
  
  */

   let ex = [ 19, 5, 42,2, 77]
   let ex1 = [10, 343445353, 3453445, 3453545353453]
   function sumTwoSmallestNumber(arr){
//to sort in descending order,
// let testArr = arr.sort(function(a, b) {return b - a});

       //sorts in ascending order
       let testArr = arr.sort(function(a, b) {return a-b});

       //const [fisrtNumber, secondNumber] =  arr.sort(function(a, b) {return a-b});

       //return firstNumber + secondNumber
      return  console.log(testArr[0] + testArr[1])

   }
   sumTwoSmallestNumber(ex)

   //solution 2
   function sumTwoSmallestNumber2(numbers){
       const [a, b ] = numbers.sort((a, b) => a - b)
       return a + b;
   }

   //third solution

   function sumTwoSmallestNumber3(numbers){
       let min = Number.MAX_SAFE_INTEGER;
       let secondMin = Number.MAX_SAFE_INTEGER;
     
       let n;

       for(i = 0; i < numbers.length; i++){
           n = numbers[i];
           if(n < min){
               secondMin = min;
               min = n;
           }else if(n < secondMin){
               secondMin = n
           }
       }
       return console.log( min + secondMin)
   }

   sumTwoSmallestNumber3([10, 343445353, 3453445, 3453545353453])

   /* 
   Exercise five

   Create a function that takes a array of non-negative integers and strings and returns a new list with the strings filtered out
   */

   let mixedArray = [ 12, 'see', '23', 34, 'ate', 56, 'gas'];

   //solution one
   function filterList(arr){
       let numArr = []
       let l = arr.length;
       for(let i = 0; i < l; i++){
           if(typeof arr[i] === 'number'){
               numArr.push(arr[i])
           }
       }
       return console.log(numArr)
   }
   filterList(mixedArray);


   /* 
   The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.
   
   
   
   */

   //exercise six

   // The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];

  let ratings = [];

  const newWatchList = watchList.map(({Title, imdbRating}) => ( {Title , rating:imdbRating}
   
  ))
  ratings = newWatchList
  console.log(ratings);
  console.log(JSON.stringify(ratings));


   /* 
   
   exercise seven

   Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.
   */



// The global variable
const s = [23, 65, 98, 5];

let callBackSt = ((item) => {
    return item
    })

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

/*

filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

exercise eight

using the watchList array above
*/

const mapList = watchList.map((movie) => (
    {title:movie.Title, rating:movie.imdbRating})
    )
   
   
    const filteredList = mapList.filter(({rating}) => rating >= 8.0)
   console.log(JSON.stringify(filteredList) )



/**    
 exercise ten

Implement the filter Method on a Prototype
You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
 */



// The global variable
const sFilter = [23, 65, 98, 5];
let callBackFil = ((item) => item % 2 === 1 (
  
))

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for(let i = 0; i < this.length; i++){
   if(callback(this[i]) % 2 === 1)
    newArray.push(this[i])
  }
  // Only change code above this line
  return newArray;
};

const new_sFilter = sFilter.myFilter(function(item) {
  return item % 2 === 1;
});


/* 
Return Part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.



*/
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const copyArr = arr.slice() //copies the entire array
const newArray = arr.slice(1, 3); //copies index 1 and 2
//newArray would have the value ["Dog", "Tiger"].


/**Combine Two Arrays Using the concat Method
Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example: */

//example 11
function nonMutatingConcat(original, attach) {
    // Only change code below this line
  return original.concat(attach)
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);



/* 
Use the reduce Method to Analyze Data
Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

exercise ten 
The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

*/


function getRating(watchList) {
    // Only change code below this line
    let averageRating = [];
  const movies = watchList.filter((film) => film.Director === "Christopher Nolan" )
  const christopher = movies.map((film) => Number(film.imdbRating))
  console.log(christopher)
  
  
  let lR = christopher.length;
  
  averageRating = christopher.reduce((sum, num) => sum + num ) / lR;
  
  
    // Only change code above this line
    return averageRating;
  }
  
  console.log(getRating(watchList));






  /* 
  Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.
  
  
  */

const squareList = arr => {
    // Only change code below this line
   const positiveNums = arr.filter((num) => num > 0 && Number.isInteger(num) === true)
   const squareArr = positiveNums.map((number) => Math.pow(number, 2)) 
    return squareArr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

/*
The sort method sorts the elements of an array according to the callback function.

For example:




*/

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  ascendingOrder([1, 5, 2, 3, 4]);//returns [ 1,2,3,4,5];

  function descendingOrder(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }
  
  descendingOrder([1, 5, 2, 3, 4]);//returns [5, 4, 3, 2, 1]


  function alphabeticalOrder(arr) {
    // Only change code below this line
  
  let sortedArr = arr.sort(function(a, b){
  return  a === b ? 0 : a < b ? -1 : 1;
  })
    return sortedArr
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


  function reverseAlphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
    // Add your code above this line
  }
  reverseAlphabeticalOrder(["l", "h", "z", "b", "s"]);
  // Returns ['z', 's', 'l', 'h', 'b']



  /*
  Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
  
  
  */
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let concatArr = [];

const sotrtedArr = arr.concat(concatArr);

sotrtedArr.sort((function(a, b){
  return a - b
} ))
return sotrtedArr
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));

/* 
Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.


*/

function splitify(str) {
    // Only change code below this line
  
  const splitStr = str.split(/\W/)
  return splitStr
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));
/* 

 Exercise seven

   In this kata, you are required to, give a string, replace every letter with its position in the alphabet
If anything in the text is not a letter, ignore it and dont return it


e.g testStr = "The sunset sets at twelve o'clock."
   */

/* 

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

*/


function sentensify(str) {
    // Only change code below this line
  //let newStr2 = str.replace(/(-)+/g, ' ')
  
  return   str.split(/\W/).join(" ")
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));




  //solution one
  let alphaStr =  "The sunset sets at twelve o' clock.";
let alphabet = ['a','b','c','d','e','f,g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function alphabetPosition(){
      let alphaArr = alphaStr.split('')
      let l = alphaArr.length;
      let m = alphabet.length;
      let newAlArr = [];
      let numStr ;

      //console.log(alphaArr)
      for(let i = 0; i < l; i+1){
          for(let j = 0; j < m; j++){
if(alphaArr[i].toLowerCase() === alphabet[j]){
   //console.log(alphabet.indexOf(alphabet[j]) + 1 )
  // newAlArr.push(alphaArr[i].slice(0));
   //console.log(newAlArr)
   //newAlArr = alphaArr[i]
   //console.log(typeof newAlArr)
   console.log(alphabet[j].length)
}
          }
      }

  }
//   alphabetPosition("The sunset sets at twelve o'clock.")