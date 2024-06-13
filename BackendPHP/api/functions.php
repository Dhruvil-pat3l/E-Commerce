<?php

error_reporting(0);

require '../include/dbconn.php';

//error handling
function error422($message){
    $data = [
        'status' => 422,
        'message' => $message
    ];

    header("HTTP/1.0 200 No OK");
    echo json_encode($data);
    exit();
}

function storeComment($commentInput){
    global $conn;
    $commentId = mysqli_real_escape_string($conn, $commentInput['commentId']);
    $productId = mysqli_real_escape_string($conn, $commentInput['productId']);
    $user = mysqli_real_escape_string($conn, $commentInput['user']);
    $rating = mysqli_real_escape_string($conn, $commentInput['rating']);
    $text = mysqli_real_escape_string($conn, $commentInput['text']);
    
    if(empty(trim($commentId))){
        return error422('Enter commentId');
    }elseif (empty(trim($productId))){
        return error422('Specify productId');
    }elseif (empty(trim($user))){
        return error422('Enter username');    
    }elseif (empty(trim($rating))){
        return error422('Enter rating');   
    }elseif (empty(trim($text))){
        return error422('Enter text');
    }else{
        $query = "INSERT INTO comment (commentId, productId, user, rating, text) VALUES ('$commentId','$productId','$user','$rating','$text')";
        $result = mysqli_query($conn, $query);
        if($result){
            $data = [
                'status' => 201,
                'message' => 'Comment Created Successfull'
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($data);
        }else{
            $data = [
                'status' => 500,
                'message' => 'Internal Server Error',
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
     }
}

function getCommentList(){
    global $conn;
    $productId = $_GET['productId'];
    $query = "SELECT * FROM comment WHERE productId='$productId'";
    $query_run = mysqli_query($conn, $query);
    if($query_run) {
        if(mysqli_num_rows($query_run) > 0){
            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
            'status' => 200,
            'message' => 'Comment List Fetched Successfully',
            'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
        }
        else{
            $data = [
                'status' => 404,
                'message' => 'No Comment Found',
                ];
                header("HTTP/1.0 404 No Comment Found");
                return json_encode($data);
        }
    }
    else
    {
    $data = [
    'status' => 500,
    'message' => 'Internal Server Error',
    ];
    header("HTTP/1.0 500 Internal $");
    echo json_encode($data);
    }
}

function getSingleDetail(){
    global $conn;
    $productId = $_GET['productId'];
    $query = "SELECT * FROM product WHERE productId='$productId'";
    $query_run = mysqli_query($conn, $query);
    if($query_run) {
        if(mysqli_num_rows($query_run) > 0){
            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
            'status' => 200,
            'message' => 'Product Detail Fetched Successfully',
            'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
        }
        else{
            $data = [
                'status' => 404,
                'message' => 'No Product Found',
                ];
                header("HTTP/1.0 404 No Comment Found");
                return json_encode($data);
        }
    }
    else
    {
    $data = [
    'status' => 500,
    'message' => 'Internal Server Error',
    ];
    header("HTTP/1.0 500 Internal");
    echo json_encode($data);
    }   
}

function getAllProductDetail(){
    global $conn;
    $query = "SELECT productImage, productName, price, description FROM product";
    $query_run = mysqli_query($conn, $query);
    if($query_run) {
        if(mysqli_num_rows($query_run) > 0){
            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
            'status' => 200,
            'message' => 'All Products Fetched Successfully',
            'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
        }
        else{
            $data = [
                'status' => 404,
                'message' => 'No Product Found',
            ];
            header("HTTP/1.0 404 No Comment Found");
            return json_encode($data);
        }
    }
    else{
        $data = [
        'status' => 500,
        'message' => 'Internal Server Error',
        ];
        header("HTTP/1.0 500 Internal $");
        echo json_encode($data);
    }     
}   

function getCartDetail(){
    global $conn;
    $user = $_GET['user'];
    $query = "SELECT productId, quantities FROM cart WHERE user ='$user' ";
    $query_run = mysqli_query($conn, $query);
    if($query_run) {
        if(mysqli_num_rows($query_run) > 0){
            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
            'status' => 200,
            'message' => 'Cart Fetched Successfully',
            'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
        }
        else{
            $data = [
                'status' => 404,
                'message' => 'No Product Found',
            ];
            header("HTTP/1.0 404 No Comment Found");
            return json_encode($data);
        }
    }
    else{
        $data = [
        'status' => 500,
        'message' => 'Internal Server Error',
        ];
        header("HTTP/1.0 500 Internal $");
        echo json_encode($data);
    }
}

function createCartDetail($cartInput){
    global $conn;
    $productId = mysqli_real_escape_string($conn, $cartInput['productId']);
    $user = mysqli_real_escape_string($conn, $cartInput['user']);
    $quantities = mysqli_real_escape_string($conn, $cartInput['quantities']);
    
    if(empty(trim($quantities))){
        return error422('Enter quantities');
    }elseif (empty(trim($productId))){
        return error422('Specify productId');
    }elseif (empty(trim($user))){
        return error422('Enter username');    
    }
    else{
        $query = "INSERT INTO cart (productId, user, quantities) VALUES ('$productId','$user','$quantities')";
        $result = mysqli_query($conn, $query);
        if($result){
            $data = [
                'status' => 201,
                'message' => 'Cart Created Successfull'
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($data);
        }else{
            $data = [
                'status' => 500,
                'message' => 'Internal Server Error',
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
    }  
}

//sign in user function
function createUser($userCreate){
    global $conn;

    $name = mysqli_real_escape_string($conn,$userCreate['name']);
    $email = mysqli_real_escape_string($conn,$userCreate['email']);
    $password = mysqli_real_escape_string($conn,$userCreate['password']);
    //$password = password_hash($temp,PASSWORD_DEFAULT); 

    $shippingAddress = mysqli_real_escape_string($conn,$userCreate['shippingAddress']);

    $username = uniqid();
    $purchaseHistory = "";

    if(empty(trim($name))){

        return error422("Enter your name ");

    }else if(empty(trim($email))){
        
        return error422("Enter your email ");
    }else if(empty(trim($password))){

        return error422("Enter your password ");
    }else{

        $query = "INSERT INTO user (username,name,email,password,purchaseHistory,shippingAddress) VALUES ('$username','$name','$email','$password','$purchaseHistory','$shippingAddress')";
        $result = mysqli_query($conn,$query);

        if($result){
            $data = [
                'status' => 201,
                'message' => ' User Created Successfully',
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($data);
        }else{
            $data = [
                'status' => 500,
                'message' => ' Internal Server Error'
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
       
    }
}

//login user function
function login($username,$password){

    global $conn;

    $query = "SELECT * FROM user WHERE username = '$username'";
    $query_run = mysqli_query($conn,$query);

    if($query_run){
        if(mysqli_num_rows($query_run) == 1){
            $response = mysqli_fetch_array($query_run, MYSQLI_ASSOC);
            if($response['password']  == $password){
                $data = [
                    'status' => 200,
                    'message' => 'User Logged in Successfully',
                    'data' => $response
                ];
                header("HTTP/1.0 200 OK");
                return json_encode($data);
            }else{
                $data = [
                    'status' => 403,
                    'message' => 'Incorrect Password'
                ];
                header("HTTP/1.0 403 AUTHENTICATION FAILED");
                return json_encode($data);
            }
 

        }else{
            $data = [
                'status' => 404,
                'message' => ' No User Found'
            ];
            header("HTTP/1.0 404 No User Found");
            return json_encode($data);
        }

    }else{
        $data = [
            'status' => 500,
            'message' => ' Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }

}

//get all users list
function getAllUserDetails(){

    global $conn;

    $query = "SELECT * FROM user";
    $query_run = mysqli_query($conn,$query);

    if($query_run){
        if(mysqli_num_rows($query_run) > 0){
            $response = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
                'status' => 200,
                'message' => 'Users fetch successfully',
                'data' => $response
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);

        }else{
            $data = [
                'status' => 404,
                'message' => ' No User Found'
            ];
            header("HTTP/1.0 404 No User Found");
            return json_encode($data);
        }

    }else{
        $data = [
            'status' => 500,
            'message' => ' Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }

}

//update user function

function updateUser($inputData,$userParams){
    global $conn;

    if(!isset($userParams['username'])){
        return error422("Username not found in URL"); 
    }else if($userParams['username'] == null){
        return error422("Enter useranme"); 
    }

    $username = mysqli_real_escape_string($conn,$userParams['username']);
    $name = mysqli_real_escape_string($conn,$inputData['name']);
    $email = mysqli_real_escape_string($conn,$inputData['email']);
    $password = mysqli_real_escape_string($conn,$inputData['password']);
    //$password = password_hash(mysqli_real_escape_string($conn,$inputData['password']),PASSWORD_DEFAULT); 
    $shippingAddress = mysqli_real_escape_string($conn,$inputData['shippingAddress']);


    if(empty(trim($name))){

        return error422("Enter your name ");

    }else if(empty(trim($email))){
        
        return error422("Enter your email ");
    }else if(empty(trim($password))){

        return error422("Enter your password ");
    
    }else if(empty(trim($shippingAddress))){

        return error422("Enter your shipping address ");
    }else{

        $query = "UPDATE user SET name = '$name',email='$email',password='$password',shippingAddress='$shippingAddress' WHERE username = '$username'";
        $result = mysqli_query($conn,$query);
       
        if($result){
            $data = [
                'status' => 200,
                'message' => ' User Updated Successfully'
            ];
            header("HTTP/1.0 200 updated");
            return json_encode($data);
        }else{
            $data = [
                'status' => 500,
                'message' => ' Internal Server Error'
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
       
    }
}


//create order function
function createOrder($createOrder){
    global $conn;

    $products = mysqli_real_escape_string($conn,$createOrder['products']);
    $userId = mysqli_real_escape_string($conn,$createOrder['userId']);
    $dateTime = date('d-m-y h:i:s');
    $shippingAddress = mysqli_real_escape_string($conn,$createOrder['shippingAddress']);

  $orderId = uniqid("o_");

    if(empty(trim($products))){

        return error422("Enter products ");

    }else if(empty(trim($userId))){
        
        return error422("Enter user Id ");
    }else if(empty(trim($dateTime))){

        return error422("Enter date Time ");
    }else if(empty(trim($shippingAddress))){

        return error422("Enter your shipping Address ");
    }else{

        $query = "INSERT INTO orderTable (orderId,products,userId,dateTime,shippingAddress) VALUES ('$orderId','$products','$userId','$dateTime','$shippingAddress')";
        $result = mysqli_query($conn,$query);

        if($result){
            $data = [
                'status' => 201,
                'message' => ' Order Created Successfully'
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($data);
        }else{
            $data = [
                'status' => 500,
                'message' => ' Internal Server Error'
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
       
    }
}


//get single order detail function
function getSingleOrder($orderId){

    global $conn;

    $query = "SELECT * FROM orderTable WHERE orderId = '$orderId'";
    $query_run = mysqli_query($conn,$query);

    if($query_run){
        if(mysqli_num_rows($query_run) == 1){
            $response = mysqli_fetch_array($query_run, MYSQLI_ASSOC);

            $data = [
                'status' => 200,
                'message' => 'Single order fetched Successfully',
                'data' => $response
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);

        }else{
            $data = [
                'status' => 404,
                'message' => ' No Order Found'
            ];
            header("HTTP/1.0 404 No Order Found");
            return json_encode($data);
        }

    }else{
        $data = [
            'status' => 500,
            'message' => ' Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }

}




?>