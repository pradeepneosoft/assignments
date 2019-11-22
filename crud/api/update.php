<?php
session_start();
 include 'category.php';
ini_set('display_errors', 1);
$msg="";
$type="";
 
	if(ISSET($_POST['id'])){


		$cate_name  = $_POST['Cate_name'];

		$id=$_POST['id'];
		$conn = new db_class();
		if($conn->create($cate_name,$id))
		{
           $msg="Category updated Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in update.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		header('location: ../list_cate.php');
	}
	if(ISSET($_POST['prod_name']))
	{	
      $file_target="";


      if($_FILES['prod_image']['name']!="")
      {

     
      $rand=rand(9000,10000);
      $file_name = $_FILES['prod_image']['name'];
      $file_tmp = $_FILES['prod_image']['tmp_name'];
      $file_target="http://localhost/pradeep/crud/uploaded/".$rand.$file_name;
      
      move_uploaded_file($file_tmp,"../uploaded/".$rand.$file_name);
      }
      else 
      {

      $file_target= $_POST['img_link'];

      	
      } 

		$prod_name  = $_POST['prod_name'];
		$price=$_POST['price'];
		$prod_image=$file_target;
		$category=$_POST['category'];
		$id=$_POST['id'];

		$conn = new db_class();
		if($conn->add_product($prod_name,$price,$prod_image,$category,$id))
		{
           $msg="Product updated Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in update.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		header('location: ../list_prod.php');

	}	
 
?>