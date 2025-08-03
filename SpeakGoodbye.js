// (Goodbye) speaker object in a private scope
(function (global) {
  const farewellSpeaker = {};

  const byeMsg = "Later";

  farewellSpeaker.sayBye = function (personName) {
    console.log(byeMsg + " " + personName);
  };

  // Attach it to the window so other files can use it
  global.farewellSpeaker = farewellSpeaker;
})(window);
