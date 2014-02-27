<link rel="stylesheet" href="$ThemeDir/css/Grid.css" />


<% include NavigationBlack %>

<% loop $Children %>

<a href="$Link">
    <div class="ninegrid" data-url="$MainImage.URL" id="ninegridimg">

        <div class="gridtitleauter">
            <div class="trianglewrap">
                <div class="triangle"></div>
            </div>
            <div class="gridtitle">$Title 
                <div class="gridsubTitle"><br/> $SubTitle</div>
            </div>

        </div>
    </div>
</a>

<% end_loop %>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/plugins/ScrollToPlugin.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/TweenMax.min.js"></script>

<script src="$ThemeDir/javascript/Grid.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.2/TweenMax.min.js"></script>