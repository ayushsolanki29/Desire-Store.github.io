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

let btn2 = document.querySelector('.btn2');
let clip2 = document.querySelector('.clip2');
let close2 = document.querySelector('.close2');
let video2 = document.querySelector('video2');
btn2.onclick = function(){
    btn2.classList.add('active');
    clip2.classList.add('active');
    iframe.play();
    iframe.currentTime=0;
}
close2.onclick = function(){
    btn2.classList.remove('active');
    clip2.classList.remove('active');
    iframe.pause()
}