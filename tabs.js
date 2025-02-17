document.addEventListener("DOMContentLoaded", function () {
    console.log("Loading JavaScript from GitHub...");

    setTimeout(function () {
        console.log("Initializing external tab switching...");

        var tabButtons = document.querySelectorAll('[data-tab]');

        tabButtons.forEach(function (tab) {
            tab.addEventListener("click", function () {
                var targetTabId = this.getAttribute("data-tab");
                
                console.log("Tab Clicked:", targetTabId);

                // Remove 'active' class from all buttons
                tabButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                // Add 'active' class to clicked button
                this.classList.add("active");

                // Hide all tab contents
                document.querySelectorAll(".tab-pane").forEach(function (pane) {
                    pane.classList.remove("show", "active");
                });

                // Show selected tab content
                let targetTab = document.getElementById(targetTabId);
                if (targetTab) {
                    console.log("Switching tab content to:", targetTabId);
                    targetTab.classList.add("show", "active");
                }
            });
        });

    }, 1000);
});
