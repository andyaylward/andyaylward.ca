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

const projects = ['response.gif','animal.gif', 'quiz.gif', 'snow.gif', 'kaizen.gif', 'MWU.gif', 'quotes.gif', 'lyrics.gif']; 
const heading = ['Responsively Changing Page','Animal Adoption Page', 'Canada Quiz', 'Fictional Winter Sporting Good Business', 'Kaizen Automotive Landing Page Re-Design', 'MindWell-U Landing Re-Design', 'Breaking Bad Quote Generator', 'Song Lyric Generator'];
const description = ['A site that completely changes at different width resizes','A responsive site made about a fictional animal adoption company.','A 5 question triva quiz about Canada. Gives you a percentage score at the end.', 'A site that was made using WordPress and WooCommerce plug-in. Based on a fictional local business that sells snowboard and ski equipment', 'A landing page re-design of a Calgary company called Kaizen Automotive. Modified car colors in Photoshop. Able to choose the cars color using JavaScript loop', 'Responsive website re-design for a Vancouver based company.','A page that cycles through several Breaking Bad quotes.', 'Can type in a song and artist to return the lyrics of the requested song. Song must be in Lyrics.ovh API in order to be succesfull'];
const link = ['https://site-dthlaossqm.now.sh/#','https://andy-aylward-cpnt-assignment-4-fpswjrnnoq.now.sh', 'https://canada-quiz-page-zvigvenqga.now.sh', 'http://35.247.63.134/','https://kaizen-automotive-wvulowodqa.now.sh/', 'https://andyaylward-mindwelluexercise2-htondefrpz.now.sh', 'https://breaking-bad-quote-machine-rifdvzhegq.now.sh', 'https://lyric-finder-izoozjfhzo.now.sh/'];

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

// FORM
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    document.getElementById('bootstrapForm').submit(function (event) {
        event.preventDefault();
        alert('Form Submitted. Thanks.');
        // var extraData = {}
        // document.getElementById('bootstrapForm').ajaxSubmit({
        //     data: extraData,
        //     dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        //     error: function () {
        //         // Submit of form should be successful but JSONP callback will fail because Google Forms
        //         // does not support it, so this is handled as a failure.
        //         alert('Form Submitted. Thanks.')
        //         // You can also redirect the user to a custom thank-you page:
        //         // window.location = 'http://www.mydomain.com/thankyoupage.html'
            // }
        // })
    })   
})
