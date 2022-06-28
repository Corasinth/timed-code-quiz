# Timed Code Quiz

## Description 
A single page timed coding quiz, with penalties for wrong answers and a high score function stored in the browser. 

The high scores are displayed and sorted alphabetically, as well as being stored locally. There is no need to submit a score you do not wish to submit. 

A multi-page effect is produced by hiding certain elements until prompted by the user to appear. See [Usage](#usage) for more details.

The deployed application can be founde [here](https://corasinth.github.io/timed-code-quiz/).

## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Usage 


## Credits

The CSS reset used came from the blog [Piccalil](https://piccalil.li/blog/a-modern-css-reset/).

## [License](./LICENSE)
This website uses the open-source MIT License.

---

## Features

The code quiz is coded to allow additional questions to be added with ease. The format for a question page is simple to copy and paste, and replace with the questions and answers you wish. What pages are displayed are determined by a for loop so simply adding to the HTML is sufficient to add new questions.

Here is the basic structure of that for loop, written mostly in pseudocode:

```
  if (a button is clicked) {
        (iterate over the pageArray) {
        var currentIndex = pageArray[i];
        if (the current index has a display property of 'block) {
            set the current index's display to 'none' to move on to the next page
            if (the index is the last element of the array, and the button is clicked) {
                make the starting page visible by changing its display property to block
                and break the loop
        } otherwise if (the index has the user on the last question page) {
            stop the timer, set the score, move us on to the submission page for the score, 
            and break the loop
        } otherwise
            simply set the page at the index after the current index to be visible with the display property
            and break the loop
```

If one wishes to change the order of the questions, altering the order of the array ```pageArray``` is sufficient.

Additionally, one may only input letters as their initials. Other characters are forbidden.

Lastly, the scoring system is setup to equally weight a correct answer from a question and the time it takes to finish. Failing to finish the quiz before the time limit means no points for speed are assigned and the quiz ends. However, points are still awarded for correct answers. 

If additional questions are inserted, it is reccomended to alter this calculation to keep correct answers and speed equally weighted. 