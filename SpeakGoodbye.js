(function (window) {
  var byeSpeaker = {};

  var farewell = "See ya";

  byeSpeaker.sayBye = function (name) {
    console.log(farewell + ", " + name + "!");
  };

  window.byeSpeaker = byeSpeaker;
})(window);
