// Page Load
function pageLoadBodyEffect() {
    document.querySelector("body").style.opacity = 1;
    document.querySelector("body").style.transform = "translate(0,0)";
}
window.onload = pageLoadBodyEffect;

// About Image
const aboutImgList = ["https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2daae6fa88d0422996cb571d9e41681e&auto=format&fit=crop&w=675&q=80", "https://images.unsplash.com/photo-1542979666-0d943dd97b2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cbc560177a228210b6cae2fcb166233&auto=format&fit=crop&w=1267&q=80", "https://images.unsplash.com/photo-1542690969-8b36d56ca4e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e37508e6b0a3dd9b27b113e2e4b9231&auto=format&fit=crop&w=1350&q=80"]
const aboutImg = document.getElementById('about-img');
var currentImg = 0;

setInterval(function(){
    currentImg += 1;
    console.log(currentImg);
    if (currentImg > aboutImgList.length - 1) {
        currentImg = 0;
    }
    aboutImg.style.backgroundImage = "url('" + aboutImgList[currentImg] + "')";
},4000)

// Project Gallery
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const projectGallery = document.getElementById('project-gallery');
const projectHeading = document.getElementById('projectHeading');
const projectInfo = document.getElementById('projectInfo');
const projectLink = document.getElementById('projectLink');

const projects = ['animal.gif', 'quiz.gif', 'MWU.gif', 'quotes.gif']; 
const heading = ['Animal Adoption Page', 'Canada Quiz', 'Responsive Page Design', 'Breaking Bad Quote Generator'];
const description = ['A responsive site made about a fictional animal adoption company.','A 5 question triva quiz about Canada. Gives you a percentage score at the end.','Responsive website re-design for a Vancouver based company.','A page that cycles through several Breaking Bad quotes.'];
const link = ['https://andy-aylward-cpnt-assignment-4-fpswjrnnoq.now.sh', 'https://canada-quiz-page-zvigvenqga.now.sh', 'https://andyaylward-mindwelluexercise2-htondefrpz.now.sh', 'https://breaking-bad-quote-machine-rifdvzhegq.now.sh'];

var currentProject = 0;

projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
projectHeading.innerHTML = heading[currentProject];
projectInfo.innerHTML = description[currentProject];
projectLink.href = link[currentProject];

next.addEventListener('click', function(){
    currentProject += 1;

    if (currentProject > projects.length - 1) {
        currentProject = 0;
    }

    projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
    projectHeading.innerHTML = heading[currentProject];
    projectInfo.innerHTML = description[currentProject];
    projectLink.href = link[currentProject];
})

previous.addEventListener('click', function(){
    currentProject -= 1;
    
    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
    projectHeading.innerHTML = heading[currentProject];
    projectInfo.innerHTML = description[currentProject];
    projectLink.href = link[currentProject];
})

