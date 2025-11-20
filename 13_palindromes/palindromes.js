function palindromes(str) {
    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedStr = str.toLowerCase().split('').filter(character => alphaNumeric.includes(character)).join('');

    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
