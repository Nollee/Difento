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
					  <strong>Error!</strong> You are not a human.
				  </div>';
		}
	}

 ?>
