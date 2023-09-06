function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x +20+"px"
  crsr.style.top = dets.y +20+ "px"
  // var v = document.querySelectorAll("video");
  // video.forEach(function(v){
  //    v.addEventListener("mouseenter",function(){
  //     crsr.style.width="70px"
  //     crsr.style.height="10px"
  //     crsr.style.borderRadius = "0"
  //     crsr.style.muted = "false"
  //    })
  // })
})


// var video = document.getElementById("#myVideo");
// video.addEventListener("mousemove", function(){
//   crsr.style.text = "sound-on" + "px"
//   video.autoplay('')
// })
gsap.from(".page1 h1,.page1 h2",{
    y:10,
    rotate: 10,
    opacity: 10,
    delay: 0.3,
    duration: 0.7
})

var tl = gsap.timeline({
  duration: 2,
    ScrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    }
})
tl.to(".page1 h2",{
    x : -100,
   })
tl.to(".page1 h1",{
    x : 100,
    })
tl.to(".page1 video",{
  width: "80%",
})

var tl2 = gsap.timeline({
    ScrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        //markers: true,
        start: "top -127%",
        end: "top -130%",
        scrub: 3,
    }
})
tl2.to(".main",{
  backgroundColor: "black",
})
var tl3 = gsap.timeline({
  ScrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      //markers: true,
      start: "top -280%",
      end: "top -300%",
      scrub: 3,
  }
})
tl3.to(".main",{
  backgroundColor: "#0f0d0d"
})
var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("box-img")
    crsr.style.width = "300px"
    crsr.style.height = "250px"
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`
 })

   elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor = "transparent"
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none` 
   })
})

var h4 = document.querySelectorAll("#nav-part2 h4")
var purple = document.querySelector("#purple")
  h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      purple.style.display = "block"
      purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
      purple.style.display = "none"
      purple.style.opacity = "0"
    })
    
  })


