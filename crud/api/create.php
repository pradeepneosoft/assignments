<?php
// var_dump($_POST);die();
session_start();
ini_set('display_errors', 1);
 include 'category.php';

$msg="";
$type="";
 
	if(ISSET($_POST['Cate_name'])){	
	

		$cate_name  = $_POST['Cate_name'];
		$conn = new db_class();
		if($conn->create($cate_name))
		{
           $msg=$cate_name." added Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in adding.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;

		
		header('location: ../list_cate.php');
	}	
	if(ISSET($_POST['prod_name']))
	{	
      $file_target="";


    
     
      $rand=rand(9000,10000);
      $file_name = $_FILES['prod_image']['name'];
      $file_tmp = $_FILES['prod_image']['tmp_name'];
      $file_target="http://localhost/pradeep/crud/uploaded/".$rand.$file_name;
      
      move_uploaded_file($file_tmp,"../uploaded/".$rand.$file_name);
       

		$prod_name  = $_POST['prod_name'];
		$price=$_POST['price'];
		$prod_image=$file_target;
		$category=$_POST['category'];

		$conn = new db_class();
		if($conn->add_product($prod_name,$price,$prod_image,$category))
		{
           $msg=$prod_name." added Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in adding.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		header('location: ../list_prod.php');

	}	
 
?>