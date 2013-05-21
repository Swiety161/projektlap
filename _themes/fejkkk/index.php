<!-- Begin Content -->
  <div id="content">
	<a href="http://www.niesmutaj.pl"><img src="/_themes/fejkkk/img/banner.png" alt="Niesmutaj.pl" />
  <div id="narrow">
	<!-- Begin Block -->
	<?php
	echo $img->getObjects('
	<div class="block">
		<!-- Begin Object -->
		<div class="[video=yt]object">
			[object url='.$rewrite->img("#ID#","#REWRITE-TITLE#").']
		</div>
		<!-- End Object -->
		'.($page->load('object_title')?'<h2><span><a href="'.$rewrite->img("#ID#","#REWRITE-TITLE#").'">#TITLE#</a></span></h2>':'').'
		<!-- Begin Info -->
		<ul class="info">
				<span class="lewa">
					<a href="#" class="thumb_up" onClick="vote_up(#ID#); return false;">dobre</a>
					#VOTE#
					<a href="#" class="thumb_down" onClick="vote_down(#ID#); return false;">słabe</a>
				</span>
		</ul>
		<!-- End Info -->
		<!-- Begin Share -->
		<div class="share">
		<span class="lewa">
		<fb:like href="'.$rewrite->img("#ID#").'" show_faces="true" width="450"></fb:like>
		</span>
	<a href="http://facebook.com/sharer/sharer.php?u=http://www.niesmutaj.pl"target="_blank" style="top: 236px; left: 199px;"><img src="/_themes/fejkkk/img/sharefb.png" height="32px"></a>
		</div>
		<!-- End Share -->
		<div style="clear: both;"></div>
	</div>
	#MOD_TOOLS#',0,@$_GET['page'],$page->load('objects_per_page'));
	echo '<div class="pagination">'.$img->pagination(' <a href="?page=#" class="square previous">&laquo;</a> ',' <a href="?page=#" class="square number">#</a> ', ' <span class="square current">#</span> ', ' <a href="?page=#" class="square next">&raquo;</a> ',$page->load('objects_per_page'),0,@$_GET['page']).'</div>';
	?>
	<!-- End Block -->
  </div>
  <!-- End Content -->
  </div>