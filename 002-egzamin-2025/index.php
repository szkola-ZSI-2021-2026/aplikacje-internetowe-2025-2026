<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wyszukiwarka miast</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="fav.png" type="image/x-icon">
</head>
<body>
    <main>
        <header>
            <img src="baner.jpg" alt="Polska">
        </header>

        <section id="main">
            <aside>
                <section id="top">
                    <h4>Podaj początek nazwy miasta</h4>
                
                    <form action="index.php" method="post">
                        <input type="text" name="firstLetters">

                        <input type="submit" value="Szukaj">
                    </form>
                </section>

                <section id="bottom">
                    <p>Egzamin INF.03</p>
                    <p>Autor: PESEL</p>
                </section>
            </aside>
        
        
            <section id="right">
                <h1>Wyniki wyszukiwania miast z uwzględnieniem filtra:</h1>
                <!-- SKRYPT 1 -->
                <?php

                    if(!empty($_POST['firstLetters'])) {
                        $connection = mysqli_connect("localhost", "root", "", "wykaz");

                        echo "<p class='scriptFilter' > $_POST[firstLetters] </p>";
                        $query = "SELECT miasta.nazwa, wojewodztwa.nazwa FROM wojewodztwa JOIN miasta ON miasta.id_wojewodztwa = wojewodztwa.id WHERE miasta.nazwa LIKE '$_POST[firstLetters]%' ORDER BY miasta.nazwa;";

                        $result = mysqli_query($connection, $query);

                        echo "<table>";
                        echo "<tr> <th> Miasto </th> <th> Wojewodztwo </th> </tr>";
                        while($row = mysqli_fetch_row($result)) {   
                            echo "<tr>";
                            echo "<td> $row[0] </td>";
                            echo "<td> $row[1] </td>";
                            echo "</tr>";
                        }
                        echo "</table>";

                        mysqli_close($connection);
                    }

                ?>
            </section>
        </section>
    </main>


</body>
</html>