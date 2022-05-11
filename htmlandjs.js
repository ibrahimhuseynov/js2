const inputdiv = document.querySelector('.add');
const input = document.getElementById('inp');
const buton = document.getElementById('btn1');
const rimotediv = document.querySelector('.rimote ul ');
buton.addEventListener('click', go);
var count = 0;

function go() {
    if (input.value != "") {
        var paraqraf = document.createElement('li');
        count++;
        var delet = document.createElement('span');
        delet.innerText = 'X';
        paraqraf.innerText = count + " " + input.value;
        rimotediv.appendChild(paraqraf);
        input.value = "";
        delet.style.color = 'red';
        delet.style.cursor = 'pointer';
        delet.onclick = function() {
            paraqraf.remove();
        }
        paraqraf.appendChild(delet);
    }

}