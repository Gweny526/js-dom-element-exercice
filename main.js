// 1
// ciblé la première div 
let firstDiv = document.getElementsByTagName('div')[0];
// ciblé le h3 de la première div
let firstH3 = firstDiv.getElementsByTagName("h3")[0].innerText;
console.log(firstH3);

// selection avec l'id
let divContent = document.getElementById('content')
console.log(divContent.firstElementChild);

// 2
let lastH3 = firstDiv.getElementsByTagName("h3")[1];
console.log(lastH3.innerText);
// par l'id
let titreNiv3 = document.getElementById('titreNiv3')
console.log(titreNiv3);
// 3
let prevEl = lastH3.previousElementSibling;
console.log(prevEl);
// correction
console.log(titreNiv3.previousElementSibling);

// 4

// aller au "p" avec l'id petitparagraphe
let ptitP = firstDiv.getElementsByTagName('p')[1]
console.log(ptitP);
// celui
let postP = ptitP.nextElementSibling;
console.log(postP);
// via la class
let petitP = document.getElementsByClassName('petitParagraphe')[0]
console.log(petitP.nextElementSibling);

// 5
let liImp = firstDiv.getElementsByClassName('.important');
console.log(liImp);
let parentLi = liImp.parentElement;
console.log(parentLi);
// via la class
let liImportant = document.getElementsByClassName('important')[0].parentElement
console.log(liImportant);

// 6
let listEl = firstDiv.getElementsByTagName('li')[0]
// first child
console.log(listEl);
// par Id
let listElements = document.getElementById('listElements').parentElement
console.log(listElements.firstElementChild);

// 7
let liImpLast = firstDiv.getElementsByClassName('important')[2]
console.log(liImpLast);
// correction
let listImpNext = document.getElementsByClassName('important')
let children = listImpNext[listImpNext.length-1].nextElementSibling;
console.log(children);

// 8
let textGeneral = document.getElementById('textGeneral')
console.log(textGeneral.nextElementSibling.nextElementSibling);

// 9
let footer = document.getElementById('footer');
let span = footer.getElementsByTagName('span')[0]
console.log(span);
let spanParent = span.parentElement
console.log(spanParent.nextElementSibling.firstElementChild);

// 10
let nicolas = document.getElementsByTagName('b')[2]
// ici on  nicolas
console.log(nicolas);
// ici on a primo via nicolas
console.log(nicolas.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);

// 11
let query = document.querySelector('.grandParagraphe')
console.log(query);

// 12
let liAll = document.querySelectorAll('li')
console.log(liAll);

liAll.forEach(el => {
    console.log(el.innerText);
})
let li_all_basic = document.getElementsByTagName('li')
console.log(li_all_basic);
// convertir en Array
// let convertArray = array.from(li_all_basic)
let convertArray = [...li_all_basic]
console.log(convertArray);

convertArray.forEach(el =>{
    console.log(el.textContent);
})
// mieux vaut utiliser .textContent que .innerText
