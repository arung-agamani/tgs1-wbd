var screenHeight = window.innerHeight;

function getPageSectionFromPos() {
    var currentPos = window.scrollY;
    return Math.floor(currentPos/screenHeight);
}

function scrollBawah() {
    var destinationScrollPos = (getPageSectionFromPos() + 1) * screenHeight;
    window.scrollTo({ top: destinationScrollPos, behavior: "smooth"});
    globalPos = destinationScrollPos;
}

function scrollAtas() {
    var destinationScrollPos = (getPageSectionFromPos() - 1) * screenHeight;
    window.scrollTo({ top: destinationScrollPos, behavior: "smooth"});
    globalPos = destinationScrollPos;
}