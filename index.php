<?php
/**
 * Created by PhpStorm.
 * User: vvvla
 * Date: 13.04.2018
 * Time: 16:26
 */
?>
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <title>ARCA</title>

        <?php
          include 'styles.php';
        ?>



    </head>
    <body>

        <header>

            <?php
            include 'content/1_Header__navbar.php';
            include 'content/2_Header.php';


            ?>
        </header>
        <main>
            <?php
            include 'content/3_Exploration.php';
            // include 'content/4_Services.php';
            // include 'content/5_Partners.php';
            // include 'content/6_Education.php';
            // include 'content/7_Culture.php';
            ?>
        </main>
        <footer>
            <?php
            include 'content/8_Footer.php';

            ?>
        </footer>

        <script lg src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <script lg src="js/main.js"></script>

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVhhNGSplFjLgJWIHVEoB5X7jrRQDXAzc&callback=initMap&language=ru&region=ru"></script>

        <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>

        <script lg src="libs/slick/slick.js"></script>

        <script lg src="libs/bootstrap/modal.js"></script>


    </body>
</html>
