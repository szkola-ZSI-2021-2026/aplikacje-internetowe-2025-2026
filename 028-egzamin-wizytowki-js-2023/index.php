<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wizytówki</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <header>
        <h1>Wizytówki pracowników</h1>

        <form action="index.php" method="post">
            <input type="number" name="liczba" value="1" min="1" max="9">
            <input type="submit" value="WYSWIETL" name="przycisk">
        </form>
    </header>
    
    <main>
        <?php
            // skrypt 1
            $connection = mysqli_connect('localhost','root','','firma_mm');

            $id;
            if (isset($_POST['przycisk'])) {
                $id = $_POST['liczba'];
            } else { 
                $id = 1;
            }

            $query1 = "SELECT id, imie, nazwisko, adres, miasto FROM pracownicy WHERE id = $id;";
            
            $result = mysqli_query($connection, $query1);
        
            $row = mysqli_fetch_row($result);

            printWorkerData($row[0],$row[1],$row[2],$row[3],$row[4]);

            function printWorkerData($id,$imie, $nazwisko, $adres, $miasto) {
                echo "<img src='$id.jpg'>";
                echo "<h2> $imie $nazwisko </h2>";
                echo "<h4> Adres: </h4>";
                echo "<p> $adres, $miasto </p>";
            }

        ?>
    </main>

    <footer>
        <div id="stopka1">
            <img src="obraz.jpg" alt="pracownicy firmy">
        </div>

        <div id="stopka2">
            <p>Autorem wizytówki jest: PESEL</p>
            <a href="http://agencjareklamowa543.pl/" target="_blank">Zobacz nasze realizacje</a>
        </div>
        
        <div id="stopka3">
            <p>Osoby proszone o podpisanie dokumentu RODO:</p>
            <ol>
                <?php
                    //skrypt 2
                    $query2 = "Select imie, nazwisko FROM pracownicy where czyRODO = 0;";

                    $result2 = mysqli_query($connection, $query2);

                    while ($row2 = mysqli_fetch_array($result2)) {
                        printUnRodoWorkers($row2['imie'], $row2['imie']);
                    }

                    function printUnRodoWorkers($imie, $nazwisko) {
                        echo "<li> $imie $nazwisko </li>";
                    }


                    mysqli_close($connection);
                ?>
            </ol>
        </div>
    </footer>
</body>
</html>