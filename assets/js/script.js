// AUXILLIARY VARIABLES
let d = (e) => document.querySelector(e);
let da = (e) => document.querySelectorAll(e);

// VARIABLES
let actualCharBg = d('.banner');
let actualCharName = d('.infoArea h1');
let actualCharinfo = d('.infoArea p');


// EVENTS
da('.choiceArea').forEach(item => {
    item.addEventListener('click', updateChar)
})

// FUNCTIONS

function updateChar (e) {
    let char = e.currentTarget;
    let charId = char.getAttribute('data-key');

    actualCharBg.style.backgroundImage = `${charInfo[charId].bgImg}`;
    actualCharName.innerHTML = `${charInfo[charId].name}`
    actualCharinfo.innerHTML = `${charInfo[charId].info}`;
}