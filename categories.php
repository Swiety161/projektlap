<?php
	ob_start();
	//Loading core of application
		require_once("_core/kernel.php");
		$kernel = new kernel();

	//Loading settings of application
		$kernel->load_module("settings");
			require_once("_core/rewrite.php");
		$kernel->load_module("manager");
		$kernel->load_module("ads");
		$kernel->load_module("users");
		$kernel->load_module("inbox");
	//Loading main theme
		$page = $kernel->settings;
		$theme = $page->load('theme');
		$img = $kernel->manager;
		$ads = $kernel->ads;
		$user = $kernel->users;
		$inbox = $kernel->inbox;
		$cat = @$img->getObjects("#CATEGORY#",0,1,1,$_GET['id']);
		$allowed = 'page,theme,img,ads,user,cat,inbox,rewrite';

	//Loading functions of user
		$user->sessionTools();
	//Including header of theme
		$kernel->load_content("_themes/".$theme."/header.php", $allowed);
	//Including content of theme
		$kernel->load_content("_themes/".$theme."/categories.php", $allowed);
	//Including footer of theme
		$kernel->load_content("_themes/".$theme."/footer.php", $allowed);
	ob_end_flush();
?>