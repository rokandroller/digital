<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="$ContentLocale"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" lang="$ContentLocale"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9" lang="$ContentLocale"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="$ContentLocale"> <!--<![endif]-->
    <head>

        <% base_tag %>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        $MetaTags(false)
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

        <link rel="shortcut icon" href="$ThemeDir/images/favicon.ico" />

<link rel="stylesheet" href="$ThemeDir/css/normalize.css" />
        <link rel="stylesheet" href="$ThemeDir/css/main.css" />


        <!-- HTML5 Shiv -->
        <!--[if lt IE 9]>
        <script src="$ThemeDir/javascript/html5shiv/html5shiv.js"></script>
                      <![endif]-->

        <!-- Adaptive-Images -->
        <script>document.cookie = 'resolution=' + Math.max(screen.width, screen.height) + ("devicePixelRatio" in window ? "," + devicePixelRatio : ",1") + '; path=/';</script>

    </head>
    <body>
        <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="loading-screen">
            <h3>Loading....</h3>
        </div>

        $Layout



        <script>window.jQuery || document.write('<script src="framework/thirdparty/jquery/jquery.js"><\/scr' + 'ipt>')</script>
        <script src="$ThemeDir/javascript/main.js"></script>

    </body>
</html>