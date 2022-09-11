'use strict';

/* 🥚 Hovering Previews

  practice previewing expressions at different steps of execution
  - variables: hover without highlighting
  - expressions: highlight and hover

  pause this program each time it reaches the `while` check (breakpoint!):
  - highlighting one portion of the `while` check expression
  - hover your mouse over it to see the value
  - check the scopes panel to understand how the value was calculated

*/

let didClickOk = confirm('please click "ok":');

let message = '';

// try previewing the value of this conditional check:
// 1. hover over `didClickOk` to see it's value
// |----------|
// 2. highlight the entire expression and hover over it
// |-------------------|
if (didClickOk === true) {
  message = 'thank you!';
} else {
  message = ':(';
}

alert(message);
