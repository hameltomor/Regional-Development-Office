<?php
defined('_JEXEC') or die;
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$menu = $app->getMenu();
$lang = JFactory::getLanguage();

$template_url = $this->baseurl . '/templates/' . $this->template;
$doc->addStyleSheet($template_url . '/css/style.css');
$doc->addScript($template_url . '/js/snap.svg-min.js');

$is_home_page = $menu->getActive() == $menu->getDefault($lang->getTag());
?>

<!doctype html>
<html>
<head>
    <jdoc:include type="head"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>

<div class="wrapper">
    <jdoc:include type="component"/>
</div>

<?php
    //$doc->addScript($template_url . '/js/module_navigations.js');
    //$doc->addScript($template_url . '/js/module_header.js');
?>

</body>
</html>