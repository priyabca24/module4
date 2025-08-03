(function () {
  var names = ["Creepy", "John", "Jess", "Juno", "Priya", "Farhan", "Lata", "Pooja", "Liam", "Javed"];

  for (var i = 0; i < names.length; i++) {
    var firstChar = names[i].charAt(0).toLowerCase();

    if (firstChar === 'j') {
      byeSpeaker.sayBye(names[i]); // Custom method name
    } else {
      helloSpeaker.sayHello(names[i]); // Custom method name
    }
  }

  console.log("All greetings done!");
})();
