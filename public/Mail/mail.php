<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../vendor/autoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'no-reply@marcexl.com.ar';
$mail->Password = '70Aniver#';
$mail->setFrom('no-reply@marcexl.com.ar', 'No Reply');
$mail->addAddress('mxlgallardo@gmail.com', 'Marcexl');
$mail->Subject = 'Nueva consulta desde marcexl.com.ar';
$data = json_decode(file_get_contents('php://input'), true);
    
$message = '<p>Name: '.$data['name'].'</p> 
            <p>Fname: '.$data['fname'].'</p>
            <p>Email: '.$data['email'].'</p>
            <p>Phone: '.$data['phone'].'</p>
            <p>Consulting: '.$data['consulting'].'</p>';
                
$mail->Body = $message;
//$mail->addAttachment('test.txt');
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'success';
}
?>