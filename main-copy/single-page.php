<?php get_header(); ?>
<?php get_template_part('template-parts/banner'); ?>


<?php

$color = get_field('color');
$content = get_field('content');
?>

<section class="py-16 md:py-20" style="background-color: <?php echo $color['primary']; ?>">
  <div class="container mx-auto px-6 md:px-10 max-w-7xl">
    <h1 class="text-4xl font-semibold uppercase tracking-widest mb-6"
      style="color: <?php echo $color['secondary']; ?>;">
      <?php the_title(); ?>
    </h1>
    <p class="text-2xl leading-relaxed text-black">
      <?php the_content(); ?>
    </p>
  </div>
</section>


<?php if ($content['title'] || $content['description'] || $content['bullets']) { ?>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-6 md:px-10 max-w-7xl">
      <?php if ($content['title']) { ?>
        <h2 class="text-4xl font-bold mb-8" style="color: <?php echo $color['secondary']; ?>;">
          <?php echo $content['title']; ?>
        </h2>
      <?php } ?>
      <?php if ($content['bullets']) { ?>
        <ul class="list-styled">
          <?php foreach ($content['bullets'] as $bullet) { ?>
            <li>
              <?php echo $bullet['text']; ?>
            </li>
          <?php } ?>
        </ul>
      <?php } ?>
      <?php if ($content['description']) { ?>
        <div class="text-zinc-800 text-2xl leading-relaxed space-y-6">
          <?php echo $content['description']; ?>
        </div>
      <?php } ?>
    </div>
  </section>
<?php } ?>

<?php if ($content["gallery"]) { ?>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-6 md:px-10 max-w-7xl">
      <div class="space-y-24">
        <?php foreach ($content["gallery"] as $item) { ?>
          <?php $has_image = $item["image"] ?>
          <article class="artist-post">
            <div
              class="grid grid-cols-1 gap-8 md:gap-12 items-start <?php echo $has_image ? 'md:grid-cols-[1.5fr_1fr]' : ''; ?>">
              <div class="flex flex-col">
                <h2 class="text-4xl font-bold uppercase tracking-widest" style="color: <?php echo $color['secondary']; ?>">
                  <?php echo $item['title']; ?>
                </h2>
                <a href="#" class="js-lightbox block relative group rounded-lg shadow-lg overflow-hidden mt-6"
                  data-type="video" data-src="https://www.youtube.com/embed/fBIE8wPv78s">
                  <img src="https://img.youtube.com/vi/fBIE8wPv78s/hqdefault.jpg" alt="Video thumbnail for Absolut Kher"
                    class="w-full aspect-video object-cover" />
                  <div
                    class="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
                    <svg class="w-20 h-20 text-white transform transition-transform group-hover:scale-110"
                      viewBox="0 0 165 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M160.831 18.0363C159.888 14.5502 158.047 11.372 155.494 8.81823C152.94 6.26445 149.762 4.42419 146.276 3.48071C133.513 0 82.1481 0 82.1481 0C82.1481 0 30.7804 0.105359 18.0178 3.58607C14.5317 4.52961 11.3535 6.36996 8.79982 8.92386C6.24615 11.4778 4.40608 14.6561 3.46284 18.1423C-0.397543 40.819 -1.89506 75.3729 3.56884 97.1424C4.51218 100.629 6.35229 103.807 8.90596 106.361C11.4596 108.914 14.6377 110.755 18.1238 111.698C30.8864 115.179 82.2529 115.179 82.2529 115.179C82.2529 115.179 133.619 115.179 146.381 111.698C149.867 110.755 153.045 108.914 155.599 106.361C158.153 103.807 159.993 100.629 160.936 97.1424C165.008 74.4337 166.263 39.9009 160.831 18.0363Z"
                        fill="#FF0000" />
                      <path d="M65.7988 82.2693L108.41 57.5882L65.7988 32.9072V82.2693Z" fill="white" />
                    </svg>
                  </div>
                </a>
              </div>
              <?php if ($has_image) { ?>
                <a href="<?php echo $item['image']['url']; ?>"
                  class="js-lightbox block rounded-lg shadow-lg overflow-hidden group my-4" data-type="image"
                  data-src="<?php echo $item['image']['url']; ?>">
                  <img src="<?php echo $item['image']['url']; ?>" alt="Artwork for <?php echo $item['title']; ?>"
                    class="w-full aspect-[5/5] object-cover" />
                </a>
              <?php } ?>
            </div>
            <div class="mt-8">
              <p class="text-zinc-800 text-2xl leading-relaxed max-w-none">
                <?php echo $item['description']; ?>
              </p>
            </div>
          </article>
        <?php } ?>
      </div>
    </div>
  </section>


<?php } ?>

