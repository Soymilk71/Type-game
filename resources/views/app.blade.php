<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style @reference="resources/css/app.css"></style>


    @vite(['resources/css/app.css', 'resources/js/app.js'])

<title>TypeGame</title>
</head>
    <body class="bg-primary text-textPrimary flex flex-col font-sans min-h-screen">
    <main>
        @yield('content')
    </main>

    <footer>

    </footer>
        
</body>
</html>