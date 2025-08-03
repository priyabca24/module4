// Wrapped everything in an IIFE so no leaks 🌊
(function () {
  const listOfNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop through each name and decide how to greet
  for (let i = 0; i < listOfNames.length; i++) {
    const currentName = listOfNames[i];
    const firstChar = currentName.charAt(0).toLowerCase();

    // If the name starts with 'j', say goodbye — else hello
    if (firstChar === 'j') {
      farewellSpeaker.sayBye(currentName);
    } else {
      greetingSpeaker.sayHi(currentName);
    }
  }
})();
