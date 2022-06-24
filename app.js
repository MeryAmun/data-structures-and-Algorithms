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

/* 
Apply Functional Programming to Convert Strings to URL Slugs
The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

*/


/* 
Use the every Method to Check that Every Element in an Array Meets a Criteria
The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

For example, the following code would check if every element in the numbers array is less than 10:

*/
// Only change code below this line
function urlSlug(title) {
    let toLower = title.toLowerCase()
    .trim();
    return toLower.split(/\s+/g).join('-')
    
    }
    // Only change code above this line
    urlSlug(" Winter Is  Coming");


    const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}

//Given a string, replace every letter with its number in the alphabet
  //solution one
  let alphaStr =  "The sunset sets at twelve o' clock.";
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  function alphabetPosition(){
      let alphaArr = alphaStr.toLowerCase().split('')
      let l = alphaArr.length;
      let newStr = '';
      for(let i = 0; i < l; i++){
          newStr = alphaArr.map((letter) => alphabet.indexOf(letter) + 1)

console.log(newStr.join(' '))
    }

     return newStr.join(' ')
 
  }
   alphabetPosition("The sunset sets at twelve o'clock.");


   /* 
   Use the every() Method to Check that Every Element in an Array Meets a Criteria
The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
   
Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
   */


  
function checkPositive(arr) {
    // Only change code below this line
    let result = []
    for(let i = 0; i < arr.length; i++){
      let num = arr[i]
  result = arr.every(function(num){
    if( num >= 0 ){
      return true
    }else{
   return false
    }
   
  })
   }
  return result
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));


  /* 

  The some() method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:
  array.some(function(value, index, arr), this)


  Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
  
  */

  //example
  const numbers = [10, 50, 8, 220, 110, 11];

  numbers.some(function(currentValue) {
    return currentValue < 10;
  });
  //The some method would return true.


  //exerces 24

  //Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
  function checkPositive(arr) {
    // Only change code below this line
    let booleanValue;
  arr.some((currentValue) => {
    if(currentValue > 0 ){ 
      booleanValue = true
      }else{
         booleanValue = false
      }
  })
  return booleanValue
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);

  /* 
  Introduction to Currying and Partial Application
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
curried(1)(2) would return 3


Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
  
  
  */

function add(x) {
    // Only change code below this line
  return function(y){
    return  function(z){
    return x + y + z
  }
  }
  
    // Only change code above this line
  }
  
  add(10)(20)(30);

  /* 
  We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

The sum of the members of a finite arithmetic progression is called an arithmetic series. For example, consider the sum:

{\displaystyle 2+5+8+11+14}2 + 5 + 8 + 11 + 14
This sum can be found quickly by taking the number n of terms being added (here 5), multiplying by the sum of the first and last number in the progression (here 2 + 14 = 16), and dividing by 2:

{n(a_{1}+a_{n})}{2}}}\frac{n(a_1 + a_n)}{2}
In the case above, this gives the equation:

 2+5+8+11+14 = >
 5(2+14) / 2 => 5 * 16 / 2 = 40 
  
  */

//solution 1
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

  //solution 2
  function sumAll(arr) {

    let newSumAll = 0;
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  for(let i = min; min <= max; min++){
  newSumAll += min
  }
  return newSumAll
  }
  console.log(sumAll([10, 5]))

  //Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

  function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }
  console.log(longestString('You', 'will', 'be', 'provided', 'with', 'an', 'initial','array'))

  /*
  
  Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
  
  */
 //solution 1
function destroyer(arr) {
    const toBeDestroyed = Array.from(arguments).slice();
    let destroyedArr = []
   destroyedArr = arr.filter((item) => !toBeDestroyed.includes(item) )
      
    return destroyedArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
  //solution 2
 
  function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice();
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


//   Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.



  function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    //arr = //collection.map((item) => item.first && item.last)
   const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < souceKeys.length; i++) {
        if (!obj.hasOwnProperty(souceKeys[i]) ||
            obj[souceKeys[i]] !== source[souceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }
  
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))


//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  
    return str.split(/\s|_|(?=[A-Z])/)
  .join('-').toLowerCase()
  
}

spinalCase('This Is Spinal Tap');

//exercise 34

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    let newStr;
    let nextSubStr;
    let finalStr;
    let vowelRegex = /[aeiou]/gi;
    let consoRegex = /[^aeiou]+/gi;
    
   for( let i = 0; i < str.length; i++){
     if(str[i].match(vowelRegex)){
    return  newStr = str.concat('way')
     }else if(str.match(consoRegex)){
       let newSubStr = str.match(consoRegex)
       
       nextSubStr = str.slice(0, newSubStr[0].length)
       
  return finalStr = str.split('')
   .splice(newSubStr[0].length)
   .join('').concat(nextSubStr).concat('ay');
  
  
     }
   }
    return newStr;
  }
  
  console.log(translatePigLatin("phsychology"));

  /* 
  exercise 35
  Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
  */

