import React from "react";

const Help = () => {
  return (
    <div class="bg-[#002140]">
      <div class="bg-[#002140] font-sans container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div
          id="help"
          class="bg-gradient-to-tr from-black via-black/60 to-[#003a6c] rounded-xl shadow-md overflow-hidden"
        >
          <div class="px-6 py-4 bg-gradient-to-r from-black/90 via-[#002140]/90 to-[#003a6c] border-b flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">Help Center</h3>
            <a
              href="#help"
              class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <i class="fas fa-question-circle mr-2"></i>
            </a>
          </div>

          <div class="p-6 space-y-6">
            <div>
              <h4 class="font-bold text-white mb-3">
                Frequently Asked Questions
              </h4>

              <div class="space-y-4" id="faq-container">
                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleAnswer(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>How do I create a new recipe?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      To create a new recipe, navigate to your profile and click
                      the "Add Recipe" button. Fill in all required fields
                      including ingredients, instructions, and cooking time. You
                      can also add photos to showcase your delicious creation!
                    </p>
                  </div>
                </div>

                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleAnswer(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>How do I follow other food lovers?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      You can follow other users by visiting their profile and
                      clicking the "Follow" button. You'll then see their
                      recipes and updates in your feed. You can also discover
                      new users through the "Discover" section or by searching
                      for specific usernames.
                    </p>
                  </div>
                </div>

                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleAnswer(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>How do I change my account settings?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      To change your account settings, click on "My Account" in
                      the main menu, then select "Settings." From there, you can
                      update your profile information, notification preferences,
                      privacy settings, and more.
                    </p>
                  </div>
                </div>

                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleAnswer(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>What are the benefits of Premium membership?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      Premium members enjoy an ad-free experience, unlimited
                      recipe storage, exclusive access to cooking classes and
                      events, priority customer support, and the ability to
                      create and share private recipe collections with friends
                      and family.
                    </p>
                  </div>
                </div>

                <div class="border rounded-lg overflow-hidden">
                  <button
                    onclick="toggleAnswer(this)"
                    class="w-full px-4 py-3 text-left font-medium text-white bg-[#002140] hover:bg-[#003a6c] transition-colors flex justify-between items-center"
                  >
                    <span>How do I report inappropriate content?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                  </button>
                  <div class="px-4 py-3 bg-white hidden">
                    <p class="text-[#002140]">
                      If you come across content that violates our community
                      guidelines, click the three dots (...) next to the post
                      and select "Report." Choose the appropriate reason for
                      reporting and submit. Our moderation team will review it
                      promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t pt-6">
              <h4 class="font-bold text-white mb-3">Contact Support</h4>
              <p class="text-gray-400 mb-4">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>

              <div class="space-y-4">
                <div>
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="help-subject"
                  >
                    Subject
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="help-subject"
                    type="text"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label
                    class="block text-white text-sm font-bold mb-2"
                    for="help-message"
                  >
                    Your Question
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="help-message"
                    rows="5"
                    placeholder="Describe your issue or question in detail..."
                  ></textarea>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <label class="block text-white text-sm font-bold mb-2">
                      Priority
                    </label>
                    <div class="flex space-x-4">
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio text-[#ff4d4d]"
                          name="priority"
                          value="low"
                          checked
                        />
                        <span class="ml-2 text-white">Low</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio text-[#ff4d4d]"
                          name="priority"
                          value="medium"
                        />
                        <span class="ml-2 text-white">Medium</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio text-[#ff4d4d]"
                          name="priority"
                          value="high"
                        />
                        <span class="ml-2 text-white">High</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <button class="bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-medium py-2 px-6 rounded transition-colors">
                  Submit Question
                </button>
              </div>
            </div>

            <div class="border-t pt-6">
              <h4 class="font-bold text-white mb-3">Quick Support Options</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="#"
                  class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i class="fas fa-book text-3xl text-[#ff4d4d] mb-2"></i>
                  <h5 class="font-medium text-gray-800">User Guide</h5>
                  <p class="text-sm text-gray-600 text-center">
                    View our comprehensive user guide
                  </p>
                </a>
                <a
                  href="#"
                  class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i class="fas fa-video text-3xl text-[#ff4d4d] mb-2"></i>
                  <h5 class="font-medium text-gray-800">Video Tutorials</h5>
                  <p class="text-sm text-gray-600 text-center">
                    Watch step-by-step tutorials
                  </p>
                </a>
                <a
                  href="#"
                  class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i class="fas fa-comments text-3xl text-[#ff4d4d] mb-2"></i>
                  <h5 class="font-medium text-gray-800">Live Chat</h5>
                  <p class="text-sm text-gray-600 text-center">
                    Chat with our support team
                  </p>
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
      </div>
      {/* <script>
      const accordionButtons = document.querySelectorAll("#help button");

      accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
          const content = this.nextElementSibling;
          const icon = this.querySelector("i");
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
          }
        });
      });
      const submitButton = document.querySelector("#help button.bg-\\[\\#ff4d4d\\]");
      if (submitButton) {
        submitButton.addEventListener("click", function() {
          const subject = document.getElementById("help-subject").value;
          const message = document.getElementById("help-message").value;
          if (!subject) {
            alert("Please enter a subject for your question");
            return;
          }
          if (!message) {
            alert("Please describe your issue or question");
            return;
          }
          alert("Thank you for your question! Our support team will get back to you soon.");
          document.getElementById("help-subject").value = "";
          document.getElementById("help-message").value = "";
        });
      }

      function toggleAnswer(button) {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      }
    </script> */}
    </div>
  );
};

export default Help;
