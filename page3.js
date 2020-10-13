function ageInDay()
{
var birthYear = prompt('What year were you born.... Friend ?'); 
var dayInYear = (2020 - birthYear) * 365;
var h5 = document.createElement('h5');
var textAnswer = document.createTextNode('You age ' + dayInYear + ' days')
h5.setAttribute('id', 'ageInDay')
h5.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h5);
}

