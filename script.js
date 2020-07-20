

const textarea = document.querySelector('#text')
const submitBtn = document.querySelector('#submit')
const result = document.querySelector('#result')
console.log(submitBtn.innerHTML);

submitBtn.addEventListener('click', stringLength)

let avgLength = 0;

function stringLength(text){
    text = textarea.value;
  
    //split the text into array of words
    const words = text.split(' ');
    
    words.forEach(function(word){
        //get the length of each word --> that's word.length
        const wordLength = word.length;
        //add them together and add it to avgLength
        avgLength += wordLength;
        //divide avgLength by the number of words
        
    })
    
    if(avgLength / words.length < 5){
        result.innerHTML = "Easy"
    }else if(avgLength / words.length > 5 && avgLength / words.length < 10){
        result.innerHTML = "Medium"
    }else if(avgLength / words.length > 10){
        result.innerHTML = "Advanced"
    }


}
