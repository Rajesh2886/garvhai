<?php //echo base_url(); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Garvhai</title>

    <!-- Bootstrap -->
    <link href="<?php echo base_url(); ?>assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/css/jquery.mCustomScrollbar.min.css" rel="stylesheet">
    
    <link href="<?php echo base_url(); ?>assets/css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <header class="main-header">
      <section class="top-header-wrpr clearfix">
        <div class="pull-left">
          <a href="#">
            <img src="<?php echo base_url(); ?>assets/img/logo.png" class="img-responsive">
          </a>
        </div>
        <div class="pull-right">
          <ul class="list-inline">
            <li class="vid-img-links"><a href="#" class="text-uppercase upper-links">Videos & images</a></li>
            <li><a href="#" class="text-uppercase upper-links">Media</a></li>
            <li class="tw-top-links"><a href="#" class="social-icon-top"><img src="<?php echo base_url(); ?>assets/img/fb-w.png"></a></li>
            <li><a href="#" class="social-icon-top"><img src="<?php echo base_url(); ?>assets/img/tw-w.png"></a></li>
          </ul>
        </div>
      </section>
      <section class="bottom-header-wrpr clearfix">
        <div class="menu-btn pull-left">
          <img src="<?php echo base_url(); ?>assets/img/menu-btn.png" class="menu-btn-img">
          <img src="<?php echo base_url(); ?>assets/img/menu-close.png" class="menu-close hidden">
        </div>
        <ul class="list-inline pull-right mob-menu-list">
          <li class="text-uppercase vid-img-links-mob"><a href="#">videos &amp; images</a></li>
          <li class="text-uppercase"><a href="#">media</a></li>
          <li><a href="#"><img src="<?php echo base_url(); ?>assets/img/adani.png"></a></li>
        </ul>
        <nav id="topNav" class="main-nav navbar-fixed-top">
          <ul class="nav navbar-nav">
            <li class="hidden-small">
              <a href="#"><img src="<?php echo base_url(); ?>assets/img/adani.png"></a>
            </li> 
            <li class="logo-li"><a href="#" data-href="#video-wrpr" class="page-scroll">
            <img src="<?php echo base_url(); ?>assets/img/logo.png" class="img-responsive">
          </a></li>
          <li class="search-wrpr-h search-wrpr-h-mob">
              <form class="top-search-form">
                <input type="text" class="search-inpt" placeholder="Search...">
                <button class="search-btn"><img src="<?php echo base_url(); ?>assets/img/search-icon.png"></button>
                <label class="animate-label"></label>
              </form>
            </li>
            <li ><a href="#" data-href="#hero-wrpr" class="text-uppercase page-scroll">players</a></li>
            <li><a href="#" data-href="#heros-gellary" class="text-uppercase page-scroll">upcoming talent</a></li>
            <li><a href="#" data-href="#about" class="text-uppercase page-scroll">about</a></li>
            <li><a href="#" data-href="#contact" class="text-uppercase page-scroll">contact</a></li>
            <li><a href="#" data-href="#media" class="text-uppercase page-scroll">media</a></li>
            <li class="hidden-small search-wrpr-h">
              <form class="top-search-form">
                <input type="text" class="search-inpt" placeholder="Search...">
                <button class="search-btn"><img src="<?php echo base_url(); ?>assets/img/search-icon.png"></button>
                <label class="animate-label"></label>
              </form>
            </li>
            <li class="socail-li"><a href="#"><img src="<?php echo base_url(); ?>assets/img/fb-b.png"></a></li>
            <li class="socail-li"><a href="#"><img src="<?php echo base_url(); ?>assets/img/tw-b.png"></a></li>                      
          </ul>
        </nav>
      </section>
    </header>