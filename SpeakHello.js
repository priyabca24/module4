// (Hello) speaker object in a private scope
(function (global) {
  const greetingSpeaker = {};

  const helloMsg = "Hey there";

  greetingSpeaker.sayHi = function (personName) {
    console.log(helloMsg + " " + personName);
  };

  // Expose it globally
  global.greetingSpeaker = greetingSpeaker;
})(window);
