// path

document.getElementById("path").setAttribute("d", "M2,5 S2,14 4,5 S7,8 8,4");

console.log(document.getElementById("path").getAttribute("d"));

const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");

const icon1Offset = offset(icon1);
const icon2Offset = offset(icon2);
const icon3Offset = offset(icon3);

/* const path1 = `M${Math.floor(icon1Offset.top)},${icon1Offset.left} S${
  icon2Offset.top - 30
},${icon2Offset.left - 30} ${icon2Offset.top},${icon2Offset.left} S${
  icon3Offset.top - 30
},${icon3Offset.left - 30} ${icon3Offset.top},${icon3Offset.left}`; */

const path1 = `M${Math.floor(icon1Offset.top)},${Math.floor(
  icon1Offset.left
)} S${Math.floor(icon2Offset.top)},${Math.floor(icon2Offset.left)} ${Math.floor(
  icon2Offset.top
)},${Math.floor(icon2Offset.left)}`;

document.getElementById("path").setAttribute("d", path1);

console.log(document.getElementById("path").getAttribute("d"));

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
