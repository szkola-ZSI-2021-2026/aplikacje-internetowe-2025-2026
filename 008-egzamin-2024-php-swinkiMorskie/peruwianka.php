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

    <section class="left">

        <nav>
            <a href="peruwianka.php">Rasa Peruwianka</a>
            <a href="american.php">Rasa American</a>
            <a href="crested.php">Rasa Crested</a>
        </nav>

        <main>
            <img src="peruwianka.jpg" alt="peruwianka">

            <!-- Skrypt 2 -->
            <?php
            $connection = mysqli_connect('localhost','root','','hodowla_mm');
            
            
            ?>

            <hr>

            <h2>Świnki w tym miocie</h2>
            <!-- Skrypt 3 -->
            <?php
            
            ?>
        </main>
        
    </section>

    <aside>
        <h3>Poznaj wszystkie rasy świnek morskich</h3>
        <ol>
            <!-- Skrypt 1 -->
            <?php

            $query = "SELECT rasy.rasa FROM rasy;";
            
            $result = mysqli_query($connection, $query);

            while($row = mysqli_fetch_row($result)) {
                echo "<li> $row[0] </li>";
            }

            mysqli_close($connection);
            
            ?>
        </ol>
    </aside>

    <footer>
        <p>Stronę wykonał: PESEL</p>
    </footer>

</body>
</html>