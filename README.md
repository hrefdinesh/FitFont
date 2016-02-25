# Fit the Text
Depending upon the height and width font size will occupy the space.

## How it works
Here is a simple FitFont setup:

### Include Js
```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/fitfont.js"></script>
```
### Initialization of Js
```
<script type="text/javascript">
$( document ).ready(function() {
	$(".fitFont").fitFont();
});
```
</script>

### Example HTML 
```
<div class="container">    	
	<h2>With Font Fit js</h2>
	<div class="fitFont">This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div.
	</div>

	<br>

	<h2>With-Out Font Fit js</h2>
	
	<div class="no-fitFont">This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and wont go out of the div. This text will be resized and.This text will be resized and wont go out of the div. This text will be resized and wont go out of the div.
	</div>
</div>
```

### CSS
```
div.container{
	padding: 20px;
	max-width: 1000px;
	margin: 0 auto;
}
.no-fitFont, .fitFont {
    width: 100%;
    height: 160px;
    margin: 0 auto;
    border: 1px solid #000;
    color: #000;
    font-size: 15px;
}
.fitFont {
	width: auto;
}
```
![fitfontexample](https://cloud.githubusercontent.com/assets/6204128/13326532/55ab0f3e-dc0c-11e5-8d2b-8d3607e9f6b2.jpg)
