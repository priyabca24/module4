// STEP 6: Wrap in an IIFE
(function (window) {

  // STEP 7: Create the object
  var byeSpeaker = {};

  // DO NOT attach the speakWord to byeSpeaker
  var speakWord = "Good Bye";

  // STEP 8: Attach speak function to byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);