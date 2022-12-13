<?php
if (isset($_POST)) 
{
    $to = "mxlgallardo@gmail.com";
    $subject = 'Consulta desde marcexl.com.ar';
    $data = json_decode(file_get_contents('php://input'), true);
    $message = '<p>Name: '.$data['name'].'</p> 
                <p>Fname: '.$data['fname'].'</p>
                <p>Email: '.$data['email'].'</p>
                <p>Phone: '.$data['phone'].'</p>
                <p>Consulting: '.$data['consulting'].'</p>';
    $success = mail($to, $subject, $message);
    if ($success) 
    {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}
?>