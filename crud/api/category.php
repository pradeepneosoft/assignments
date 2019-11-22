<?php
ini_set('display_errors', 1);

	require 'database.php';
 
	class db_class extends db_connect{	
 
		public function __construct(){
			$this->connect();
		}
 
		

		public function create($cate_name,$id=''){

		if($id=='')
		{
			$stmt = $this->conn->prepare("INSERT INTO tblcategory ( cate_name ) VALUES (?)")or die($this->conn->error);
			$stmt->bind_param("s",$cate_name);
			
			if($stmt->execute()){
				$stmt->close();
				$this->conn->close();
				return true;
			}
			else
			{
								return false;

			}
		  }
		  else
		  {
		  	// print_r($cate_name);die();
		  	$stmt = $this->conn->prepare("UPDATE tblcategory SET cate_name=? WHERE id=?")or die($this->conn->error);
			$stmt->bind_param("ss", $cate_name, $id);
			
			if($stmt->execute()){
				// print_r($stmt->execute());
				$stmt->close();
				$this->conn->close();
				return true;
			}
			else
			{
								return false;

			}
				

		  }
		}
		public function add_product($prod_name,$price,$prod_image,$category,$id=''){

		if($id==''){
			$stmt = $this->conn->prepare("INSERT INTO tblproduct (prod_name,prod_price,prod_image,prod_category) VALUES (?,?,?,?)")or die($this->conn->error);
			$stmt->bind_param("ssss",$prod_name,$price,$prod_image,$category);
			
			if($stmt->execute()){
				$stmt->close();
				$this->conn->close();
				return true;
			}
			else
			{
								return false;

			}
		}else
		{

			$stmt = $this->conn->prepare("UPDATE tblproduct SET prod_name=?,prod_price=?,prod_image=?,prod_category=? WHERE id=?")or die($this->conn->error);
			$stmt->bind_param("sssss", $prod_name  ,$price   ,$prod_image ,$category, $id);
			
			if($stmt->execute()){
				// print_r($stmt->execute());
				$stmt->close();
				$this->conn->close();
				return true;
			}
			else
			{
								return false;

			}

		}
		  
		 
		}
 
		public function read($limit='',$offset=''){

			$query="SELECT * FROM tblcategory ";
			if($limit!=='' && $offset!=='')
				{ 
			      $query.="  LIMIT  $offset , $limit";
 				}
 				// print_r($query);die();
			$stmt = $this->conn->prepare($query) or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
				return $result;
			}
			else
			{
								return false;

			}
		}
		public function get_count(){
			$stmt = $this->conn->prepare("SELECT count(*) as total_rows FROM tblcategory") or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
               // var_dump($result);die();
				return $result;
			}
			else
			{
								return false;

			}
		}
		public function get_count_prod(){
			$stmt = $this->conn->prepare("SELECT count(*) as total_rows FROM tblproduct") or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
               // var_dump($result);die();
				return $result;
			}
			else
			{
								return false;

			}
		}
		// public function read_prod($limit='',$offset=''){
		// 	$stmt = $this->conn->prepare("SELECT * FROM tblproduct") or die($this->conn->error);
		// 	if($stmt->execute()){
		// 		$result = $stmt->get_result();
		// 		return $result;
		// 	}
		// 	else
		// 	{
		// 						return false;

		// 	}
		// }
		public function read_prod_list($limit='',$offset=''){
			$query="SELECT tblproduct.id,tblproduct.prod_name,tblproduct.prod_price,tblproduct.prod_image,tblcategory.cate_name
				FROM tblproduct
				LEFT JOIN tblcategory ON tblproduct.prod_category = tblcategory.id";
				if($limit!=='' && $offset!=='')
				{ 
			      $query.="  LIMIT  $offset , $limit";
 				}
			$stmt = $this->conn->prepare($query) or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
				return $result;
			}
			else
			{
								return false;

			}
		}
	

		public function delete($id){
			$stmt = $this->conn->prepare("Delete FROM tblcategory where id=".$id) or die($this->conn->error);
			if($stmt->execute()){
				$stmt1=$this->conn->prepare("Delete FROM tblproduct where prod_category=".$id) or die($this->conn->error);
				    $stmt1->execute();
				    $result =true;
				return $result;
			}
			else
			{
				return false;
			}

		}
		public function delete_prod($id){
			$stmt = $this->conn->prepare("Delete FROM tblproduct where id=".$id) or die($this->conn->error);
			if($stmt->execute()){
				$result =true;
				return $result;
			}
			else
			{
			return false;

			}
		}
		
		public function get_data($id){
			// print_r($id);die();
			$stmt = $this->conn->prepare("SELECT * FROM tblcategory where id=".$id) or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
				// $row=mysqli_fetch_array($result);
				// print_r($result);die();
				return $result;
			}
			else
			{
								return false;

			}
		}
		public function get_prod_data($id){
			// print_r($id);die();
			$stmt = $this->conn->prepare("SELECT * FROM tblproduct where id=".$id) or die($this->conn->error);
			if($stmt->execute()){
				$result = $stmt->get_result();
				// $row=mysqli_fetch_array($result);
				// print_r($result);die();
				return $result;
			}
			else
			{
								return false;

			}
		}
        public function delete_cate_all($data){
			$stmt = $this->conn->prepare("Delete FROM tblcategory where id IN (".$data.")") or die($this->conn->error);
			if($stmt->execute()){
				$stmt1=$this->conn->prepare("Delete FROM tblproduct where prod_category IN (".$data.")") or die($this->conn->error);
				    $stmt1->execute();
				    $result =true;
				return $result;
			}
			else
			{
				return false;
			}

		}
		public function delete_prod_all($data){
			// print_r($data);die();
			$stmt = $this->conn->prepare("Delete FROM tblproduct where id IN (".$data.")") or die($this->conn->error);
			if($stmt->execute()){
				
				$result =true;
				return $result;
			}
			else
			{
				return false;
			}

		}



 	}	
?>