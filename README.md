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
<p id='text'>JavaScript Exercises - w3resource</p> 
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

4. Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
```html
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
</head>
<body>
<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
<button onclick="getAttributes()">Click here to get attributes value</button>
</body></html>
```

5. Write a JavaScript function to add rows to a table.
```html
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Insert row in a table - w3resource</title>
</head><body>
<table id="sampleTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
</table><br>
<input type="button" onclick="insert_Row()" value="Insert row"> 
</body></html>
```

6. Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
```html
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Change the content of a cell</title>
</head><body>
<table id="myTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
<tr><td>Row3 cell1</td>
<td>Row3 cell2</td></tr>
</table><form>
<input type="button" onclick="changeContent()" value="Change content">
</form></body></html>
```

7. Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.
```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Change the content of a cell</title>
<style type="text/css">
body {margin: 30px;}
</style>  
</head><body>
<table id="myTable" border="1">
</table><form>
<input type="button" onclick="createTable()" value="Create the table">
</form></body></html>
```

8. Write a JavaScript program to remove items from a dropdown list.
```html
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Remove items from a dropdown list</title>
</head><body><form>
<select id="colorSelect">
<option>Red</option>
<option>Green</option>
<option>White</option>
<option>Black</option>
</select>
<input type="button" onclick="removecolor()" value="Select and Remove">
</form></body></html>
```