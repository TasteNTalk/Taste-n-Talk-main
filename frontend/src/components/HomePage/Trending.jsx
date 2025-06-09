import React from "react";

const Trending = () => {
  return (
    <div class="bg-[#022c43] min-h-screen font-serif text-[#e2e4d6] m-0 p-0 box-border ml-[70px] -mt-[60px]">
      <div class="ml-64 mt-24 p-5 w-[calc(100%-16rem)] md:ml-0 md:w-full md:mt-5">
        <div class="bg-trending-gradient rounded-2xl p-6 mt-5 shadow-2xl relative overflow-hidden text-white">
          <div class="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-shine-gradient rotate-[25deg] animate-shine"></div>
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-2xl font-extrabold flex items-center gap-2.5">
              <span class="inline-block h-4 w-4 bg-white rounded-full shadow-lg animate-pulse"></span>
              What's Trending Today
            </h2>
            <button class="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#002140] hover:text-white hover:translate-y-[-2px]">
              View All
            </button>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            id="trendingRecipesContainer"
          >
            <div
              class="bg-white bg-opacity-15 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 relative border border-white border-opacity-20 hover:transform hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              onclick="openBlogDetail(this, 'recipe')"
              data-title="Perfect Pasta Carbonara"
              data-author="Chef Marcello"
              data-time="23 min"
              data-views="12.5K"
              data-likes="5.2K"
              data-comments="328"
              data-category="Italian Cuisine"
              data-date="April 5, 2025"
              data-badge="Top Rated"
              data-badge-color="#ff4d4d"
            >
              <span class="absolute top-2.5 right-2.5 bg-[#ff4d4d] text-white py-1 px-2.5 rounded-full text-xs font-semibold z-10 shadow-md">
                Top Rated
              </span>
              <img
                src="/api/placeholder/400/250"
                alt="Pasta Carbonara"
                class="h-[180px] w-full object-cover border-b border-white border-opacity-20"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1 text-white">
                  Perfect Pasta Carbonara
                </h3>
                <div class="flex justify-between text-sm text-white text-opacity-80">
                  <span>By Chef Marcello</span>
                  <span>23 min</span>
                </div>
                <div class="flex mt-2.5 gap-4 text-white text-opacity-90 text-sm">
                  <div class="flex items-center gap-1">
                    <i class="fas fa-eye"></i>
                    <span>12.5K</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-heart"></i>
                    <span>5.2K</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-comment"></i>
                    <span>328</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-food-gradient rounded-2xl p-6 mt-10 shadow-2xl relative overflow-hidden text-white">
          <div class="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-shine-gradient rotate-[25deg] animate-shine"></div>
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-2xl font-extrabold flex items-center gap-2.5">
              <span class="inline-block h-4 w-4 bg-white rounded-full shadow-lg animate-pulse"></span>
              Top Food Trends
            </h2>
            <button class="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#002140] hover:text-white hover:translate-y-[-2px]">
              Explore All
            </button>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            id="foodTrendsContainer"
          >
            <div
              class="bg-white bg-opacity-15 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 relative border border-white border-opacity-20 hover:transform hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              onclick="openBlogDetail(this, 'trend')"
              data-title="Birria Tacos"
              data-category="Mexican Cuisine"
              data-views="1.2M"
              data-recipes="5,892"
              data-trend="Trending Up"
              data-badge="Hot"
              data-badge-color="#ff4d4d"
              data-date="March 28, 2025"
            >
              <span class="absolute top-2.5 right-2.5 bg-[#ff4d4d] text-white py-1 px-2.5 rounded-full text-xs font-semibold z-10 shadow-md">
                Hot
              </span>
              <img
                src="/api/placeholder/400/250"
                alt="Birria Tacos"
                class="h-[180px] w-full object-cover border-b border-white border-opacity-20"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1 text-white">Birria Tacos</h3>
                <div class="flex justify-between text-sm text-white text-opacity-80">
                  <span>Mexican Cuisine</span>
                  <span>1.2M views</span>
                </div>
                <div class="flex mt-2.5 gap-4 text-white text-opacity-90 text-sm">
                  <div class="flex items-center gap-1">
                    <i class="fas fa-utensils"></i>
                    <span>5,892 recipes</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-fire"></i>
                    <span>Trending Up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-chef-gradient rounded-2xl p-6 mt-10 shadow-2xl relative overflow-hidden text-white">
          <div class="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-shine-gradient rotate-[25deg] animate-shine"></div>
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-2xl font-extrabold flex items-center gap-2.5">
              <span class="inline-block h-4 w-4 bg-white rounded-full shadow-lg animate-pulse"></span>
              Trending Chefs to Follow
            </h2>
            <button class="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#002140] hover:text-white hover:translate-y-[-2px]">
              View All Chefs
            </button>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            id="trendingChefsContainer"
          >
            <div
              class="bg-white bg-opacity-15 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 relative border border-white border-opacity-20 hover:transform hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              onclick="openBlogDetail(this, 'chef')"
              data-title="Chef Marco Rodriguez"
              data-specialty="Spanish Cuisine Expert"
              data-followers="1.5M"
              data-videos="182"
              data-rating="4.9"
              data-badge="Top Creator"
              data-bio="Chef Marco Rodriguez is a renowned culinary expert specializing in authentic Spanish cuisine. With over 15 years of experience in top restaurants across Madrid and Barcelona, he brings traditional Spanish flavors to home cooks worldwide."
              data-date="March 15, 2025"
            >
              <img
                src="/api/placeholder/400/250"
                alt="Chef Marco Rodriguez"
                class="h-[180px] w-full object-cover border-b border-white border-opacity-20"
              />
              <div class="p-4">
                <h3 class="font-bold text-lg mb-1 text-white">
                  Chef Marco Rodriguez
                </h3>
                <div class="flex justify-between text-sm text-white text-opacity-80">
                  <span>Spanish Cuisine Expert</span>
                  <span>1.5M followers</span>
                </div>
                <div class="flex mt-2.5 gap-4 text-white text-opacity-90 text-sm">
                  <div class="flex items-center gap-1">
                    <i class="fas fa-video"></i>
                    <span>182 videos</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-star"></i>
                    <span>4.9 rating</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-award"></i>
                    <span>Top Creator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
