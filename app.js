function pageLoadBodyEffect() {
    document.querySelector("body").style.opacity = 1;
    document.querySelector("body").style.transform = "translate(0,0)";
}
window.onload = pageLoadBodyEffect;

const loadingBar = document.getElementById('loading-bar');

function loadingBarProgress(){
    for (i=0; i<101; i++){
        loadingBar.style.width = (i + '%');
    }  
    // loadingBar.style.width = ('100%');
    console.log(loadingBar.style.width);
};

setInterval(function() {
    loadingBarProgress();
});

