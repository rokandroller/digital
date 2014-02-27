<div class="row" id="menu-container">
    <div class="main-menu">
        <div id="social">
            <a href="https://www.facebook.com/brandnationcomm" target="_blank"><img src="$ThemeDir/images/facebook-icon.png" alt="facebook icon"/></a>
            <a href="https://twitter.com/brandnationcomm" target="_blank"><img src="$ThemeDir/images/twitter-icon.png" alt="twitter icon"/></a>
            <a href="http://www.linkedin.com/company/brandnation" target="_blank"><img src="$ThemeDir/images/LinkedIn-icon.png" alt="Linkedin icon"/></a>
        </div>
        <ul>
            <% loop $Menu(1) %>
            <% if ClassName == Homepage %>
            <% else %>
            <li class="$LinkingMode"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a></li>
            <% end_if %>
            <% end_loop %>
            <div class="clear"><!-- --></div>
        </ul>


    </div>
    <div id="logo">
        <a href="/"><img src="$ThemeDir/images/brandnation-logo.png" alt="brandnation logo" class="img-responsive"/></a>

<!--        <div class="sub-title">
            <h1>DIGITAL</h1>

        </div>-->


    </div>



</div>