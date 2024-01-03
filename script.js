const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {

        gsap.to(playbtn, {
            scale: 1,
            opacity: 1

        })
    })
    videocon.addEventListener("mouseleave", function () {

        gsap.to(playbtn, {
            scale: 0,
            opacity: 0

        })
    })
    videocon.addEventListener("mousemove", function (dets) {

        gsap.to(playbtn, {
            x: dets.x - 70,
            y: dets.y - 10

        })
    })
}
videoconAnimation()

function h1textloadanimation() {
    gsap.from("#page1 h1", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2
    })
}
h1textloadanimation()

function videoanimation() {
    gsap.from("#page1 #video-container", {
        y: 30,
        opacity: 0,
        delay: 0.9,
        duration: 0.9,
        stagger: 0.2
    })
}
videoanimation()

function carousell(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            left:dets.x,
            top:dets.y
        })
    }) 
    
    document.querySelector("#child1").addEventListener("mouseenter" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1.5)'
    
        })
    })
    
    document.querySelector("#child1").addEventListener("mouseleave" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
    
        })
    })
    
    document.querySelector("#child2").addEventListener("mouseenter" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1.5)'
    
        })
    })
    
    document.querySelector("#child2").addEventListener("mouseleave" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
    
        })
    })
    
    document.querySelector("#child3").addEventListener("mouseenter" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1.5)'
    
        })
    })
    
    document.querySelector("#child3").addEventListener("mouseleave" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
    
        })
    })
    
    document.querySelector("#child4").addEventListener("mouseenter" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1.5)'
    
        })
    })
    
    document.querySelector("#child4").addEventListener("mouseleave" , function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
    
        })
    })
}

carousell()