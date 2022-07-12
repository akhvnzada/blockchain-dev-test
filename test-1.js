const sample = "smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

const vowels = ["a","e","i","o","u"]

function countVowel(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var vowels = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length && vowels < countVowel(str[i])) {
            longest = str[i].length;
            vowels = countVowel(str[i]);
            word = str[i];
        }
    }
    console.log(word);
}

longestWord(sample.replace(/[&\/\#,+()$~%.'":*?<>{}]/g,''))