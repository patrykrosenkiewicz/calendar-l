<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Calendar</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">

    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    <a href="{{ url('/calendar') }}">calendar</a>
                    @auth
                         <a href="{{ url('/logout') }}">Logout</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Calendar
                </div>

                <div class="links">
                    <a href="https://www.instagram.com/patrosenkiewicz" target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/pat.rosenkiewicz" target="_blank">Facebook</a>
                    <a href="#">Blog</a>
                    <a href="https://github.com/patrykrosenkiewicz" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    </body>
</html>
