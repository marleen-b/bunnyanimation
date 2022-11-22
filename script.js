var buttonSaxofoon = document.getElementById('button_saxofoon');
var buttonGitaar = document.getElementById('button_gitaar');
var buttonViool = document.getElementById('button_viool');
var video = document.getElementById('video');


buttonSaxofoon.addEventListener('click', speelSaxofoon);
buttonGitaar.addEventListener('click', speelGitaar);
buttonViool.addEventListener('click', speelViool);

function speelSaxofoon() {
    video.src = "img/videos/FINAL_comp_blij.mp4";
    console.log('blij konijn');
}

function speelGitaar() {
    video.src = "img/videos/FINAL_comp_boos.mp4";
    console.log('boos konijn');
}

function speelViool() {
    video.src = "img/videos/FINAL_comp_verdrietig.mp4";
    console.log('verdrietig konijn');
}