function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


const tl = gsap.timeline();

tl.to('.loader span',1,{height:0,stagger:0.2, delay:1,ease:'ease'}).
   from('.title h1', 1,{opacity:0,stagger:0.2,ease:'ease'}).
   fromTo('.title p', 1,{opacity:0,x:-100,stagger:0.1,ease:'ease'},{opacity:1,x:0}).
   fromTo('.title a', 1,{y:100,opacity:0,scale:0,stagger:0.1,ease:'ease'},{y:0,scale:1,opacity:1});