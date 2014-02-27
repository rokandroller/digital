<link rel="stylesheet" href="$ThemeDir/css/DunlopCS.css" />

<div data-url="$MainImage.URL" class="backgroundimg">
    <div class="logocontainer">
        <img src="$ThemeDir/images/DunlopCS/dunlop-logo.png" alt="Dunlop logo"/>
    </div>
    <div class="downarrow">
        <a href="#">
            <img src="$ThemeDir/images/downarrow.png" alt="down arrow"/>
        </a>
    </div>
</div>

<nav><% include NavigationBlack %></nav>
<div id="slide1">
    <div data-url="/assets/main/guess-girl.jpg" class="backgroundimg">
        <div class="container">            
            <div class="firstcontent">$Content</div>

            
        </div>
    </div>
</div>
<div id="slide2" style="background-image: url(/$ThemeDir/images/GuessCS/leatherBG.jpg) ">
    <div class="container">
        <div class="Content1">$Content1</div>
        
       

    </div>
</div>
<div id="slide3" style="background-image: url(/$ThemeDir/images/GuessCS/leatherBG.jpg)">
    <div class="container">
        <div class="Content2">$Content2</div>
     
    </div>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/plugins/ScrollToPlugin.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/TweenMax.min.js"></script>
    <script src="$ThemeDir/javascript/DunlopCS.js"></script>