<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smoki</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h2>Poznaj smoki</h2>
    </header>

    <nav>
        <div id="blok1" onclick="funkcja1('baza')">
            Baza
        </div>

        <div id="blok2" onclick="funkcja1('opis')">
            Opisy
        </div>

        <div id="blok3" onclick="funkcja1('galeria')">
            Galeria
        </div>
    </nav>

    <main>
        <section id="section1">
            <h3>Baza Smoków</h3>
            <form action="smoki.php" method="post">
                <select name="" id="">
                    <!-- OPTION  SKRYPT 1 PHP-->
                    <?php

                        $connection = mysqli_connection("localhost","root","","smoki_mm");
                    
                        $query2 = "zapytanie2";
                    
                    ?>
                </select>
                <input type="submit" value="Szukaj"> 
            </form>

            <table>
                <tr>
                    <th>Nazwa</th>
                    <th>Długość</th>
                    <th>Szerokość</th>
                </tr>
                <!-- tr SKRYPT 2 PHP -->
                <?php



                    mysqli_close($connection);
                
                ?>
            </table>
        </section>
        
        <section id="section2">
            <h3>Opisy smoków</h3>
            <dl>
                <dt>Smok czerwony</dt>
                <dd>Pochodzi z Chin. Ma 1000 lat. Żywi się mniejszymi zwierzętami. Posiada łuski cenne na rynkach wschodnich do wyrabiania lekarstw. Jest dziki i groźny.</dd>

                <dt>Smok zielony</dt>
                <dd>Pochodzi z Bułgarii. Ma 10000 lat. Żywi się mniejszymi zwierzętami, ale tylko w kolorze zielonym. Jest kosmaty. Z sierści zgubionej przez niego, tka się najdroższe materiały.</dd>


                <dt>Smok niebieski</dt>
                <dd>Pochodzi z Francji. Ma 100 lat. Żywi się owocami morza. Jest natchnieniem dla najlepszych malarzy. Często im pozuje. Smok ten jest przyjacielem ludzi i czasami im pomaga. Jest jednak próżny i nie lubi się przepracowywać.</dd>
            </dl>
        </section>

        <section id="section3">
            <h3>Galeria</h3>
            <img src="smok1.JPG" alt="Smok czerwony">
            <img src="smok2.JPG" alt="Smok wielki">
            <img src="smok3.JPG" alt="Smok łaciaty">
        </section>
    </main>

    <footer>
        <p>Stronę opracował: PESEL</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>