<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Laravel</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <div class="app-container w-screen">
            <div class="app-top">
                <header class="app-header container max-w-screen-xl mx-auto px-4">
                  @include('header')
                </header>
            </div>
            <div class="app-content py-8">
                <main class="app-main min-h-100 container max-w-screen-xl mx-auto px-4">
                    @yield('content')
                </main>
            </div>
            <div class="app-bottom">
                <footer class="app-footer px-4 container max-w-screen-xl mx-auto">
                     @include('footer')
                </footer>
            </div>
        </div>
    </body>
</html>