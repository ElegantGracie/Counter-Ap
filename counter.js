document.querySelector('.decrease').addEventListener('click', de);
document.querySelector('.increase').addEventListener('click', inc);
document.querySelector('.reset').addEventListener('click', re);

function de () {
    document.querySelector('p').innerHTML--;
    document.querySelector('p').style.color = "rgba(153, 56, 72, 0.671)";
}

function inc () {
    document.querySelector('p').innerHTML++;
    document.querySelector('p').style.color = "rgba(81, 81, 216, 0.568)";
}

function re () {
    document.querySelector('p').innerHTML = 0;
    document.querySelector('p').style.color = "#222";
}

    if (count > 0) {
      value.style.color = "rgba(81, 81, 216, 0.568)";
    }
    if (count < 0) {
      value.style.color = "rgba(153, 56, 72, 0.671)";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.innerHTML = count;