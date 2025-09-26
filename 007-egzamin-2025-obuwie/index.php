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
            <label for="Model">Model: </label>
            <select name="Model" id="Model">
                <option value="test">test</option>
                <?php
                // skrypt 1
                    $connection = mysqli_connect("localhost", "root", "", "obuwie_mm");
                
                    $query1 = "SELECT model FROM produkt;";

                    $result = mysqli_query($query1, $connection);

                    while ($row = mysli_fetch_row($result)) {
                        echo "<option value='$row[0]'>";
                        echo "$row[0]";
                        echo "</option>";
                    }
                ?>
            </select>

            <label for="Rozmiar">Rozmiar: </label>
            <select name="Rozmiar" id="rozmiar">
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
            </select>

            <input type="submit" value="Zamów">
        </form>

        <?php
        // skrypt 2
        
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