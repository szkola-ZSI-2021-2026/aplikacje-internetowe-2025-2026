<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mieszanina farb</title>
    <link rel="shortcut icon" href="fav.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="banner.png" alt="Mieszalnia farb">
    </header>

    <section>
        <form action="index.php" method="post">
            <label for="fdate"> Data do odbioru: </label>
            <input type="date" name="fdate" id="fdate">

            <label for="ldate">do: </label>
            <input type="date" name="ldate" id="ldate">

            <input type="submit" value="Wyszukaj" name="WYSZUKAJ">
        </form>
    </section>

    <main>
        <table>
            <tr>
                <th>Nr zamówienia</th>
                <th>Nazwisko</th>
                <th>Imie</th>
                <th>Kolor</th>
                <th>Pojemność [ml]</th>
                <th>Data odbioru</th>
            </tr>

            <?php
            // skrypt 1
            $query;
            if(isset($_POST["fdate"]) && isset($_POST["ldate"]) && isset($_POST['WYSZUKAJ'])) {
                $fdate = $_POST['fdate'];
                $ldate = $_POST['ldate'];
                // kwerenda 3 - formularz wypełniony
                $query = "SELECT klienci.Nazwisko, klienci.Imie, zamowienia.id, zamowienia.kod_koloru, zamowienia.pojemnosc, zamowienia.data_odbioru FROM klienci JOIN zamowienia ON klienci.Id = zamowienia.id_klienta WHERE zamowienia.data_odbioru >= '$fdate' AND zamowienia.data_odbioru <= '$ldate' ORDER BY zamowienia.data_odbioru;";
            } else {
                // kwerenda 2 - formularz nie wypełniony
                $query = "SELECT klienci.Nazwisko, klienci.Imie, zamowienia.id, zamowienia.kod_koloru, zamowienia.pojemnosc, zamowienia.data_odbioru FROM klienci JOIN zamowienia ON klienci.Id = zamowienia.id_klienta order by zamowienia.data_odbioru;";
            }

            $connection = mysqli_connect("localhost", "root", "", "mieszalnia");            
            
            $result = mysqli_query($connection, $query);

            while ($row = mysqli_fetch_row($result)) {
                echo "<tr>";
                echo "<td> $row[2] </td>";
                echo "<td> $row[0] </td>";
                echo "<td> $row[1] </td>";
                echo "<td style='background-color: #$row[3]'> $row[3] </td>";
                echo "<td> $row[4] </td>";
                echo "<td> $row[5] </td>";
                echo "</tr>";
            }
            
            mysqli_close($connection);
            ?>
        </table>
    </main>

    <footer>
        <h3>Egzamin INF.03</h3>
        <p>Autor: PESEL</p>
    </footer>
</body>
</html>