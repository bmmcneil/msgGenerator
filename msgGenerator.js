/* we will need an array of syllables for warcries. For instance, ['AA', 'GH', 'JOU, ... etc]. 
We will also need a way to randomize a number between 3 and 10, to determine how many syllables we should pull from this list. 
After determining the number of iterations, we'll randomly pull that many syllables and return a unique warcry for the user. */

//Array of unique syllabes;

syllableArr = ['AA', 'AGH', 'OO', 'NEEH', 'II', 'EE', 'HOUU', 'HUUUB', 'JOOOK', 'KAAAH', 'ROO', ' *deep breath* ', 'FUUS', 'ROUH', 'DAAH', 'HAA','WIN', 'DOOO','DUUUH', 'BEE', 'WUN', 'UU', 'OO', 'HUUN', 'GOON', 'SUUUH', 'MUUH', 'MAAH', 'MEEH', 'RAG', 'NAR', 'OK', ' *gulp* '];

/* Function below is to generator a random number within a desired range; a single syllable would not suffice--
the function is flexible in case we'd like to change the range at any time */

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

let warCry = '';
let counter = 0;
function createWarCry(){
    while (counter < randomNumber(2, 5)){
        warCry += syllableArr[Math.floor(Math.random() * syllableArr.length)];
        counter++
    }
    return warCry;
}

console.log(createWarCry());



