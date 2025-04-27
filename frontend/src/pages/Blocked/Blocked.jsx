import React from "react";

const Blocked = () => {
  return (
    <div className="bg-[#002140]">
      <div className="bg-[#002140] font-sans container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div
          id="report"
          className="bg-gradient-to-tr from-black via-black/60 to-[#003a6c] rounded-xl shadow-md overflow-hidden"
        >
          <div className="px-6 py-4 bg-gradient-to-r from-black/90 via-[#002140]/90 to-[#003a6c] border-b flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Report</h3>
            <a
              href="#report"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <i className="fas fa-flag mr-2"></i>
            </a>
          </div>

          <div className="bg-[#002140] text-white font-sans mt-5">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-r from-[#001529] to-[#002140] p-4 border-b border-[#001529]/40">
                <h2 className="text-xl font-bold">Blocked Users</h2>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search blocked users..."
                      className="w-full py-2 px-4 pl-10 bg-[#001529] border border-[#003a6c] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <i className="fas fa-search text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div className="text-center py-8 hidden" id="no-blocked-users">
                  <i className="fas fa-user-slash text-4xl text-gray-400 mb-3"></i>
                  <p className="text-gray-300">You haven't blocked any users yet</p>
                </div>

                <div className="space-y-3" id="blocked-users-list">
                  <div className="flex items-center justify-between p-3 bg-[#001529] rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#003a6c] flex items-center justify-center text-white mr-3">
                        <i className="fas fa-user"></i>
                      </div>
                      <div>
                        <h4 className="font-medium">FoodLover123</h4>
                        <p className="text-sm text-gray-400">
                          Blocked on Apr 10, 2025
                        </p>
                      </div>
                    </div>
                    <button className="unblock-btn text-[#ff4d4d] hover:text-red-300 transition-colors">
                      <i className="fas fa-user-plus mr-1"></i> Unblock
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#001529] rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#003a6c] flex items-center justify-center text-white mr-3">
                        <i className="fas fa-user"></i>
                      </div>
                      <div>
                        <h4 className="font-medium">ChefMaster42</h4>
                        <p className="text-sm text-gray-400">
                          Blocked on Mar 28, 2025
                        </p>
                      </div>
                    </div>
                    <button className="unblock-btn text-[#ff4d4d] hover:text-red-300 transition-colors">
                      <i className="fas fa-user-plus mr-1"></i> Unblock
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#001529] rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#003a6c] flex items-center justify-center text-white mr-3">
                        <i className="fas fa-user"></i>
                      </div>
                      <div>
                        <h4 className="font-medium">TastyRecipes</h4>
                        <p className="text-sm text-gray-400">
                          Blocked on Feb 15, 2025
                        </p>
                      </div>
                    </div>
                    <button className="unblock-btn text-[#ff4d4d] hover:text-red-300 transition-colors">
                      <i className="fas fa-user-plus mr-1"></i> Unblock
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-[#001529]/50 rounded-lg text-sm text-gray-300">
                  <i className="fas fa-info-circle text-[#ff4d4d] mr-2"></i>
                  Blocked users cannot see your profile, recipes, or message
                  you. You won't see their content in your feed either.
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-black to-[#003a6c] text-white py-8 mt-16 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Taste'n Talk</h2>
                <p className="text-gray-300">Connect with food lovers worldwide</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2025 Taste'n Talk. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* <script>
      function updateBlockedUsersList() {
        const blockedList = document.getElementById('blocked-users-list');
        const noBlockedMessage = document.getElementById('no-blocked-users');
        const hasBlockedUsers = blockedList.children.length > 0;

        blockedList.classNameList.toggle('hidden', !hasBlockedUsers);
        noBlockedMessage.classNameList.toggle('hidden', hasBlockedUsers);
      }

      document.querySelectorAll('.unblock-btn').forEach(button => {
        button.addEventListener('click', function() {
          const blockedUserItem = this.closest('div.flex.items-center.justify-between');
          if (blockedUserItem) {
            blockedUserItem.remove();
            updateBlockedUsersList();
          }
        });
      });
    </script> */}
      </div>
    </div>
  );
};

export default Blocked;
