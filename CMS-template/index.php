<?php
defined('_JEXEC') or die;
$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$menu = $app->getMenu();
$lang = JFactory::getLanguage();

$template_url = $this->baseurl . '/templates/' . $this->template;
$doc->addStyleSheet($template_url . '/css/style.css');


const MAIN_PAGE_ID = 37;
$articleId = JFactory::getApplication()->input->get('id');
$isMainPage = $articleId == MAIN_PAGE_ID;

if ($isMainPage) {
	$doc->addStyleSheet($template_url . '/css/index.css');
} else {
	$doc->addStyleSheet($template_url . '/css/other.css');
}

$doc->addScript($template_url . '/js/snap.svg-min.js');
$doc->addScript($template_url . '/js/parallax.min.js');
//$doc->addScript("https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js");

$is_home_page = $menu->getActive() == $menu->getDefault($lang->getTag());
$app = JFactory::getApplication();
$templateparams = $app->getTemplate(true)->params;
?>

<!doctype html>
<html>
<head>
	<script>JOOMLA_BASE_URL = "<?=JURI::base()?>"</script>
    <jdoc:include type="head"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
	<jdoc:include type="modules" name="form-window"/>
	<header class="header clearFix">
		<div class="wrapper-info-line">
			<div class="info_line">
				<div class="social_find">
					<div class="social">
						<jdoc:include type="modules" name="top-icon-social"/>
					</div>
					<div class="find">
						<jdoc:include type="modules" name="top-search"/>
					</div>
				</div>

				<div class="lang clearFix">
					<jdoc:include type="modules" name="icon-lang"/>
				</div>
			</div>
		</div>

		<div class="main clearFix parallax-window" data-parallax="scroll" data-image-src="<?php echo $template_url.'/img/bg.jpg' ?>">
			<svg class="circle_anim"></svg>
			<div class="logo_info clearFix">
				<div class="logo">
					<a href="rdo.org.ua"><img src="<?php echo $template_url.JText::_('TPL_RDO_LOGO_URL');?>" alt="<?php echo JText::_('TPL_RDO_LOGO');?>"></a>
				</div>
			</div>
			<jdoc:include type="modules" name="svg-header"/>
		</div>

		<div class="navigation clearFix">
			<menu>
				<div class="topmenu">
					<jdoc:include type="modules" name="menu"/>
				</div>
			</menu>
		</div>
	</header>

	<div class="wrapper">
		<main class="content clearFix">
			<jdoc:include type="component"/>
		</main>
	</div>

	<?php 
		$phones = explode ("\n", htmlspecialchars($templateparams->get('phone')));
		$emailes = explode ("\n", htmlspecialchars($templateparams->get('email')));
	?>
	
	
	<footer  id="footer" class="footer_wrapper parallax-window" data-parallax="scroll" data-image-src="<?php echo $template_url.'/img/bg.jpg' ?>">
		<div class="info_company clearFix">
			<div class="center_align clearFix">
				<div class="information_wrapper left-float">
					<div class="chapter_block">
						<span class="iconField icon-pointer"></span><span class="description"><?php echo JText::_('TPL_RDO_ADDRESS');?></span>
						<span class="info address"><?php echo JText::_('TPL_RDO_ADDRESS1');?></span>
					</div>
					<div class="chapter_block">
						<span class="iconField icon-phone"></span><span class="description"><?php echo JText::_('TPL_RDO_PHONE');?></span>
						<?php 
							foreach ($phones as $value) { ?>
								<span class="info elementMore"><? echo $value; ?></span> <?

							}
						?>
					</div>
					<div class="chapter_block">
						<span class="iconField icon-mail"></span><span class="description"><?php echo JText::_('TPL_RDO_EMAIL');?></span>
						<?php 
							foreach ($emailes as $value) { ?>
								<span class="info email elementMore"><? echo $value; ?></span> <?

							}
						?>
					</div>
				</div>
				<div class="find_wrapper left-float">
					<span class="description"><?php echo JText::_('TPL_RDO_SEARCH');?></span>
					<jdoc:include type="modules" name="bottom-search"/>
				</div>
				<div class="menu_wrapper left-float clearFix">
					 <jdoc:include type="modules" name="bottom-menu"/>
				 </div>
			</div>
		</div>
		<div class="maps_company clearFix">
			<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.2594783024826!2d30.749394752597812!3d46.45822777192601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x79d90fbe2de01add!2z0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLQvdCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGP!5e0!3m2!1sru!2sua!4v1443031188968" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
		</div>
	</footer>
</body>
</html>