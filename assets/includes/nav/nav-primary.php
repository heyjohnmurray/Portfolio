<nav class="nav-primary js-nav">
	<ul>
		<li><a href="/" class="nav-close js-nav-close"><i class="icon-cancel"></i> Close</a></li>
	<? if(stristr($_SERVER['REQUEST_URI'], "/index.php")) { ?>
		<li><a href="/">Home</a></li>
		<li><a href="#portfolio-section">My Portfolio</a></li>
		<li><a href="process.php">My Process</a></li>
		<li><a href="#about-section">About Me</a></li>
		<li><a href="#contact-section">Contact Me</a></li>
	<? } else { ?>
		<li><a href="/">Home</a></li>
		<li><a href="index.php#portfolio-section">My Portfolio</a></li>
		<li><a href="process.php">My Process</a></li>
		<li><a href="index.php#about-section">About Me</a></li>
		<li><a href="index.php#contact-section">Contact Me</a></li>
	<?	} ?>
	</ul>
	<div class="name-logo">
		<div class="title">
			<span class="capital">J</span>ohn Murray
		</div>
	</div>
	<!-- /.description -->
</nav>
<!-- / .nav-primary -->