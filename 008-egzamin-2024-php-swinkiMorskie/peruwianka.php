<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
    <title>Hodowla świnek morskich</title>
</head>
<body>
    <header>
        <h1>Hodowla świnek morskich - zamów świnkowe maluszki</h1>
    </header>

    <nav>
        <a href="peruwianka.php">Rasa Peruwianka</a>
        <a href="american.php">Rasa American</a>
        <a href="crested.php">Rasa Crested</a>
    </nav>

    <aside>
        <h3>Poznaj wszystkie rasy świnek morskich</h3>
        <ol>
            <!-- Skrypt 1 -->
            <?php
            $connection = mysqli_connect('localhost','root','','hodowla_mm');

            $query = "SELECT rasy.rasa FROM rasy;";
            
            $result = mysqli_query($connection, $query);

            while($row = mysqli_fetch_row($result)) {
                echo "<li> $row[0] </li>";
            }

            
            ?>
        </ol>
    </aside>

    <main>
        <img src="peruwianka.jpg" alt="peruwianka">

        <!-- Skrypt 2 -->
        <?php
          
        $query = "SELECT DISTINCT swinki.data_ur, swinki.miot, rasy.rasa FROM swinki INNER JOIN rasy ON swinki.rasy_id = rasy.id WHERE rasy.id = 1;";
            
        $result = mysqli_query($connection,$query);

        while($row = mysqli_fetch_row($result)) {
            echo "<h2> Rasa: $row[2] </h2>";
            echo "<p> Data urodzenia: $row[0] </p>";
            echo "<p> Oznaczenie miotu: $row[1] </p>";
        }

        ?>

        <hr>

        <h2>Świnki w tym miocie</h2>
        <!-- Skrypt 3 -->
        <?php
            
            $query = "SELECT swinki.imie, swinki.cena, swinki.opis FROM swinki WHERE swinki.rasy_id = 1;";

            $result = mysqli_query($connection,$query);

            while($row = mysqli_fetch_row($result)) {
                echo "<h3> $row[0] - $row[1] </h3>";
                echo "<p> $row[2] </p>";
            }
            mysqli_close($connection);

        ?>
    </main>
        
    <footer>
        <p>Stronę wykonał: PESEL</p>
    </footer>

</body>
</html>