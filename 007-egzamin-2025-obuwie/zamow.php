<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        Obuwie męskie
    </header>

    <main>
        <h2>Zamówienie</h2>
        <?php
        // skrypt 3
            $model = $_POST['model'];
            $rozmiar = $_POST['rozmiar'];
            $liczbaPar = $_POST['amount_of_pairs'];
            
            $query3 = "SELECT buty.nazwa, buty.cena, produkt.kolor, produkt.kod_produktu, produkt.material, produkt.nazwa_pliku FROM buty INNER JOIN produkt ON buty.model = produkt.model WHERE buty.model='$model';";

            $connection = mysqli_connect("localhost", "root", "", "obuwie_mm");

            $result = mysqli_query($connection, $query3);

            $row = mysqli_fetch_row($result);
            
            echo "<img src='$row[5]'>";

            echo "<h2> $row[0] </h2>";

            $finalnaCena = $liczbaPar * $row[1];
            echo "<p> cena za $liczbaPar par: $finalnaCena </p>";

            echo "<p>Sczegóły produktu: $row[2], $row[4] </p>";

            echo "<p>Rozmiar: $rozmiar </p>";
            
            mysqli_close($connection);
        ?>

        <a href="index.php">Strona główna</a>
    </main>

    <footer>
        <p>
            Autor strony: PESEL
        </p>
    </footer>
</body>
</html>