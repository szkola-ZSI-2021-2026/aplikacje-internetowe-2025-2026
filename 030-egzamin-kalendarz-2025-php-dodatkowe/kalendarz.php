<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalendarz</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>Dni, miesiące, lata...</h1>
    </header>

    <section>
        <p>
            <!-- SKRYPT 1 -->
            <?php
            
                $connection = mysqli_connect('localhost','root','','kalendarz');
                    
                $data = date('m-d');

                $query2 = "SELECT imieniny.imiona FROM imieniny WHERE imieniny.data = '$data'";

                $result = mysqli_query($connection, $query2);

                $imiona = mysqli_fetch_row($result);

                $dzienTygodnia;
                switch (date("D")) {
                    case 'Mon':
                        $dzienTygodnia = 'Poniedziałek';
                        break;
                    case 'Tue':
                        $dzienTygodnia = 'Wtorek';
                        break;
                    case 'Wed':
                        $dzienTygodnia = 'Środa';
                        break;
                    case 'Thu':
                        $dzienTygodnia = 'Czwartek';
                        break;
                    case 'Fri':
                        $dzienTygodnia = 'Piątek';
                        break;
                    case 'Sat':
                        $dzienTygodnia = 'Sobota';
                        break;
                    case 'Sun':
                        $dzienTygodnia = 'Niedziela';
                        break;
                }

                $data2 = date('d-m-Y');
                echo "Dzisiaj jest $dzienTygodnia, $data2, imieniny $imiona[0]";
            ?>
        </p>
    </section>

    <main>
        <div id="left">
            <table>
                <tr>
                    <th>Liczba dni</th>
                    <th>miesiąc</th>
                </tr>
                <tr>
                    <td rowspan="7">31</td>
                    <td>styczeń</td>
                </tr>
                <tr>
                    <td>marzec</td>
                </tr>
                <tr>
                    <td>maj</td>
                </tr>
                <tr>
                    <td>lipiec</td>
                </tr>
                <tr>
                    <td>sierpień</td>
                </tr>
                <tr>
                    <td>październik</td>
                </tr>
                <tr>
                    <td>grudzień</td>
                </tr>
                <tr>
                    <td rowspan="4">30</td>
                    <td>kwiecień</td>
                </tr>
                <tr>
                    <td>czerwiec</td>
                </tr>
                <tr>
                    <td>wrzesień</td>
                </tr>
                <tr>
                    <td>listopad</td>
                </tr>
                <tr>
                    <td>28 lub 29</td>
                    <td>luty</td>
                </tr>
            </table>
        </div>

        <div id="center">
            <h2>Sprawdź, kto ma urodziny</h2>
            
            <form action="kalendarz.php" method="post">
                <input type="date" min="2024-01-01" max="2024-12-31" required name="kalendarz">

                <input type="submit" value="wyślij">
            </form>
        
            <!-- SKRYPT 2 -->
            <?php
                $data = $_POST['kalendarz'];
                $days = explode('-', $data)[2];
                $months = explode('-', $data)[1];
                $years =  explode('-', $data)[0];
                $newData = $months.'-'.$days;
                
                $query22 = "SELECT imieniny.imiona FROM imieniny WHERE imieniny.data = '$newData'";

                $result2 = mysqli_query($connection, $query22);

                $imiona2 = mysqli_fetch_row($result2);
                
                echo "Dnia $data są imieniny: $imiona2[0]";

                mysqli_close($connection);
            ?>
        </div>

        <div id="right">
            <a href="https://pl.wikipedia.org/wiki/Kalendarz_Majów" target="_blank">
                <img src="animacja.gif" alt="Kalendarz Majów">
            </a>

            <h2>Rodzaje kalendarzy</h2>
            <ol>
                <li>słoneczny
                    <ul>
                        <li>kalendarz Majów</li>
                        <li>juliański</li>
                        <li>gregoriański</li>
                    </ul>
                </li>
                <li>księżycowy
                    <ul>
                        <li>starogrecki</li>
                        <li>babiloński</li>
                    </ul>
                </li>
            </ol>
        </div>
    </main>

    <footer>
        <p>Stronę opracował(a): PESEL</p>
    </footer>

</body>
</html>