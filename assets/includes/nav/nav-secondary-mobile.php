<div class="toggle-nav-wrap">
	<div class="row collapse">
		<div class="column small-4 medium-2 mobile-link">
			<a href="index.php#portfolio-section">
				<i class="icon-th"></i>
				All Sites
			</a>
		</div>
		<!-- /.column -->
		<div class="column small-4 mobile-link">
		<? if(stristr($_SERVER['REQUEST_URI'], "/hi-redesign.php")) { ?>
			<a href="att-mobile-site.php">
				<i class="icon-briefcase"></i>
				Next Site
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/att-mobile-site.php")) { ?>
			<a href="safeco-redesign.php">
				<i class="icon-briefcase"></i>
				Next Site
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/safeco-redesign.php")) { ?>
			<a href="quotes-hoi-redesign.php">
				<i class="icon-briefcase"></i>
				Next Site
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/quotes-hoi-redesign.php")) { ?>
			<a href="safeco-multi-test.php">
				<i class="icon-briefcase"></i>
				Next Site
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/safeco-multi-test.php")) { ?>
			<a href="metlife-auto-design.php">
				<i class="icon-briefcase"></i>
				Next Site
			</a>
		<? } ?>
		</div>
		<!-- /.column -->
		<div class="column small-2">
			<a href="/" class="button-toggle-nav js-toggle-nav">
				<i class="icon-menu js-toggle-menu"></i>
				<span class="nav-label">Menu</span>
			</a>
			<!-- /.button-toggle-nav -->
		</div>
		<!-- /.column -->
	</div>
	<!-- /.row -->
</div>
<!-- /.toggle-nav-wrap -->