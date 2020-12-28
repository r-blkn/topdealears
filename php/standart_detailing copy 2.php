<?php
 
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$msg = $_POST['user_message'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1465816814:AAHrt6bxr19mOjd6i_a-vpBnIatSNskTgPg";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-180600692";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Імя клієнта: ' => $name,
  'Телефон: ' => $phone,
  'Повідомлення' => $msg
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  echo '<script>alert("Good!")</script>'; 
} else {
  echo '<script>alert("Bad!")</script>'; 
}
?>