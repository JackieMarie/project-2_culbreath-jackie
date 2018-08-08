# Project 2 - carGO

#### Link to repository
[GitHub Link](https://github.com/JackieMarie/project-2_culbreath-jackie)

#### Link to website
[Website Link](http://www.justbelievedesigns.com/project-2_culbreath-jackie/)

#### Link to W3C's Validator
[W3C Validator Link: Index Page](https://validator.w3.org/nu/#file)
[W3C Validator Link: About Page](https://validator.w3.org/nu/#file)
[W3C Validator Link: Contact Page](https://validator.w3.org/nu/#file)
[W3C Validator Link: CSS stylesheet](http://jigsaw.w3.org/css-validator/validator): States that justify-self and align-self for CSS Grid is not valid properties, however these are valid properties.

#### Link to HTML5 Outliner
[HTML5 Outliner: Home Page](https://gsnedders.html5.org/outliner/process.py)
[HTML5 Outliner: About Page](https://gsnedders.html5.org/outliner/process.py)
[HTML5 Outliner: About Page](https://gsnedders.html5.org/outliner/process.py)

#### Instructions on how to view
1. `git clone` the repository to view it locally.
2. Use `sass --watch sass:css --style compressed` to get sass started.

---

#### Resources
- [Flexbox in CSS](https://cssreference.io/flexbox/): Reference material to use Flexbox.
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): Reviewed to have a better understanding of Flexbox.
- [CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o&t=1330s): Listened to this video to have a better understanding of CSS Grid and positioning items within a grid. Found it very helpful.
- [CSS Grid](https://codepen.io/createlyn/pen/bjLzdZ): Reviewed the CSS grid created during class to see and understand columns and rows in CSS Grid.
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/): Used as reference when needed.
- [Hamburger Menu](https://codepen.io/createlyn/pen/xJYmZx): Used the hamburger menu we developed in class for my site.
- Ducket, J. (2014). *JAVASCRIPT & JQUERY: interactive front-end web development.* Indianapolis, IN: John Wiley & Sons, Inc.: Used the book as reference to code jQuery event.
- [W3C Schools](https://www.w3schools.com/): Used this site to help me with my jQuery code.
- [W3C Schools](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll): Used this plus our JavaScript book to figure out how to smoothscroll to an element on my page and eliminate the smoothscroll plugin.
- [MDN web docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener): Used as a reference to create jQuery code.
- [jsfiddle.net](https://jsfiddle.net/) (used to test code)

##### Custom jQuery
- Created two jQuery events:
    -  Applied a scrollTop event for a smooth scroll effect to transition from a `Download Now` link in the `.main` section to the `.cta` (call-to-action) sections at the bottom of both the Home and About pages.
    -  Applied a click/mouseover and click/mouseout event on the `Download Now` button in the `.cta` section of both the Home and About pages. The event just causes the button to enlarge on click/mouseover and then return to normal on click/mouseout.

##### Custom JavaScript
- Used the JS Modal developed in class as my custom JavaScript. The modal was used for my `Sign In` link in my navigation on all pages.
- Used the disable button JavaScript developed during class to disable the submit button on my Contact page. I also incorporated the code Brittany shared during her presentation for changing the submit button back to disabled if you hit the reset button.

##### Plugin 1
- [Backstretch](http://www.jquery-backstretch.com/): Used this plugin for the background image of my entire Contact page. I also used it on images in a `.landing` section of both my Home and About pages.

##### Plugin 2
- [ScrollUp](https://markgoodyear.com/2013/01/scrollup-jquery-plugin/): This plugin was applied to all of my pages. As soon as a user starts to scroll down, a `scroll up` button appears in the lower, left corner.

#### Deductions
I reviewed the list of deductions for this project and in the syllabus.

#### Comments
I have learned so much this semester! My site may not be perfect, but I am very happy with it and all that I have accomplished. I hope to continue to improve my design, JavaScript and jQuery skills. This class helped me get much closer to my goals.

- [Commit Link to move images used with Backstretch plugin to my main.js file](https://github.com/JackieMarie/project-2_culbreath-jackie/commit/b6f2b23036282bb2d6962a028f6cd18ac3447754): This did not work and the images would not load at all in the `.landing` sections of my Home and About pages, nor as the background image of my Contact page. However, added the script and link to the image of my html page didn't seem to work either. So I left the links in the backstretch.min.js file.
