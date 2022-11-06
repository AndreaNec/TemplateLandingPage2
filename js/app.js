// mint preview


var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tlTop = new TimelineMax();
var tl3 = new TimelineMax();
var tlAbout = new TimelineMax();
var tlRoadmap = new TimelineMax({onUpdate:updatePercentage});
//info

//
//mint2

//
var tlBottom = new TimelineMax();
const controller = new ScrollMagic.Controller();

//mint preview image scaling
 tl.from('#mint1-img', 8, {scale: 1.3, x: -25, y: 75, rotationZ: .01}); //it scales the image

tl2.from('.mint-btn', 0.8, {height:"0vh"}) //it squishes the button to then get normal
/*top strips*/
tlTop.from(".stripe-top-anim", 0.8 ,{
    height:"0px",
    padding:"0",
    borderTopWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
    borderLeftWidth:0,
}, "=-1") //it squishes the stripes at the top
tlTop.from(".stripe-top-anim *", 0.8,{opacity:0 }, "=-0.5")

//stripe-before-about
tl3.from("#stripe-before-about", 0.8 ,{
    height:"0px",
    padding:"0",
    borderTopWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
    borderLeftWidth:0,
}, "=-1")
tl3.from("#stripe-before-about>*", 0.8,{
    opacity:0
    }, "=-0.5")

//squeeze about
tlAbout.from(".about",0.7,{height:0})
//fade in stripe elements
tlAbout.from(".stripe-element",1,{opacity:0})
//rotation of the signs
tlAbout.from(".strange-signs-comp", 1, {rotationY: 100}, "=-1")
//zoom-in of the circles
tlAbout.from(".circles",0.8,{"--radius":"10vw"}, "=-2")

//progress points
tlRoadmap.to(".roadmap-points", 1, {x:"-200%"}, "=-1")
//progress bar
tlRoadmap.to(".progress-bar", 1, {width:"100%"}, "=-1")
//zoo-in circles
tlRoadmap.from(".circles",1,{"--radius":"0vw"}, "=-1")

//info

//
//mint2

//
//stripes bottom
tlBottom.from(".stripe-bottom-anim", 0.8 ,{
    height:"0px",
    padding:"0",
    borderTopWidth:0,
    borderRightWidth:0,
    borderBottomWidth:0,
    borderLeftWidth:0,
}, "=-1") //it squishes the stripes at the top
tlBottom.from(".stripe-bottom-anim *", 0.8,{opacity:0 }, "=-0.5")

const scene = new ScrollMagic.Scene({
  triggerElement: "#mint1",
            triggerHook:"onLeave",
            duration: "100%"
})
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".mint-btn"
})
  .setTween(tl2)
		.addTo(controller);

const sceneTopTitle = new ScrollMagic.Scene({
    triggerElement:"#collectionTitle1",
            triggerHook:"onEnter",
})
    .setTween(tlTop)
        .addTo(controller)

const sceneStripeBeforeAbout = new ScrollMagic.Scene({
    triggerElement:"#stripe-before-about",
})
    .setTween(tl3)
        .addTo(controller)

const sceneAbout = new ScrollMagic.Scene({
    triggerElement:".about",
})
    .setTween(tlAbout)
        .addTo(controller)

const sceneRoadmap = new ScrollMagic.Scene({
    triggerElement: ".roadmap",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".roadmap")
    .setTween(tlRoadmap)
        .addTo(controller);

//info

//
//mint2

//

const sceneBottomTitle = new ScrollMagic.Scene({
    triggerElement:"#collectionTitle2",
            triggerHook:"onEnter",
})
    .setTween(tlBottom)
        .addTo(controller)

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}
