// STEP 2: Wrap in an IIFE
(function (window) {

  // STEP 3: Create the object
  var helloSpeaker = {};

  // DO NOT attach the speakWord to helloSpeaker
  var speakWord = "Hello";

  // STEP 4: Attach speak function to helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);