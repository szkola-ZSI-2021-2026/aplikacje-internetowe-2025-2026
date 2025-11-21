<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    
    <header>
        <h1>Ozdoby - Sklep</h1>
    </header>
    
    <aside id="left">
        <h2>Ozdoby</h2>

        <a href="galeria.html">Galeria</a>
        <br>
        <a href="zamowienie.php">Zamówienie</a>
    </aside>

    <main>
        <img src="animacja.gif">
    </main>

    <aside id="right">
        <p>Dodaj uźytkownika</p>

        <form action="zamowienie.php" method="post">
            <label for="imie">Imię:</label>
            <input type="text" name="imie" id="imie">
            <br>
            <label for="nazwisko">Nazwisko:</label>
            <input type="text" name="nazwisko" id="nazwisko">
            <br>
            <label for="e-mail">e-mail:</label>
            <input type="email" name="e-mail" id="e-mail" value='ryszard.poczta.pl'>
        
            <input type="submit" value="WYŚLIJ">
        </form>
    </aside>

    <footer>
        <h3>Autor strony: PESEL</h3>
    </footer>

</body>
</html>