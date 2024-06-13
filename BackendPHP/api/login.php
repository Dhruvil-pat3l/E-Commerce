<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow_Method: GET');
header('Access-Control_Allow-Headers: Content-Type, Acess-Control-Allow-Headers, Authorization, X-Request-with');

include('functions.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];
$url = $_SERVER["REQUEST_URI"];

if($requestMethod == "GET"){
    $url_components = parse_url($url);
    parse_str($url_components['query'], $params);
    $userDetails = login($params['username'],$params['password']);
    
    echo $userDetails;

}else{
    $data = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed'
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
    
}

?>
