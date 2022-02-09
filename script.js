"use strict";

let resultValue;

const passwordHidden = "*";

const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const hyphenPos = input.value.indexOf("-");
const spacePos = input.value.indexOf(" ");
const strArr = input.value.split("");

document.addEventListener("DOMContentLoaded", start);

function start() {
  submit.addEventListener("click", clickSubmit);
  console.log("test");
}

function clickSubmit() {
  console.log("clicked");

  //in options we choose which information we would like from the name
  options = document.querySelector("#options").value;

  if (options === "fname") {
    // first letter is upperCase, the rest is LowerCase
    resultValue =
      input.value.charAt(0).toUpperCase() +
      input.value.substring(1).toLowerCase();
  } else if (options === "findfname") {
    //find firstname. We do this with spacing - the first name starts at 0 and ends at the first spacing.
    resultValue = input.value.substring(
      input.value.indexOf(0),
      input.value.indexOf(" ")
    );
  } else if (options === "findlengthfname") {
    //to find length we use .length

    resultValue = input.value.substring(
      input.value.indexOf(0),
      input.value.indexOf(" ")
    ).length;
  } else if (options === "findmnamestartend") {
    //like in find first name, we use spacing to find our middlename.
    resultValue = input.value.substring(
      input.value.indexOf(" ") + 1,
      input.value.lastIndexOf(" ")
    );
  } else if (options === "filename") {
    //check if input value endswith .jpg OR if input value ends with .png
    resultValue = input.value.endsWith(".jpg") || input.value.endsWith(".png");
  } else if (options === "password") {
    //use repeat() to create new string which contains the specified number of copies of the string on which it was called
    //make const passwordHidden so we can copy value of input to number of stars in output

    resultValue = passwordHidden.repeat(input.value.length);
  } else if (options === "thirdcharuppercase") {
    //we have to divide our input name so we start with lowercase on the beginning of the word, uppercase in the middle and then again lowercase at the end
    resultValue =
      input.value.substring(0, 2).toLowerCase() +
      input.value.charAt(2).toUpperCase() +
      input.value.substring(3).toLowerCase();
  } else if (options === "spacehyphonuppercase") {
    //first make const that shows hyphen and space
    //const hyphenPos = input.value.indexOf("-");
    //const spacePos = input.value.indexOf(" ");
    //resultValue = input.value.charAt(hyphonPos + 1).toUpperCase();
    /*   resultValue =
      input.value.substring(0, hyphenPos) +
      input.value.substring(hyphenPos, hyphenPos + 2).toUpperCase() +
      input.value.substring(hyphenPos + 2);
  }
 */

    strArr.map((char, i, arr) => {
      console.log("I", arr[i]);
      if (" -".includes(arr[i - 1])) {
        console.log("UPPER", char);
        return char.toUpperCase();
      } else {
        return char;
      }
    });

    resultValue = strArr.join("");
  }
  //få resultaterne til at stå i output
  output.value = resultValue;
}
