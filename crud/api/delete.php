<?php
session_start();

ini_set('display_errors', 1);
$msg="";
$type="";

 include 'category.php';
 // print_r($_REQUEST);die();
 
	// if(ISSET($_REQUEST['id']))
		
 
switch ($_REQUEST['method']) {
    case "delete_cate":
        delete_cate($_REQUEST['id']);
        break;
    case "delete_prod":
delete_prod($_REQUEST['id']);
        break;
        case "delete_cate_all":
delete_cate_all();
        break;
        case "delete_prod_all":
delete_prod_all();
        break;
    
    default:
        echo "method not found!";
}

function delete_cate($id){	
	   

		// $id  = $_REQUEST['id'];
		$conn = new db_class();
		if($conn->delete($id))
		{
           $msg="Category deleted Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in Deleting Category.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		
		header('location: ../list_cate.php');
	}	

	function delete_prod($id){	
	   

		// $id  = $_REQUEST['id'];
		$conn = new db_class();
		if($conn->delete_prod($id))
		{
           $msg="Product deleted Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in deleting Product.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		
		header('location: ../list_prod.php');
	}
     function delete_cate_all(){	
     
	// $id_array=explode(',', $ids);

$data= implode( ",",$_POST['check']) ;
	   // print_r($data);die();

		// $id  = $_REQUEST['id'];
		$conn = new db_class();
		if($conn->delete_cate_all($data))
		{
           $msg="Category deleted Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in Deleting Category.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		
		header('location: ../list_cate.php');
	}
function delete_prod_all(){	
	// print_r($_POST);die();
     
	// $id_array=explode(',', $ids);

$data= implode( ",",$_POST['check']) ;

	    // print_r($data);die();

		// $id  = $_REQUEST['id'];
		$conn = new db_class();
		if($conn->delete_prod_all($data))
		{
           $msg="Category deleted Successfully.";
		   $type="success";
		}else
		{
           $msg="Problem in Deleting Category.";
           $type="failed";
		}

       $_SESSION['flash']=$msg;
       $_SESSION['type']=$type;
		
		
		header('location: ../list_prod.php');
	}

?>