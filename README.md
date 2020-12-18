# my-day-scheduler

![Screen Shot 2020-12-17 at 5 04 51 PM (2)](https://user-images.githubusercontent.com/74025123/102561711-427bb480-408a-11eb-8469-fc71b4e94c9b.png)

Deployment Link: https://khsieh95.github.io/my-day-scheduler/

This scheduler was made to display what needs to be done at what time of the day. Green blocks state what need to be done in the future, red blocks display the present time, and grey displays the past. The date at the top is set to update with the current date in real time, and the save button to the right will store the text locally.

## Javascript

- Started off by using moment.js to display an updated date
- Set global variables for textareas and other elements to be referenced later
- Created function on textAreas that would apply CSS styling to rows depending on the time. Ran with multiple IF statements. A TA helped me with this as I didn't realize that moment.js was a 24 hour clock by default.
- Built a click function for save buttons and to locally store input along with the ID associated to that time.
- For loop runs to make sure each button act individually (local storage was overwriting itself prior to this step)

## CSS

- Changed font coloring of text to display more clearly

## HTML

- Given the starter code of CSS and HTML, I adjusted labels and classes to match that of the CSS, so that the rows and blocks would be displayed.
