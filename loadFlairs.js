let flairs, f;
        let maxFlairs;
        window.addEventListener("load", sizeFlairs, false);
        window.addEventListener("resize", sizeFlairs, false);
        

        function sizeFlairs() {
            let docHeight = document.documentElement.offsetHeight;
            let bottomWaveHeight = document.querySelector(".bottomWave").offsetHeight;
            let maxHeight = docHeight - bottomWaveHeight;
            let docWidth = window.innerWidth;
            flairs = document.querySelector('.flairs');
            maxFlairs = flairs.childElementCount;
            flairs.style.height = docHeight + "px";
            for (flair of flairs.children) {
                flair.classList = []; // make sure they are invisible
                flair.style.transform = "translate3D(" + Math.random() * 1 + "px," + Math.random() * maxHeight + "px,0)";
            }
            window.addEventListener("scroll", checkAllFlairs, false);
            checkAllFlairs(); // check if they are already in the window
        }


        function checkAllFlairs() {
            // if (elementInViewport(flairs.children[0])) flairs.children[0].classList.add("fadeIn");
            for (flair of flairs.children) {
                if (flair.classList.length==0 && elementInViewport(flair)) {
                    flair.classList.add("fadeIn");
                    if (maxFlairs-- == 0) {
                        window.removeEventListener("scroll", checkAllFlairs, false);
                    }
                }
            }
        }

        function elementInViewport(el) {
            var height = el.offsetHeight;
            let coords = el.style.transform.split("(").pop().split(")")[0].split(", ");
            let top = parseInt(coords[1], 10);
            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
            }
            return (top >= window.pageYOffset && (top + height) <= (window.pageYOffset + window.innerHeight));
        }