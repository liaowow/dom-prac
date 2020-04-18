## Overview

This is the repo for practicing/refreshing my DOM manipulation skills after weeks of intensive crash courses on React.js and Vue.js.

Resource: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

## Exercises

1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code: Clicking on the button the font, font size, and color of the paragraph text will be changed.
```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>
```

2. Write a JavaScript function to get the values of First and Last name of the following form.
```html
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>
```

3. Write a JavaScript program to set the background color of a paragraph.