<?php $has_social = $content['social']["facebook"] || $content['social']["instagram"] || $content['social']["youtube"] || $content['social']["x"]; ?>
<?php $has_website = $content['social']["website"]["url"]; ?>
<?php if ($has_social || $has_website) { ?>
  <section class="py-16 md:py-20" style="background-color: <?php echo $color['primary']; ?>">
    <div class="container mx-auto px-6 md:px-10 flex flex-col items-center gap-y-10">
      <!-- CTA Button -->
      <?php if ($has_website) { ?>
        <a href="<?php echo $content['social']["website"]["url"]; ?>"
          class="hover:bg-opacity-90 text-white font-bold py-3 px-10 text-base md:text-lg rounded-md transition-colors"
          style="background-color: <?php echo $color['secondary']; ?>;">
          <?php echo $content['social']["website"]["title"]; ?>
        </a>
      <?php } ?>

		<!-- Social Media Links -->
		<div class="flex flex-col items-center gap-y-4">

			<!-- Title -->
			<p class="font-semibold text-zinc-800 text-2xl text-center pb-4">
				Follow Event On :
			</p>

			<!-- Social Icons -->
		<div class="flex items-center gap-x-4 md:gap-x-6">
          <?php if ($content['social']["instagram"]) { ?>
            <a href="<?php echo $content['social']["instagram"]; ?>" class="hover:opacity-80 transition-opacity">
              <img src="<?php echo get_theme_file_uri('assets/images/logo/insta-logo.png'); ?>" alt="Instagram"
                class="w-9 h-9" />
            </a>
          <?php } ?>

          <?php if ($content['social']["facebook"]) { ?>
            <!-- Facebook -->
            <a href="<?php echo $content['social']["facebook"]; ?>" class="hover:opacity-80 transition-opacity">
              <img src="<?php echo get_theme_file_uri('assets/images/logo/facebook-logo.png'); ?>" alt="Facebook"
                class="w-9 h-9" />
            </a>
          <?php } ?>
          <?php if ($content['social']["linkedin"]) { ?>
            <!-- LinkedIn -->
            <a href="<?php echo $content['social']["linkedin"]; ?>" class="hover:opacity-80 transition-opacity">
              <img src="<?php echo get_theme_file_uri('assets/images/logo/linkedin-logo.png'); ?>" alt="LinkedIn"
                class="w-9 h-9" />
            </a>
          <?php } ?>

          <?php if ($content['social']["youtube"]) { ?>
            <!-- YouTube -->
            <a href="<?php echo $content['social']["youtube"]; ?>" class="hover:opacity-80 transition-opacity">
              <img src="<?php echo get_theme_file_uri('assets/images/logo/youtube-logo.png'); ?>" alt="YouTube"
                class="w-12 h-9" />
            </a>
          <?php } ?>
          <?php if ($content['social']["x"]) { ?>
            <!-- X (Twitter) -->
            <a href="<?php echo $content['social']["x"]; ?>" class="hover:opacity-80 transition-opacity">
              <img src="<?php echo get_theme_file_uri('assets/images/logo/x-logo.png'); ?>" alt="X (Twitter)"
                class="w-9 h-9" />
            </a>
          <?php } ?>
        </div>
      </div>
    </div>

  </section>
<?php } ?>



<?php get_footer(); ?>