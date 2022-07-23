let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
btn.onclick = function(){
    btn.classList.add('active');
    clip.classList.add('active');
    iframe.play();
    iframe.currentTime=0;
}
close.onclick = function(){
    btn.classList.remove('active');
    clip.classList.remove('active');
    iframe.pause()
}

