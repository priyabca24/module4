
(function (window) {
  var helloSpeaker = {};

  var greeting = "Hey there";

  helloSpeaker.sayHello = function (name) {
    console.log(greeting + ", " + name + "!");
  };

  window.helloSpeaker = helloSpeaker;
})(window);
