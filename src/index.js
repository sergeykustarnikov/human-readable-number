module.exports = function toReadable (number) {
    let numberValue = number;
    let numeral = numberValue % 10;           
    numberValue = (numberValue - numeral) / 10;      
    let ten = numberValue % 10;
    numberValue = (numberValue - ten) / 10;         
    let hundred = numberValue % 10; 
    numberValue = (numberValue - hundred) / 10;       
    
    let numeralArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teenArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let hundredText; 
    if (hundred !== 0) {
        hundredText = `${numeralArray[hundred]} hundred`;
    } else {
        hundredText = '';
    }       
    
    let tenText;
    if (ten === 1) {
        tenText = teenArray[numeral];
    } else if (ten !== 0 && ten !== 1) {
        tenText = tenArray[ten];
    } else if (ten === 0){
        tenText = '';
    }

    let numeralText;
    if (ten === 1 || (hundred !== 0 || ten !== 0) &&  numeral === 0) {
        numeralText = '';
    } else if ((hundred !== 0 || ten !== 0 && ten !== 1) && numeral !== 0 || (hundred == 0 || ten == 0) && (numeral === 0 || numeral !== 0))  {
        numeralText = numeralArray[numeral];
    } 

    let resultArray = [hundredText, tenText, numeralText];
    return resultArray.filter(element => element !== '').join(' ');
}

