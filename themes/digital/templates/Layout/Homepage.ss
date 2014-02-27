 <% include Navigation %>
<% loop getRandomMainImage %>
<div data-url="$MainImage.URL" class="backgroundimg"></div>
<div class="container"> 

   

    <div id="case-details">
        <a href="$Link">
            <h2>$Title</h2>
            <h3>$SubTitle</h3>
        </a>
    </div>

    <% end_loop %>
    <script src="$ThemeDir/javascript/HomePage.js"></script>
</div>    
