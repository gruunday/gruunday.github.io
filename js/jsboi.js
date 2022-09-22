
var leftItem = document.getElementById('art1');

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  
  leftItem.style.transform = "translate(" + ((window.pageYOffset - 50)*2) + "px, " + (window.pageXOffset + 400) +"px) rotateX(-25deg) rotateY(45deg)";
  //leftItem.style.transform = "rotate(-" + window.pageYOffset + "deg)";
})
