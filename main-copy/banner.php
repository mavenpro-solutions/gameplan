<?php $indicator = $args['indicator']; ?>
<?php $banner = get_field('banner'); ?>
<div class="relative h-screen min-h-[800px] overflow-hidden hero-swiper">
  <!-- =================================== -->
  <!-- 2. HERO SLIDER CONTAINER          -->
  <!-- =================================== -->
  <div class="swiper-wrapper">
    <?php foreach ($banner as $index => $item) { ?>
      <div class="swiper-slide hero-slide" data-slide="0">
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('<?php echo $item['image']['url']; ?>')"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <!-- Slide 1 Content -->
        <div class="relative z-10 h-full w-full flex flex-col justify-end">
          <div class="container mx-auto px-12 pb-32 sm:pb-40 md:pb-32">
            <div class="max-w-2xl">
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide text-white">
                <?php echo $item['title']; ?>
              </h1>
				<br>
				
              <?php if ($item["button"]["label"]) { ?>
                <a href="<?php echo $item['button']['link']; ?>"
                  class="mt-6 md:mt-8 bg-accent-red-alt hover:bg-opacity-90 text-white font-bold py-3 px-10 text-base md:text-lg rounded-md transition-colors">
                  <?php echo $item['button']['label']; ?>
                </a>
              <?php } ?>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>

  </div>

  <div class="absolute inset-0 z-20 pointer-events-none">
    <!-- Left-side Slider Indicators (Now the Swiper Pagination) -->
    <div class="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 pointer-events-auto">
      <div class="hero-pagination">
        <!-- Swiper will generate pagination bullets here -->
      </div>
    </div>

    <!-- Right-side Slider Arrows (Now the Swiper Navigation) -->
    <div class="hidden lg:flex absolute bottom-35 md:bottom-32 right-6 sm:right-10 md:right-16 pointer-events-auto">
      <div class="flex space-x-6">
        <button id="prev-slide" class="hero-button-prev">
          <i class="ti ti-chevron-left text-4xl md:text-6xl"></i>
        </button>
        <button id="next-slide" class="hero-button-next">
          <i class="ti ti-chevron-right text-4xl md:text-6xl"></i>
        </button>
      </div>
    </div>

    <?php if ($indicator) { ?>
      <div class="relative z-10 h-full w-full flex flex-col justify-end pt-10 md:pb-8 pb-4">
        <p class="md:text-4xl text-xl text-center">Explore Our Landmarks</p>
        <i class="ti ti-chevrons-down text-4xl md:text-6xl mx-auto mt-2 animate-bounce"></i>
      </div>
    <?php } ?>
  </div>
</div>