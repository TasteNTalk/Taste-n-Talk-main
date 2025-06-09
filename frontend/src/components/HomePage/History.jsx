import React from "react";

const History = () => {
  return (
    <div class="min-h-screen flex -mt-6">
      <div class="flex-1 rounded-tl-3xl rounded-bl-3xl overflow-hidden">
        <div class="max-w-7xl mx-auto p-6">
          <header class="flex justify-between items-center mb-8">
            <div class="flex items-center justify-between w-full px-6">
              <div class="relative group bg-orange-50 rounded-2xl outline-none">
                <input
                  type="text"
                  placeholder="Find amazing recipes..."
                  class="pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 shadow-lg w-72 focus:ring-4  focus:border-red-400 transition-all duration-300 group-hover:shadow-xl"
                />
                <i class="fas fa-search absolute left-3 top-3.5 text-red-400 group-hover:text-red-500 transition-colors"></i>
              </div>
              <div class="flex items-center gap-4">
                <div class="relative">
                  <button class="bg-white p-3 rounded-xl border-2 border-gray-200 shadow-lg hover:bg-red-50 hover:border-red-300 transition-all duration-300 group">
                    <i class="fas fa-bell text-gray-600 group-hover:text-red-500 transition-colors"></i>
                    <span class="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-lg animate-pulse">
                      3
                    </span>
                  </button>
                </div>

                <div class="group w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-red-500 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div class="bg-white w-full h-full rounded-lg flex items-center justify-center">
                    <i class="fas fa-cog text-gray-600 group-hover:text-red-500 transition-colors"></i>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class="mb-10 bg-gradient-to-r from-black via-black/60 to-transparent rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-20 -translate-y-32 translate-x-20"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 translate-y-32 -translate-x-20"></div>

            <div class="flex justify-between items-center mb-6 relative z-10">
              <div class="flex items-center gap-3">
                <div class="text-2xl bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text font-bold">
                  <i class="fas fa-bolt text-red-500 mr-2"></i>Repi
                </div>
              </div>
              <a
                href="#"
                class="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 group"
              >
                See all{" "}
                <i class="fas fa-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            <div class="flex gap-4 overflow-x-auto pb-6 scrollbar-hide relative z-10">
              <div class="flex-shrink-0 w-48 bg-gradient-to-b from-[#002140] to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/30 border border-gray-700 hover:border-red-500 transition-all duration-500 transform hover:-translate-y-2 group">
                <div class="relative w-full h-80">
                  <img
                    src="/api/placeholder/192/320"
                    alt="5-Minute Breakfast"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4">
                    <h3 class="text-white font-bold text-base mb-1">
                      5-Minute Breakfast Ideas
                    </h3>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <img
                          src="/api/placeholder/24/24"
                          alt="Creator"
                          class="w-5 h-5 rounded-full mr-1"
                        />
                        <span class="text-gray-300 text-xs">QuickMeals</span>
                      </div>
                      <span class="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                        0:45
                      </span>
                    </div>
                    <div class="flex items-center mt-2">
                      <span class="text-gray-300 text-xs mr-3">
                        <i class="fas fa-eye mr-1"></i> 3.8M
                      </span>
                      <span class="text-gray-300 text-xs">
                        <i class="fas fa-heart mr-1"></i> 245K
                      </span>
                    </div>
                  </div>
                  <div class="absolute top-3 right-3 cursor-pointer transition-transform duration-200 hover:scale-110">
                    <div class="bg-black/30 p-2 rounded-full">
                      <i class="fas fa-ellipsis-v text-white"></i>
                    </div>
                  </div>

                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-red-600">
                      <i class="fas fa-play text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mb-6 px-4 py-3 bg-gradient-to-r from-red-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h2 class="text-2xl font-bold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch History
            </h2>

            <div class="flex gap-2">
              <div class="relative group">
                <button class="bg-white hover:bg-red-500 hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300 flex items-center text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Today
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-300"
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
                <div class="absolute right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-48 hidden group-hover:block z-30">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-red-50 rounded-lg hover:text-red-500 transition-colors"
                  >
                    Today
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-red-50 rounded-lg hover:text-red-500 transition-colors"
                  >
                    Yesterday
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-red-50 rounded-lg hover:text-red-500 transition-colors"
                  >
                    Last 7 days
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-red-50 rounded-lg hover:text-red-500 transition-colors"
                  >
                    Last 30 days
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm hover:bg-red-50 rounded-lg hover:text-red-500 transition-colors"
                  >
                    All time
                  </a>
                </div>
              </div>

              <button class="bg-white hover:bg-blue-500 hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300 flex items-center text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filter
              </button>

              <button class="bg-white hover:bg-red-500 hover:text-white text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-300 flex items-center text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Clear
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 mb-12 w-full">
            <div class="flex flex-col gap-4 max-w-2xl mx-auto w-full">
              <div class="flex bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg border-l-4 border-red-500 h-40">
                <div class="w-52 h-full relative flex-shrink-0 overflow-hidden">
                  <img
                    src="/api/placeholder/210/160"
                    alt="Italian Pasta"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                    15:32
                  </div>
                  <div class="absolute inset-0 bg-opacity-0 hover:bg-black hover:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white transform scale-90 hover:scale-100 transition-transform duration-300 shadow-lg">
                      <i class="fas fa-play"></i>
                    </div>
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
                    <div class="h-full w-4/5 bg-red-500"></div>
                  </div>
                </div>
                <div class="p-4 flex-1 flex flex-col">
                  <div class="flex justify-between mb-1.5">
                    <h3 class="text-lg font-bold m-0 overflow-hidden text-ellipsis line-clamp-2 leading-tight">
                      Authentic Italian Pasta Carbonara
                    </h3>
                    <div>
                      <button class="text-gray-400 bg-transparent border-none cursor-pointer p-1 rounded-full hover:text-gray-600 hover:bg-gray-100 transition-all duration-200">
                        <i class="fas fa-ellipsis-v"></i>
                      </button>
                      <div class="text-xs text-gray-500 mt-0.5">
                        Today, 3:45 PM
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center my-2">
                    <img
                      src="/api/placeholder/24/24"
                      alt="Channel"
                      class="w-6 h-6 rounded-full mr-2"
                    />
                    <span class="text-sm text-gray-500">
                      Master Chef Italian
                    </span>
                    <span class="mx-1.5 text-gray-300">•</span>
                    <span class="text-xs text-gray-400">854K views</span>
                  </div>
                  <p class="text-sm text-gray-500 my-1 overflow-hidden text-ellipsis line-clamp-2 leading-relaxed">
                    Learn how to make the perfect authentic Italian carbonara
                    with just 5 ingredients. No cream needed for this classic
                    recipe!
                  </p>
                  <div class="flex gap-2 mt-auto">
                    <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-500">
                      Italian
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-500">
                      Watched 80%
                    </span>
                    <button class="ml-auto text-sm font-medium flex items-center gap-1 bg-transparent border-none cursor-pointer text-red-500 transition-all duration-200">
                      Watch again{" "}
                      <i class="fas fa-arrow-right transition-transform duration-300 hover:translate-x-0.5"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg border-l-4 border-purple-500 h-40">
                <div class="w-52 h-full relative flex-shrink-0 overflow-hidden">
                  <img
                    src="/api/placeholder/210/160"
                    alt="Quick Breakfast"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                    4:17
                  </div>
                  <div class="absolute inset-0 bg-opacity-0 hover:bg-black hover:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white transform scale-90 hover:scale-100 transition-transform duration-300 shadow-lg">
                      <i class="fas fa-play"></i>
                    </div>
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
                    <div class="h-full w-1/2 bg-purple-500"></div>
                  </div>
                </div>
                <div class="p-4 flex-1 flex flex-col">
                  <div class="flex justify-between mb-1.5">
                    <h3 class="text-lg font-bold m-0 overflow-hidden text-ellipsis line-clamp-2 leading-tight">
                      5-Minute Healthy Breakfast Ideas
                    </h3>
                    <div>
                      <button class="text-gray-400 bg-transparent border-none cursor-pointer p-1 rounded-full hover:text-gray-600 hover:bg-gray-100 transition-all duration-200">
                        <i class="fas fa-ellipsis-v"></i>
                      </button>
                      <div class="text-xs text-gray-500 mt-0.5">
                        Today, 10:22 AM
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center my-2">
                    <img
                      src="/api/placeholder/24/24"
                      alt="Channel"
                      class="w-6 h-6 rounded-full mr-2"
                    />
                    <span class="text-sm text-gray-500">Quick & Healthy</span>
                    <span class="mx-1.5 text-gray-300">•</span>
                    <span class="text-xs text-gray-400">425K views</span>
                  </div>
                  <p class="text-sm text-gray-500 my-1 overflow-hidden text-ellipsis line-clamp-2 leading-relaxed">
                    Start your day right with these quick, nutritious breakfast
                    recipes that take just minutes to prepare.
                  </p>
                  <div class="flex gap-2 mt-auto">
                    <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-500">
                      Breakfast
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-500">
                      Watched 50%
                    </span>
                    <button class="ml-auto text-sm font-medium flex items-center gap-1 bg-transparent border-none cursor-pointer text-purple-500 transition-all duration-200">
                      Continue{" "}
                      <i class="fas fa-arrow-right transition-transform duration-300 hover:translate-x-0.5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4 max-w-2xl mx-auto"></div>
          </div>

          <div class="mb-10">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-[#e2e4d6] flex items-center">
                <i class="fas fa-thumbs-up text-red-500 mr-2"></i>
                Recommended For You
              </h2>
              <button class="text-red-500 hover:text-red-600 flex items-center gap-1 group text-sm font-medium">
                See All{" "}
                <i class="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-red-100 group">
                <div class="relative">
                  <img
                    src="/api/placeholder/400/240"
                    alt="Baking Bread"
                    class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
                    <i class="fas fa-clock mr-1"></i> 26:45
                  </div>
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button class="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <i class="fas fa-play text-lg"></i>
                    </button>
                  </div>
                  <div class="absolute top-3 right-3">
                    <button class="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 p-2 rounded-full shadow-md transition-all duration-300 hover:text-red-500 group">
                      <i class="fas fa-bookmark"></i>
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold line-clamp-2 group-hover:text-red-600 transition-colors">
                      Sourdough Bread: The Ultimate Guide
                    </h3>
                    <div class="flex flex-col items-end">
                      <span class="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center mb-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Channel"
                      class="w-6 h-6 rounded-full mr-2"
                    />
                    <p class="text-gray-600 text-sm">The Bread Baker</p>
                    <span class="ml-auto text-gray-500 text-xs">
                      1.2M views
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm line-clamp-2 mb-3">
                    Learn to make the perfect sourdough bread from starter to
                    finish with professional baker techniques and tips.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      #baking
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      #sourdough
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      #bread
                    </span>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-blue-100 group">
                <div class="relative">
                  <img
                    src="/api/placeholder/400/240"
                    alt="Seafood"
                    class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
                    <i class="fas fa-clock mr-1"></i> 18:22
                  </div>
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <i class="fas fa-play text-lg"></i>
                    </button>
                  </div>
                  <div class="absolute top-3 right-3">
                    <button class="bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 p-2 rounded-full shadow-md transition-all duration-300 hover:text-blue-500 group">
                      <i class="fas fa-bookmark"></i>
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
                      How to Cook Seafood Like a Pro Chef
                    </h3>
                    <div class="flex flex-col items-end">
                      <span class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        Trending
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center mb-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Channel"
                      class="w-6 h-6 rounded-full mr-2"
                    />
                    <p class="text-gray-600 text-sm">Seafood Secrets</p>
                    <span class="ml-auto text-gray-500 text-xs">
                      945K views
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm line-clamp-2 mb-3">
                    Master the techniques to perfectly cook fish, shellfish, and
                    other seafood with restaurant-quality results every time.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      #seafood
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      #cooking
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      #chef
                    </span>
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

export default History;
