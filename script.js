// {
//   let name = prompt("What is your name?");
//   let greetingMessage = "Hello, " + name;
//   alert(greetingMessage);
// }
// {
//   let enterString = prompt("Enter string");
//   const arr = enterString.split(",");
//   let StringWithWord = arr.join(" , блін ,");
//   console.log(StringWithWord);
// }
// {
//   let str = prompt("enter string");
//   let result = str.charAt(0).toUpperCase() + str.slice(1);
//   console.log(result);
// }
// {
//   let sentence = prompt("Enter string:");
//   let ArrWords = sentence.split(" ");
//   let CountWords = ArrWords.length;
//   alert(`result: ${CountWords}`);
// }

// {
//   let surname = prompt("Введіть прізвище");
//   let name = prompt("Введіть ім'я");
//   let firstName = prompt("Введіть по батькові");

//   surname = surname.trim();
//   name = name.trim();
//   firstName = firstName.trim();

//   surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
//   name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   firstName =
//     firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

//   let joinWords = surname + " " + name + " " + firstName;

//   alert(joinWords);
// }
// {
//   let str = "Було жарко. Василь пив пиво вприкуску з креветками";
//   let arryOfWords = str.split();
// }

// {
//   let str = "Було жарко. Василь пив пиво вприкуску з креветками";
//   let result = str.split(`пиво`).join(`чай`);

//   console.log(result); //"Було жарко. Василь пив чай уприкуску з креветками"
// }

// {
//   let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
//   let wordToRemove = " <br />";
//   let startIndex = str.indexOf(wordToRemove);
//   let endIndex = startIndex + wordToRemove.length - 1;
//   let result = str.slice(0, startIndex) + str.slice(endIndex + 1);
//   let newWord = "</p>";
//   let newWord2 = str.slice(0, startIndex) + newWord + str.slice(endIndex + 1);
//   console.log(newWord2); //якийсь текст, в якому є один тег і всяке інше
// }

// {
//   let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
//   let wordToRemove = " <br />";
//   let startIndex = str.indexOf(wordToRemove);
//   let endIndex = startIndex + wordToRemove.length - 1;
//   let result = str.slice(0, startIndex) + str.slice(endIndex + 1);
//   let newWord = "</br>";
//   let toUpperCase = newWord.toUpperCase("</br>");
//   let newWord2 =
//     str.slice(0, startIndex) + toUpperCase + str.slice(endIndex + 1);
//   console.log(newWord2);
// }

// {
//   let userInput = prompt(
//     "Введіть рядок з можливістю використання \\n як маркер нового рядка:"
//   );

//   userInput = userInput.split("\\n").join("\n");
//   console.log("Ваш багаторядковий рядок:");
//   console.log(userInput);
// }

// let userInput = prompt("Введіть текст з посиланням на YouTube:");

// const youtubeRegExp =
//   /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
// let found = userInput.match(youtubeRegExp);
// let videoId = found[1];

// let fullvideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
// document.write(fullvideo);
// alert(fullvideo);
