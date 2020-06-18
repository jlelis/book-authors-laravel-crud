<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud com Laravel</title>
    <link rel="stylesheet" href="{{ asset('css/app.css')  }}">

</head>

<body>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
            </div>
        </nav>
        @yield('content')


        <footer class="footer text-center">
            <p>©Cadastros - autor de livros.</p>
        </footer>

    </div>
    <script src="{{asset('js/custom.js')}}"></script>
</body>

</html>