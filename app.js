// Page Load
function pageLoadBodyEffect() {
    document.querySelector("body").style.opacity = 1;
    document.querySelector("body").style.transform = "translate(0,0)";
}
window.onload = pageLoadBodyEffect;

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
    projectLink.href = links[currentProject];
})

previous.addEventListener('click', function(){
    currentProject -= 1;
    
    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
    projectHeading.innerHTML = heading[currentProject];
    projectInfo.innerHTML = description[currentProject];
    projectLink.href = links[currentProject];
})