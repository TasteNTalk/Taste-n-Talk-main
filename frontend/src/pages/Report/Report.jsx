import React from "react";

const Report = () => {
  return (
    <div class="bg-[#002140]">
      <div class="bg-[#002140] font-sans container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div
          id="report"
          class="bg-gradient-to-tr from-black via-black/60 to-[#003a6c] rounded-xl shadow-md overflow-hidden"
        >
          <div class="px-6 py-4 bg-gradient-to-r from-black/90 via-[#002140]/90 to-[#003a6c] border-b flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">Report</h3>
            <a
              href="#report"
              class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <i class="fas fa-flag mr-2"></i>
            </a>
          </div>

          <div class="p-6 space-y-6">
            <div>
              <h4 class="font-bold text-white mb-3">
                Report Inappropriate Content
              </h4>
              <p class="text-gray-400 mb-4">
                Help us maintain a respectful community by reporting content
                that violates our guidelines.
              </p>

              <div class="space-y-4">
                <div>
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="report-type"
                  >
                    What are you reporting?
                  </label>
                  <select
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-[#001a33] leading-tight focus:outline-none focus:shadow-outline"
                    id="report-type"
                  >
                    <option value="" disabled selected>
                      Select a reason
                    </option>
                    <option value="user">A user</option>
                    <option value="recipe">A recipe</option>
                    <option value="comment">A comment</option>
                    <option value="message">A private message</option>
                  </select>
                </div>

                <div id="user-form" class="hidden space-y-4">
                  <div>
                    <label
                      class="block text-white text-sm font-bold mb-2"
                      for="username"
                    >
                      Username
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-[#001a33] leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter username"
                    />
                  </div>
                </div>

                <div id="content-form" class="hidden space-y-4">
                  <div>
                    <label
                      class="block text-white text-sm font-bold mb-2"
                      for="content-url"
                    >
                      Content URL or ID
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-[#001a33] leading-tight focus:outline-none focus:shadow-outline"
                      id="content-url"
                      type="text"
                      placeholder="Paste URL or enter ID"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="report-reason"
                  >
                    Reason for reporting
                  </label>
                  <select
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-[#001a33] leading-tight focus:outline-none focus:shadow-outline"
                    id="report-reason"
                  >
                    <option value="" disabled selected>
                      Select a reason
                    </option>
                    <option value="spam">Spam or misleading</option>
                    <option value="offensive">Offensive content</option>
                    <option value="harassment">Harassment or bullying</option>
                    <option value="violence">Violence or threats</option>
                    <option value="copyright">Copyright violation</option>
                    <option value="impersonation">Impersonation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="report-details"
                  >
                    Additional details
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-[#001a33] leading-tight focus:outline-none focus:shadow-outline"
                    id="report-details"
                    rows="5"
                    placeholder="Please provide any additional information that will help us understand the issue..."
                  ></textarea>
                </div>

                <div class="flex items-center">
                  <input type="checkbox" id="report-anonymous" class="mr-2" />
                  <label for="report-anonymous" class="text-white text-sm">
                    Submit this report anonymously
                  </label>
                </div>
              </div>

              <div class="mt-6">
                <button
                  id="submit-report"
                  class="bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-medium py-2 px-6 rounded transition-colors"
                >
                  Submit Report
                </button>
              </div>
            </div>

            <div class="border-t pt-6">
              <h4 class="font-bold text-white mb-3">Reporting Guidelines</h4>

              <div class="space-y-4" id="guidelines-container">
                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleGuideline(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>What happens after I report?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      Our moderation team reviews all reports within 24-48
                      hours. If we find a violation of our community guidelines,
                      appropriate action will be taken. You may receive a
                      notification about the outcome of your report, depending
                      on your notification settings.
                    </p>
                  </div>
                </div>

                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleGuideline(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>What content should I report?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      You should report content that violates our community
                      guidelines, including harassment, hate speech, explicit or
                      inappropriate content, spam, copyright infringement, and
                      impersonation. If you're unsure whether content violates
                      our guidelines, you can still report it for review.
                    </p>
                  </div>
                </div>

                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleGuideline(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>Can I block a user without reporting them?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      Yes, you can block users without reporting them. Go to
                      their profile, click the three dots (...) menu, and select
                      "Block User." They won't be notified, but they won't be
                      able to see your content, message you, or interact with
                      you on the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t pt-6">
              <h4 class="font-bold text-white mb-3">
                Need Further Assistance?
              </h4>
              <p class="text-gray-400 mb-4">
                If you're experiencing an urgent issue that requires immediate
                attention:
              </p>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-gray-200 hover:bg-gray-300 text-[#002140] font-medium py-2 px-4 rounded flex items-center transition-colors"
                >
                  <i class="fas fa-headset mr-2"></i>
                  Contact Support
                </a>
                <a
                  href="#"
                  class="border border-white/30 hover:bg-white/10 text-white font-medium py-2 px-4 rounded flex items-center transition-colors"
                >
                  <i class="fas fa-shield-alt mr-2"></i>
                  Safety Center
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer class="bg-gradient-to-r from-black to-[#003a6c] text-white py-8 mt-16 rounded-2xl">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="mb-6 md:mb-0">
                <h2 class="text-2xl font-bold mb-2">Taste'n Talk</h2>
                <p class="text-gray-300">Connect with food lovers worldwide</p>
              </div>
              <div class="flex space-x-6">
                <a
                  href="#"
                  class="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i class="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i class="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i class="fab fa-youtube text-xl"></i>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i class="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
            <div class="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2025 Taste'n Talk. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* <script>
      const reportType = document.getElementById('report-type');
      const userForm = document.getElementById('user-form');
      const contentForm = document.getElementById('content-form');
      const submitButton = document.getElementById('submit-report');

      reportType.addEventListener('change', function() {
        if (this.value === 'user') {
          userForm.classList.remove('hidden');
          contentForm.classList.add('hidden');
        } else if (this.value === 'recipe' || this.value === 'comment' || this.value === 'message') {
          userForm.classList.add('hidden');
          contentForm.classList.remove('hidden');
        } else {
          userForm.classList.add('hidden');
          contentForm.classList.add('hidden');
        }
      });

      submitButton.addEventListener('click', function() {
        const selectedType = reportType.value;
        const reportReason = document.getElementById('report-reason').value;
        
        if (!selectedType) {
          alert("Please select what you're reporting");
          return;
        }
        
        if (!reportReason) {
          alert("Please select a reason for reporting");
          return;
        }
        
        if (selectedType === 'user' && !document.getElementById('username').value) {
          alert("Please enter a username");
          return;
        }
        
        if ((selectedType === 'recipe' || selectedType === 'comment' || selectedType === 'message') && 
            !document.getElementById('content-url').value) {
          alert("Please provide the URL or ID of the content");
          return;
        }
        
        alert("Thank you for your report. Our moderation team will review it and take appropriate action.");

        reportType.value = "";
        document.getElementById('report-reason').value = "";
        document.getElementById('report-details').value = "";
        if (document.getElementById('username')) {
          document.getElementById('username').value = "";
        }
        if (document.getElementById('content-url')) {
          document.getElementById('content-url').value = "";
        }
        document.getElementById('report-anonymous').checked = false;
        userForm.classList.add('hidden');
        contentForm.classList.add('hidden');
      });

      function toggleGuideline(button) {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      }
    </script> */}
      </div>
    </div>
  );
};

export default Report;
