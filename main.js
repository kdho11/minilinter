let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';


let words = story.split(' ');

console.log(words.length);

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


let betterWords = words.filter(function (word) {
    return !unnecessaryWords.includes(word)
  }
  );
  console.log(betterWords.length);

let really = 0;
let very = 0;
let basically = 0;

for (let i = 0; i < betterWords.length; i++) {
    for (let j = 0; j < overusedWords.length; j++) {
         if (betterWords[i] == overusedWords[j]) {
            if (j === 0) {
                really++;
            };
        if (j === 1) {
            very++
        };
        if (j === 2) {
            basically++;
        }
    }
}
};

console.log('Overused words appear ', really+very+basically, ' times.');
console.log('The word really appears ', really, ' times.');
console.log('The word very appears ',very, ' times.');
console.log('The word basically appears ',basically, ' times.');


let sentenceCount = 0;

for (let i = 0; i < betterWords.length; i++) {
    let word = betterWords[i];
    if (word.charAt(word.length-1) === '!' || word.charAt(word.length-1) === '.') {
        sentenceCount++;
    }
} 


console.log('There are ', sentenceCount, ' sentences.');

console.log(betterWords.join(' '));
