import React from "react";

const Playlist = () => {
  return (
    <div class="bg-[#002140] min-h-screen p-6">
      <div class="max-w-7xl mx-auto mt-8">
        <div class="relative overflow-hidden bg-gradient-to-br from-[#1e76c846] via-[#002140] to-[#0b3052] rounded-2xl p-6 shadow-2xl border-t-4 border-gradient">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-white flex items-center">
              <i class="fas fa-utensils text-amber-400 mr-3"></i>My Recipe
              Collections
            </h2>
            <button class="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:translate-y-[-2px]">
              View All
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div class="col-span-1 sm:col-span-2 flex flex-col md:flex-row bg-gradient-to-br from-[#002140] via-[#6a5acd]/25 to-purple-800/5 rounded-xl overflow-hidden shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/api/placeholder/400/400"
                alt="Gourmet Desserts"
                class="w-full md:w-2/5 h-48 md:h-full object-cover"
              />
              <div class="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">
                    Gourmet Desserts
                  </h3>
                  <p class="text-white/80 mb-4">
                    My ultimate collection of beautiful dessert recipes that
                    will impress at any dinner party.
                  </p>
                  <div class="flex gap-4 mb-4 text-white/70 text-sm">
                    <div class="flex items-center gap-1">
                      <i class="fas fa-film"></i> 15 videos
                    </div>
                    <div class="flex items-center gap-1">
                      <i class="fas fa-clock"></i> 120 mins
                    </div>
                    <div class="flex items-center gap-1">
                      <i class="fas fa-heart"></i> 2.8k likes
                    </div>
                  </div>
                </div>
                <div class="flex gap-3">
                  <button class="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold transition hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2">
                    <i class="fas fa-play"></i> Watch Now
                  </button>
                  <button class="px-4 py-2 bg-transparent border-2 border-white/50 text-white rounded-full font-semibold transition hover:bg-white/10 hover:-translate-y-0.5 flex items-center gap-2">
                    <i class="fas fa-plus"></i> Add
                  </button>
                </div>
              </div>
            </div>

            <div class="relative group rounded-xl overflow-hidden shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-gradient-to-r from-blue-500/2 to-purple-500/5">
              <span class="absolute top-2 right-2 bg-white text-[#ff4d4d] text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md hover:bg-[#ff4d4d] hover:text-white">
                New
              </span>
              <div class="absolute inset-0  flex items-center justify-center hover:bg-gradient-to-r from-[#002140]/50 to-blue-500/20 hover:opacity-100 opacity-0 transition-opacity z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-[#002140] via-[#6a5acd]/25 to-purple-800/5 rounded-full flex items-center justify-center text-white text-3xl backdrop-blur-sm border-2 border-white/50 shadow-lg transition group-hover:scale-110">
                  <i class="fas fa-play"></i>
                </div>
              </div>
              <img
                src="/api/placeholder/400/400"
                alt="Healthy Breakfast Ideas"
                class="w-full aspect-square object-cover transition duration-500 group-hover:scale-110"
              />
              <div class="p-4 bg-gradient-to-br from-[#002140] via-[#6a5acd]/15 to-purple-800/5">
                <h3 class="text-lg font-bold text-white">
                  Healthy Breakfast Ideas
                </h3>
                <div class="flex justify-between text-white/70 text-sm mt-1">
                  <span>18 videos</span>
                  <span>60 mins</span>
                </div>
              </div>
            </div>
          </div>

          <button class="mt-8 px-6 py-3 bg-white text-[#ff4d4d] rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#ff4d4d] hover:text-white hover:translate-y-[-2px] hover:shadow-xl flex items-center gap-2 relative overflow-hidden group">
            <span class="absolute inset-0 bg-[#ff4d4d] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>

            <span class="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-in-out">
              <i class="fas fa-plus"></i> Create New Recipe Collection
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
