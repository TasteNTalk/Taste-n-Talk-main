import React from "react";

const Favorite = () => {
  return (
    <div class="bg-[#002140] text-gray-800 font-sans">
      <div class="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div class="mb-10 animate-fade-up">
          <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-orange-400 after:mt-2">
            Favorite <span class="text-orange-400">Chefs & Creators</span>
          </h1>
          <p class="text-gray-200 text-lg md:text-xl max-w-3xl">
            Follow your favorite chefs and creators for recipe inspiration,
            cooking tips, and exclusive content
          </p>
        </div>
        <div class="bg-gradient-to-tr from-black via-black/60 to-transparent rounded-2xl overflow-hidden shadow-2xl mb-12 p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-white">Discover & Filter</h2>
            <div class="flex items-center gap-2">
              <button class="group inline-flex items-center gap-2 bg-[#ff4d4d] text-white py-2 px-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:text-[#ff4d4d]">
                <i class="fas fa-sort"></i>
                <span>Sort By</span>
              </button>
              <button class="bg-black/30 w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-white/10">
                <i class="fas fa-ellipsis-v text-white"></i>
              </button>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 mb-6">
            <div class="px-4 py-2 bg-[#ff4d4d] text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              All Favorites
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Premium Chefs
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Newly Added
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Most Active
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Popular Recipes
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Course Instructors
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Tiffin Providers
            </div>
            <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
              Local Chefs
            </div>
          </div>

          <div>
            <h3 class="text-xs font-bold text-gray-400 uppercase mb-3">
              CUISINE TYPE
            </h3>
            <div class="flex flex-wrap gap-3">
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Indian
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Italian
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Chinese
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Mexican
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Thai
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Mediterranean
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                Japanese
              </div>
              <div class="px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-[#ff4d4d]">
                More...
              </div>
            </div>
          </div>
        </div>
        <div class="mb-16">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block after:content-[''] after:block after:w-1/4 after:h-1 after:bg-orange-400 after:mt-2">
            Featured Creators
          </h2>

          <div class="overflow-x-auto pb-4 -mx-2">
            <div class="flex gap-6 min-w-max px-2">
              <div class="w-96 bg-gradient-to-r from-black/40  to-red-500 rounded-2xl p-5 relative overflow-hidden shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div class="absolute top-0 right-0 bg-white text-red-500 font-bold py-1 px-4 rounded-bl-lg shadow-md">
                  FEATURED
                </div>

                <div class="flex items-start">
                  <div class="mr-4">
                    <div class="w-24 h-24 rounded-xl border-4 border-white overflow-hidden shadow-lg group-hover:scale-105 transition duration-300">
                      <img
                        src="/api/placeholder/100/100"
                        alt="Chef Avatar"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div class="flex-1 text-white">
                    <div class="flex items-center mb-2">
                      <h3 class="text-xl font-bold mr-2">
                        Chef Maria Rodriguez
                      </h3>
                      <i class="fas fa-certificate text-yellow-300"></i>
                    </div>
                    <p class="text-sm mb-3">
                      Award-winning chef specializing in fusion cuisine with 15+
                      years of experience
                    </p>
                    <div class="flex flex-wrap gap-2 mb-3">
                      <span class="bg-white/20 px-2 py-1 rounded-full text-xs">
                        Mexican
                      </span>
                      <span class="bg-white/20 px-2 py-1 rounded-full text-xs">
                        Asian Fusion
                      </span>
                      <span class="bg-white/20 px-2 py-1 rounded-full text-xs">
                        Premium
                      </span>
                    </div>
                    <div class="flex items-center gap-3 text-sm">
                      <div>
                        <i class="fas fa-user-friends mr-1"></i> 256K
                      </div>
                      <div>
                        <i class="fas fa-utensils mr-1"></i> 127 recipes
                      </div>
                      <div>
                        <i class="fas fa-graduation-cap mr-1"></i> 9 courses
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-between items-center">
                  <div class="text-white">
                    <i class="fas fa-crown mr-1"></i> #1 Most Popular This Month
                  </div>
                  <button class="group inline-flex items-center gap-2 bg-white text-red-500 py-2 px-4 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-red-500 hover:text-white">
                    <span>Visit Profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block after:content-[''] after:block after:w-1/4 after:h-1 after:bg-orange-400 after:mt-2">
            My Favorite Creators
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
              <div class="h-32 relative">
                <img
                  src="/api/placeholder/400/128"
                  alt="Creator Cover"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold py-1 px-2 rounded shadow">
                  Featured Creator
                </div>
                <div class="absolute -bottom-10 left-4 w-20 h-20 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/api/placeholder/80/80"
                    alt="Creator Avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div class="pt-12 p-4">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-white">
                      Chef Alessandro
                    </h3>
                    <div class="text-sm text-gray-400">
                      Italian Cuisine Specialist
                    </div>
                  </div>
                  <button class="bg-[#ff4d4d] text-white px-3 py-2 rounded-full text-sm flex items-center gap-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <i class="fas fa-heart"></i> Favorited
                  </button>
                </div>

                <div class="flex flex-wrap gap-1 mb-4">
                  <span class="bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-2 py-1 rounded-full">
                    Premium
                  </span>
                  <span class="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full">
                    Italian
                  </span>
                  <span class="bg-green-500/20 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                    Pasta Expert
                  </span>
                </div>

                <div class="flex justify-between text-sm text-gray-400 mb-4">
                  <div>
                    <i class="fas fa-utensils mr-1"></i> 78 Recipes
                  </div>
                  <div>
                    <i class="fas fa-user-friends mr-1"></i> 125K Followers
                  </div>
                </div>

                <div class="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div class="flex items-center text-amber-400">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span class="ml-1 text-gray-400 text-sm">4.7</span>
                  </div>
                  <button class="group inline-flex items-center gap-1 bg-white/10 text-white py-1 px-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#002140]">
                    <span>View Profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
              <div class="h-32 relative">
                <img
                  src="/api/placeholder/400/128"
                  alt="Creator Cover"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold py-1 px-2 rounded shadow">
                  Trending
                </div>
                <div class="absolute -bottom-10 left-4 w-20 h-20 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/api/placeholder/80/80"
                    alt="Creator Avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div class="pt-12 p-4">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-white">Chef Hiroshi</h3>
                    <div class="text-sm text-gray-400">
                      Japanese Cuisine Expert
                    </div>
                  </div>
                  <button class="bg-[#ff4d4d] text-white px-3 py-2 rounded-full text-sm flex items-center gap-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <i class="fas fa-heart"></i> Favorited
                  </button>
                </div>

                <div class="flex flex-wrap gap-1 mb-4">
                  <span class="bg-red-500/20 text-red-300 text-xs font-semibold px-2 py-1 rounded-full">
                    Trending
                  </span>
                  <span class="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full">
                    Japanese
                  </span>
                  <span class="bg-purple-500/20 text-purple-300 text-xs font-semibold px-2 py-1 rounded-full">
                    Sushi Master
                  </span>
                </div>

                <div class="flex justify-between text-sm text-gray-400 mb-4">
                  <div>
                    <i class="fas fa-utensils mr-1"></i> 64 Recipes
                  </div>
                  <div>
                    <i class="fas fa-user-friends mr-1"></i> 203K Followers
                  </div>
                </div>

                <div class="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div class="flex items-center text-amber-400">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="ml-1 text-gray-400 text-sm">4.9</span>
                  </div>
                  <button class="group inline-flex items-center gap-1 bg-white/10 text-white py-1 px-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#002140]">
                    <span>View Profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-12">
            <button class="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span>Load More Creators</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
