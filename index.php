<?php
	if(isset($_POST['post'])) {
		// print_r($_POST);
		$url = "https://www.google.com/recaptcha/api/siteverify";
		$data = [
			'secret' => "6LdwzfwUAAAAABptTVjpCCsecDVeAlDjHCbwu6o1",
			'response' => $_POST['token'],
			// 'remoteip' => $_SERVER['REMOTE_ADDR']
		];

		$options = array(
		    'http' => array(
		      'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
		      'method'  => 'POST',
		      'content' => http_build_query($data)
		    )
		  );

		$context  = stream_context_create($options);
  		$response = file_get_contents($url, false, $context);

		$res = json_decode($response, true);
		if($res['success'] == true) {
            $name= $_POST['name'];
            $visitor_email = $_POST['email'];
            $message = $_POST['msg'];
            /* $phone = $_POST['phone']; */


            $email_from = 'form@difento.dk';

            $email_subject = "Kontaktformular Difento.dk";

            $email_body = "User Name: $name.\n".
                            "User Email: $visitor_email.\n".
                              /* "User Phone: $phone.\n". */
                                "User Message: $message.\n";

            $to = "kontakt@difento.dk";

            $headers = "From: $email_from \r\n";

            $headers .= "Reply-To: $visitor_email \r\n";

            mail($to,$email_subject,$email_body,$headers);
			// Perform you logic here for ex:- save you data to database
  			echo '<div id="alert-success">
              <h3><strong>Fedt! </strong> Din besked er blevet sendt, vi vender tilbage hurtigst muligt<h3> <i class="fas fa-laugh"></i>
           </div>';
		} else {
			echo '<div class="alert alert-warning">
				  </div>';
		}
	}

 ?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Difento - find din unikke webløsning her</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Work in progress">
  <meta name="author" content="Difento">
  <link rel="stylesheet" href="css/style.css">
  <link rel="shortcut icon" type="image/png" href="images/favicon.png" />
  <!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#101A23">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#101A23">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-status-bar-style" content="#101A23">
  <!--Fontawesome stylesheet-->
  <script src="https://kit.fontawesome.com/d6495a71d9.js" crossorigin="anonymous"></script>

  <!--Swiper stylesheet-->
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">

  <!-- Adobe font stylesheet-->
  <link rel="stylesheet" href="https://use.typekit.net/wxx4rio.css">
  <!-- recaptcha v3 -->
  <script src="https://www.google.com/recaptcha/api.js?render=6LdwzfwUAAAAALCr3M_nRgn8-TN7_KYXWatiF7ML"></script>
  <!-- recaptcha v3 end -->

  <!-- AOS stylesheet-->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>

<body onhashchange="pageChange()">
  <main id="app">
    <nav class="tabbar"></nav>
    <!-- <section id="front" class="page"> -->
    <section id="content" class="page">
    <article id="hero" class="hero-forside sub"></article>
    <article id="cases" class="sub cases">
    </article>
    <article id="proces" class="sub"></article>
    <article id="about" class="sub"></article>
    <article id="recommend" class="sub">
    </article>
    <article id="contact" class="sub"></article>
    <footer class="sub"></footer>
<!-- </section> -->
</section>
<section id="detail" class="page">
</section>
  </main>



  <!-- Vanta birds JS-->
  <script src="./services/three.r95.min.js"></script>
  <script src="./services/vanta.birds.min.js"></script>

  <!--Swiper JS-->
  <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>

  <!-- Rellax JS -->
  <script src="rellax.min.js"></script>

  <!--AOS JS-->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  <!--Main js-->
  <script src="main.js" type="module"></script>

  <script>
  </script>
</body>

</html>