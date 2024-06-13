<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization');

include('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];
if($requestMethod == "GET"){
    
    if(isset($_GET['productId'])){
    $commentList = getCommentList();
    echo $commentList;
   }
    else{
        echo "Specify product first.";
    }
}
else{
$data = [
'status' => 405,
'message' => $requestMethod. ' Method Not Allowed',
];
header("HTTP/1.0 405 Method Not Allowed");
echo json_encode($data);
}

?>