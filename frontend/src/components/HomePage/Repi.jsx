import React from "react";

const Repi = () => {
  return (
    <div class="bg-[#022c43] min-h-screen text-white">
      <div class="w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-12">
        <header class="flex justify-between items-center mb-12">
          <div class="flex items-center gap-3">
            <h1 class="text-3xl font-bold bg-orange-500 bg-clip-text text-transparent">
              <i class="fas fa-fire text-red-500"></i> Repi
            </h1>
          </div>
          <button class="bg-gradient-to-r from-red-500 to-red-400 hover:bg-opacity-80 transition-all text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
            <i class="fas fa-plus"></i> Create Repi
          </button>
        </header>

        <div class="mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-300 h-[500px] relative">
              <img
                src="/api/placeholder/400/500"
                alt="Recipe Video"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />

              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="/api/placeholder/40/40"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <span class="font-semibold">ChefMaster</span>
                </div>

                <p class="text-sm text-gray-200 mb-4">
                  Quick and easy homemade pizza recipe that's perfect for
                  weeknight dinners! #pizza #homemade #quickrecipes
                </p>

                <div class="flex justify-between items-center">
                  <div class="flex gap-5">
                    <button class="flex flex-col items-center text-xs">
                      <i class="fas fa-heart text-lg hover:text-red-500 hover:scale-125 transition-all"></i>
                      <span>8.2K</span>
                    </button>
                    <button class="flex flex-col items-center text-xs">
                      <i class="fas fa-comment text-lg hover:text-red-500 hover:scale-125 transition-all"></i>
                      <span>310</span>
                    </button>
                    <button class="flex flex-col items-center text-xs">
                      <i class="fas fa-share text-lg hover:text-red-500 hover:scale-125 transition-all"></i>
                      <span>Share</span>
                    </button>
                  </div>
                  <button class="rounded-full p-2 hover:bg-white/20 transition-colors">
                    <i class="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div class="absolute bottom-24 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <i class="fas fa-music animate-music-spin"></i>
                <span class="truncate max-w-[100px]">
                  Cooking Beats - ChefTunes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="bg-gradient-to-r from-red-500 to-red-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            Explore More Recipes <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Repi;