function myReplace(str, before, after) {
    let newStr;
    
     if(before.charAt(0).toLowerCase() === before.charAt(0)){
       console.log(before)
       const newAfter = after.charAt(0).toLowerCase() + after.slice(1);
   newStr = str.replace(before, newAfter);
  
    }else if(before.charAt(0).toUpperCase() === before.charAt(0)){
      str.match(before).input;
  const newAfter = after.charAt(0).toUpperCase() + after.slice(1);
  
    newStr = str.replace(before, newAfter);
    
    }
    return newStr;
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

  /* 
  exercise 36
  Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
  */
function pairElement(str) {
    let dnaStr = str.split('');
     let firstArr = [];
     let secondArr = [];
     let l = dnaStr.length;
     let m = dnaStr.length;
       for(let i = 0; i < m; i++){
   if(dnaStr[i] === 'A'){
   secondArr.splice([i], 0,['A','T'])
       }
        if(dnaStr[i] === 'T'){
   secondArr.splice([i], 0, ['T','A'])
       }
          if(dnaStr[i] === 'C'){
   secondArr.splice([i], 0, ['C','G'])
       }
          if(dnaStr[i] === 'G'){
             secondArr.splice([i], 0,['G','C']);
       }
       }
       
       
     //finalArr = firstArr.concat(secondArr)
     return firstArr.concat(secondArr);
   }
   
   console.log(pairElement("ATCGA"));
   let basePairs = [["A","T"], ["C", "G"]];
   //the dna strand characters follow the defined other, thererfore, if the provided strand is  ATCGA, therefore the missing strands are T, A, G, C,T



   //exercise 37;
//    Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
let letters = "abcdefghijklmnopqrstuvwxyz";


function fearNotLetter(str) {
  let newStr;
  let missingLetter;
  let n = str.length - 1;
   let startRange = str[0];
  let endRange = str[n];

   newStr = letters.slice(letters.indexOf(letters[letters.indexOf(startRange)]), letters.indexOf(letters[letters.indexOf(endRange)]) + 1);
   
  for(let i = 0; i < newStr.length; i++){
    if(!str.includes(newStr[i])){
missingLetter = newStr[i]
      }
}

  return missingLetter;
}

console.log(fearNotLetter("abcdefghjklmno"));

/* 
exercise 38
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  let finalArr = [];
  let argVals = Object.values(arguments).slice();

  let l = argVals.length;
  
  for(let i = 0; i < l; i++){
    let m = argVals[i].length;
    for(let j = 0; j < m; j++){
     if(!finalArr.includes(argVals[i][j])){
        finalArr.push(argVals[i][j])
     }
    }

  }

  return finalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//exercise 40
//From the HTML topic Entities;
// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


let characters = ['&','<','>','"', "'" ];

let entities = ['&amp;', '&lt', '&gt;', '&quot;', '&apos;'];
let c = characters.length;
let e = entities.length;
let regex = /\W+/
function convertHTML(str) {
  let newSecondStr;
 let secondStr = str.split('')
  //console.log( str[0])
 
 let s = secondStr.length;
 for(let i = 0; i < s; i++){
   let startIndex = secondStr.indexOf(secondStr[i])
   //console.log(startIndex)
   if(secondStr[i] === '&'){
     
    secondStr[i] = '&amp;';
   }else
    if(secondStr[i] === '<'){
      
    secondStr[i] = '&lt;'
   }else
    if(secondStr[i] === '>'){
      
    secondStr[i] = '&gt;';
   }else
    if(secondStr[i] === '"'){
      
    secondStr[i] = '&quot;'
   }else
    if(secondStr[i] === "'"){
      
    secondStr[i] = '&apos;'
   }
  
 }
newSecondStr = secondStr.join('');
  return newSecondStr;
}

convertHTML("Hamburgers  < Pizza < Tacos");

/* 
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
let fibNums = [1,1];
function sumFibs(num) {
let fibNumSum = 0;
for(let i = 1; i < num; i++){
   let prevFibNumber1 = fibNums.length - 1;
 let prevFibNumber2 = fibNums.length - 2;
 let nextFibNum = fibNums[prevFibNumber1] + fibNums[prevFibNumber2]
  if(nextFibNum <= num){
    fibNums.push(nextFibNum)
  };
  }
  for(let i = 0; i < fibNums.length; i++){
    if(fibNums[i] % 2 !== 0 ){
fibNumSum += fibNums[i]
    }
  }
  return fibNumSum;
}

sumFibs(4);

/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

///example 1
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);

/* 
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

//solution one
// Find the SCM of a range of numbers
function smallestCommons(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % prime) === 0) {
      factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}

smallestCommons([1, 5]);

//solution two
function smallestCommons(arr) {

  const [min, max] = arr.sort((a, b) => a - b);
  console.log(min, max)
  const numberDivisors = max - min + 1;
  console.log(numberDivisors)
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

/*
Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/

//solution 1
function dropElements(arr, func) {
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

//solution two
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

//solution one
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
steamrollArray([1, [2], [3, [[4]]]]);

//exercise two
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

/*

The String.fromCharCode() method converts Unicode values to characters.

The String.fromCharCode() is a static method of the String object.

The syntax is always String.fromCharCode().

You cannot use myString.fromCharCode()

Binary Agents
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
solution one explanation
First we use split() to be able to work on each character as an Array element
Then use map() to process each element from binary to decimal using pareseInt()
Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator 181

solution 2 explanation
Separate the string into an array of strings separated by whitespace.
Create some variables that you will use along the way - the names are self explanatory for the most part.
Iterate through each binary string in the new array.
Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
At the end, return the converted message.
*/

//solution one
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
//solution 2
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return console.log(uniString.join(""));
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/* 
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
*/

//solution one
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre])
 }
 
 truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
 //solution two
 function truthCheck(collection, pre) {
  let l = collection.length;
  for(let i = 0; i < l; i++){
  if(!collection[i][pre]){
   return false;
  }
  }
 
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


/* 
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:


*/

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

addTogether(2,3);


/* 
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

//solution one 
var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

/*
Map the Debris
According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

T= 2π * Math.sqrt(Math.pow(a, 3) / μ)
 
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

GM and earthRadius are both given to us.
To make the code easier to edit and read, each part of the equation is written separately.
Create newArr to store the orbPeriod's.
a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
c is (earthRadius + avgAlt) to the cube.
b is the square root of c divided by GM.
Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
Then we delete the key avgAlt, and add the new key and its value.

*/





function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

//Certification Exam 

/* 
question one 
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/
function palindrome(str) {
  let newResult = [];
let result = str.match(regex)
for(let i = 0; i < result.length; i++){
  newResult.push(result[i].toLowerCase());
}
return newResult.join('') === newResult.reverse().join('') ? 
  true : false;
}

palindrome("A man, a plan, a canal. Panama");


/* 
question two

Roman Numeral Converter
Convert the given number into a roman numeral

examples
While looking for something quick to do during a brief internet outage, I wrote some code to convert to and from Roman numerals. Once things were back up I searched for equivalent code, but only found stuff that was multiple pages long, limited the range of what it could convert, or both. I figured I might as well share what I came up with:
*/
function romanize (num) {
  if (!+num) return false;
  var digits = String(+num).split('');
  var key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
             '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
             '','I','II','III','IV','V','VI','VII','VIII','IX'];
  var roman = '', i = 3;
  while (i--) roman = (key[+digits.pop() + (i * 10)] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}

function deromanize (str) {
  var str = str.toUpperCase();
  var validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
  var token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
  var key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var num = 0, m;
  if (!(str && validator.test(str))) return false;
  while (m = token.exec(str)) num += key[m[0]];
  return num;
}

//answer
function convertToRoman(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
convertToRoman(36);


/*
JavaScript Algorithms and Data Structures
JavaScript Algorithms and Data Structures Projects
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

//encode cipher
function cesar(str, amount) {
  
  if (amount < 0)
    return cesar(str, amount + 26);
  
  // variable to store the result
  var res = '';
  // iterate over the string
  for (var i = 0; i < str.length; i++) {
    // Get the character that we are going to add
    var c = str[i];
    // Check if it's a letter
    if (c.match(/[a-z]/i)) {
      // Get the letter's code
      var code = str.charCodeAt(i);
      // Capital letters
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      // Lowercase letters
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    // Add the character
    res += c;
  }
  // Result
  return res;
};

console.log(cesar("ABCD", 10))

//decode ceaser cipher
let alphStart = 'abcdefghijklm'.toUpperCase();
let alphEnd = 'nopqrstuvwxyz'.toUpperCase()
function rot13(str) {
let decodedStr = '';
let startIndex;
let endIndex;

 for(let i = 0; i < str.length; i += 1){
  let letterToDecode = str[i];
 startIndex = alphStart.indexOf(letterToDecode);
endIndex = alphEnd.indexOf(letterToDecode);

  if(alphStart.indexOf(letterToDecode) >= 0){
    decodedStr += alphEnd[startIndex];
  }else if(alphEnd.indexOf(letterToDecode) >= 0){
 decodedStr += alphStart[endIndex]
  }else{
    decodedStr += letterToDecode;
  }
   

 }

  return decodedStr;
}

rot13("SERR CVMMN!");