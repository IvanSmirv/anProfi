<meta charset="UTF-8" />
<?php

$name = $_POST['name'];
$phone = $_POST['mobilePhone'];

$mes = "Имя: $name \phonel: $phone";

// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты
$send = mail($email, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
?>