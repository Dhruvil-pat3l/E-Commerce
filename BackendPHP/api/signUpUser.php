<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow_Method: POST');
header('Access-Control_Allow-Headers: Content-Type, Acess-Control-Allow-Headers, Authorization, X-Request-with');

include('functions.php');

echo "tect";

/*$requestMethod = $_SERVER['REQUEST_METHOD'];

if($requestMethod == "POST"){

    $createUser = json_decode(file_get_contents("php://input"),true);
    if(empty($createUser)){
        $storeUser = createUser($_POST);
    }else{
    
        $storeUser = createUser($createUser);
    }
    echo $storeUser;

}else{
    $data = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed'
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
    
}
