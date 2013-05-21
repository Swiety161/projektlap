  <!-- Begin Content -->
  <div id="content">
	<!-- Begin Block -->
	<?php echo $img->getObject('
	<div class="block">
		<!-- Begin Object -->
		<div class="[video=yt]object">
			[object url=#]
		</div>
		<!-- End Object -->
		'.($page->load('object_title')?'<h2><span>#TITLE#</span></h2>':'').'
		<!-- Begin Info -->
		<ul class="info">
				<span class="prawa">
					<a href="#" class="thumb_up" onClick="vote_up(#ID#); return false;">dobre</a>
					#VOTE#
					<a href="#" class="thumb_down" onClick="vote_down(#ID#); return false;">słabe</a>
				</span>
		</ul>
		<!-- End Info -->
		<!-- Begin Share -->
		<div class="share">
			<div class="addthis_toolbox addthis_default_style " 
				addthis:title="#TITLE# - '.$page->load('title').'"
				addthis:url="'.$rewrite->img("#ID#", "#REWRITE-TITLE#").'"
				addthis:description="'.$page->load('description').'"
				addthis:screenshot="#SCREENSHOT#"> 
		<span class="lewa">
		<fb:like href="'.$rewrite->img("#ID#").'" show_faces="true" width="450"></fb:like>
		</span>
	<a href="http://facebook.com/sharer/sharer.php?u=http://www.niesmutaj.pl"target="_blank" style="top: 236px; left: 199px;"><img src="/_themes/fejkkk/img/sharefb.png" height="32px"></a>
			  </div> 
		</div>
		<!-- End Share -->
		<div style="clear: both;"></div>
		</div>
		#MOD_TOOLS#', $_GET['id']); ?>
	<!-- End Block -->
	<!-- Begin Block -->
	  <div class="block" id="comments">
			<?php $img->comments('
				<div id="fb-root"></div>
				<div class="fb-comments" data-href="#URL#" data-num-posts="4" data-width="700" data-colorscheme="light"></div>', $page->load('comments'));
			?>
	  </div>
  </div>
  <!-- End Content -->