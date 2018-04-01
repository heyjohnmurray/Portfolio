<nav class="nav-primary js-nav">
	<ul>
		<li><a href="/" class="nav-close js-nav-close"><i class="icon-cancel"></i> Close</a></li>
	<? if(stristr($_SERVER['REQUEST_URI'], "/index.php")) { ?>
		<li><a href="/">Home</a></li>
		<li><a href="/#portfolio-section">Portfolio</a></li>
		<li><a href="/#about-section">About</a></li>
		<li><a href="/design-leadership.php">Design Leadership</a></li>
		<li><a href="/design-thinking.php">Design Thinking</a></li>
		<li><a href="/design-mentorship.php">Mentorship</a></li>
		<li><a href="/#contact-section">Contact</a></li>
	<? } else { ?>
		<li><a href="/">Home</a></li>
		<li><a href="/index.php#portfolio-section">Portfolio</a></li>
		<li><a href="/design-leadership.php">Design Leadership</a></li>
		<li><a href="/design-thinking.php">Design Thinking</a></li>
		<li><a href="/design-mentorship.php">Mentorship</a></li>
		<li><a href="/index.php#contact-section">Contact</a></li>
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