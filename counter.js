// Buttons Selection 
document.querySelector('.decrease').addEventListener('click', de);
document.querySelector('.increase').addEventListener('click', inc);
document.querySelector('.reset').addEventListener('click', re);

// Decrease Function 
function de () {
  document.querySelector('p').innerHTML--;
  document.querySelector('p').style.color = "rgba(153, 56, 72, 0.671)";
}

// Increase Function  
function inc () {
  document.querySelector('p').innerHTML++;
  document.querySelector('p').style.color = "rgba(81, 81, 216, 0.568)";
}

// Reset Function 
function re () {
  document.querySelector('p').innerHTML = 0;
  document.querySelector('p').style.color = "#222";
}

// Color Changes
// When Increased  
if (count > 0) {
  value.style.color = "rgba(81, 81, 216, 0.568)";
}

// When Reduced 
if (count < 0) {
  value.style.color = "rgba(153, 56, 72, 0.671)";
}

// When Reset 
if (count === 0) {
  value.style.color = "#222";
}

// To output to HTML 
value.innerHTML = count;