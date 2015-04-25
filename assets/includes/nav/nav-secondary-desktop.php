<div class="row view-next-project js-view-next-project">
	<div class="column medium-3 mobile-link">
		<a href="index.php#portfolio-section">
			<i class="icon-th"></i>
			All Sites
		</a>
	</div>
	<!-- /.column -->
	<div class="column medium-4 mobile-link">
	<? if(stristr($_SERVER['REQUEST_URI'], "/hi-redesign.php")) { ?>
		<a href="att-mobile-site.php">
	<? } ?>
	<? if(stristr($_SERVER['REQUEST_URI'], "/att-mobile-site.php")) { ?>
		<a href="safeco-redesign.php">
	<? } ?>
	<? if(stristr($_SERVER['REQUEST_URI'], "/safeco-redesign.php")) { ?>
		<a href="quotes-hoi-redesign.php">
	<? } ?>
	<? if(stristr($_SERVER['REQUEST_URI'], "/quotes-hoi-redesign.php")) { ?>
		<a href="safeco-multi-test.php">
	<? } ?>
	<? if(stristr($_SERVER['REQUEST_URI'], "/safeco-multi-test.php")) { ?>
		<a href="metlife-auto-design.php">
	<? } ?>
			<i class="icon-briefcase"></i>
			Next Site
		</a>
	</div>
	<!-- /.column -->
</div>
<!-- /.row -->