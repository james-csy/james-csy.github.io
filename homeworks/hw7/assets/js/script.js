function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return Math.floor(average);
}


function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

x = getRandomNum(20);
y = getRandomNum(10);
z = getRandomNum(13);
avg = averageThreeNumbers(x, y, z);
sentence = createSentence(avg, "monkey");
console.log(sentence);