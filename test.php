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
            $message = $_POST['message'];
            /* $phone = $_POST['phone']; */


            $email_from = 'mj@htmlpractice.dk';

            $email_subject = "Kontaktformular Difento.dk";

            $email_body = "User Name: $name.\n".
                            "User Email: $visitor_email.\n".
                              /* "User Phone: $phone.\n". */
                                "User Message: $message.\n";

            $to = "mikkelfaartoftjensen@gmail.com";

            $headers = "From: $email_from \r\n";

            $headers .= "Reply-To: $visitor_email \r\n";

            mail($to,$email_subject,$email_body,$headers);
			// Perform you logic here for ex:- save you data to database
  			echo '<div class="alert alert-success">
			  		<strong>Success!</strong> Your inquiry successfully submitted.
		 		  </div>';
		} else {
			echo '<div class="alert alert-warning">

				  </div>';
		}
	}

 ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Learn Web Coding > Google reCAPTHA V3 integration in PHP</title>
    <link rel="stylesheet" type="text/css" href="../library/css/bootstrap.min.css"/>
    <style type="text/css">
    	.card {
    		width: 70%;
    		margin: 0 auto;
    	}
    </style>
    <script src="https://www.google.com/recaptcha/api.js?render=6LdwzfwUAAAAALCr3M_nRgn8-TN7_KYXWatiF7ML"></script>

  </head>
  <body>


		    	<form role="form" method="post" action="#" class="form-horizontal">

                    <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" required>

	            	<input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required>

	                <textarea class="form-control" id="msg" name="msg" placeholder="Enter your message" rows="5" required></textarea>

                    <input type="submit" value="Post" class="" name="post">

                <input type="hidden" id="token" name="token">

            </form>



	<div style="position: fixed; bottom: 30px; right: 100px; color: green;">
	    <strong>
	        Learn Web Coding
	    </strong>
	</div>
  </body>

  <script>
  grecaptcha.ready(function() {
      grecaptcha.execute('6LdwzfwUAAAAALCr3M_nRgn8-TN7_KYXWatiF7ML', {action: 'homepage'}).then(function(token) {
         // console.log(token);
         document.getElementById("token").value = token;
      });
  });
  </script>

</html>