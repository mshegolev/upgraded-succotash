let startSum = document.querySelector('.starter');
let month = document.querySelector('.month');
let count = document.querySelector('.count');
let message = document.querySelector('.message');
let result = '';
let actionCalculate = document.querySelector('.calculate');


actionCalculate.addEventListener('click', eventHandler);


function eventHandler() {
    if (document.querySelector('.answer')){
        document.querySelector('.answer').remove();
    };
    let resultParagraph = document.createElement('div');
    result = parseInt(startSum.value) + parseInt(startSum.value) * parseInt(count.value)/100 * parseInt(month.value);
    let textResult = `Через ${month.value} месяцев ваша итоговая сумма станет ${result} ₽`
    resultParagraph.className='answer';
    resultParagraph.innerHTML=textResult;
    var parentP = message.parentNode;
    parentP.insertBefore(resultParagraph, message.nextSibling);
}
