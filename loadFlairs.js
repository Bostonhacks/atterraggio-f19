let flairs, f;
let maxFlairs;
let ogCoords = {};

window.addEventListener("load", sizeFlairs, false);

window.addEventListener("resize", reSizeFlairs, false);

function sizeFlairs() {
    let docHeight = document.documentElement.offsetHeight;
    let docWidth = window.innerWidth;
    ogCoords.width = docWidth;
    ogCoords.height = docHeight;
    flairs = document.querySelector('.flairs');
    maxFlairs = flairs.childElementCount;
    flairs.style.height = docHeight + "px";
    let mainOffset = document.querySelector("main").offsetTop;
    let flairPlaces = document.querySelectorAll(".generateFlairsHere");
    for (flair of flairs.children) {
        let randHeight = flairPlaces[Math.floor(Math.random() * flairPlaces.length)].offsetTop + mainOffset;
        flair.classList = []; // make sure they are invisible
        let randWidth = Math.random() * docWidth - flair.offsetWidth;

        flair.style.left = randWidth + "px";
        flair.style.top = randHeight + "px";
        flair.style.opacity = "1";
    }
    
}
  
function reSizeFlairs(e) {
    let docWidth = window.innerWidth;
    if(docWidth!=ogCoords.width) {
        ogCoords.width = docWidth;
        sizeFlairs();
    }
    

}


// function elementInViewport(el) {
//     var height = el.offsetHeight;
//     // let coords = el.style.transform.split("(").pop().split(")")[0].split(", ");

//     let top = parseInt(el.style.top, 10);
//     while (el.offsetParent) {
//         el = el.offsetParent;
//         top += el.offsetTop;
//     }
//     return (top >= window.pageYOffset && (top + height) <= (window.pageYOffset + window.innerHeight));
// }