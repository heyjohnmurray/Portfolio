<!-- this needs work in the tablet-sized breakpoint -->
<div class="toggle-nav-wrap">
	<div class="row collapse">
		<div class="column small-4 medium-3 mobile-link">
			<a href="index.php#portfolio-section">
				<i class="icon-th"></i>
				All Projects
			</a>
		</div>
		<!-- /.column -->
		<div class="column small-4 mobile-link">
		<? if(stristr($_SERVER['REQUEST_URI'], "/hi-redesign.php")) { ?>
			<a href="att-mobile-site.php">
				<i class="icon-briefcase"></i>
				Next Project
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/att-mobile-site.php")) { ?>
			<a href="safeco-redesign.php">
				Next Project
				<i class="icon-briefcase"></i>
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/safeco-redesign.php")) { ?>
			<a href="quotes-hoi-redesign.php">
				<i class="icon-briefcase"></i>
				Next Project
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/quotes-hoi-redesign.php")) { ?>
			<a href="safeco-multi-test.php">
				<i class="icon-briefcase"></i>
				Next Project
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/safeco-multi-test.php")) { ?>
			<a href="metlife-auto-design.php">
				<i class="icon-briefcase"></i>
				Next Project
			</a>
		<? } ?>
		<? if(stristr($_SERVER['REQUEST_URI'], "/protected/ibm-swift.php")) { ?>
			asdf
			<a href="/protected/ibm-vmware.php">
				<i class="icon-briefcase"></i>
				Next Project
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