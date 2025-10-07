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
        <form action="zamow.php" method="post">
            <label for="model">Model: </label>
            <select name="model" id="model">
                <!-- <option value="test">test</option> -->
                <?php
                // skrypt 1
                    $connection = mysqli_connect("localhost", "root", "", "obuwie_mm");
                
                    $query1 = "SELECT model FROM produkt;";

                    $result1 = mysqli_query($connection, $query1);

                    while ($row = mysqli_fetch_row($result1)) {
                        echo "<option value='$row[0]'>";
                        echo "$row[0]";
                        echo "</option>";
                    }
                ?>
            </select>

            <label for="rozmiar">Rozmiar: </label>
            <select name="rozmiar" id="rozmiar">
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
            </select>

            <label for="amount_of_pairs">Liczba par: </label>
            <input type="number" id="amount_of_pairs" name="amount_of_pairs">

            <input type="submit" value="Zamów">
        </form>

        <?php
        // skrypt 2
            $query2 = "SELECT produkt.model, buty.nazwa, buty.cena, produkt.nazwa_pliku FROM buty INNER JOIN produkt ON buty.model = produkt.model;";

            $result2 = mysqli_query($connection, $query2);

            while($row = mysqli_fetch_row($result2)) {
                echo "<div class='control'>";
                echo "<img src='$row[3]' alt='but męski'>";
                echo "<h2> $row[1] </h2>";
                echo "<h5> Model: $row[0] </h5>";
                echo "<h4> Cena: $row[2] </h4>";
                echo "</div>";
            }
            
            mysqli_close($connection);
        ?>
    </main>

    <footer>
        <p>
            Autor strony: PESEL
        </p>
    </footer>
</body>
</html>