<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../vendor/autoload.php';

if(isset($_POST))
{

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug  = 1;  
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "tls";
    $mail->Port       = 587;
    $mail->Host       = "smtp.gmail.com";
    $mail->Username   = "mxlgallardo@gmail.com";
    $mail->Password   = "70aniver";
    $mail->setFrom('no-reply@marcexl.com.ar', '<No reply>');
    $mail->addAddress('mxlgallardo@gmail.com', 'Marcexl');
    $mail->Subject = 'Consulta desde marcexl.com.ar';
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    
    $data = json_decode(file_get_contents('php://input'), true);
    
    $message = '<p>Name: '.$data['name'].'</p> 
                <p>Fname: '.$data['fname'].'</p>
                <p>Email: '.$data['email'].'</p>
                <p>Phone: '.$data['phone'].'</p>
                <p>Consulting: '.$data['consulting'].'</p>';
                    
    $mail->Body = $message;

    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'The email message was sent.';
    }
}
?>