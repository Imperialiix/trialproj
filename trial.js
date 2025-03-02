document.addEventListener('DOMContentLoaded', function () {
    const aiTrigger = document.querySelector('.ai-trigger');
    const aiDropdown = document.getElementById('aiDropdown');

    // Toggle dropdown on AI click
    aiTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        aiDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            aiDropdown.classList.remove('show');
        }
    });
});



    // Hybrid Cloud Dropdown
    const hybridCloudTrigger = document.querySelector('.hybrid-cloud-trigger');
    const hybridCloudDropdown = document.getElementById('hybridCloudDropdown');

    hybridCloudTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        hybridCloudDropdown.classList.toggle('show');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            aiDropdown.classList.remove('show');
            hybridCloudDropdown.classList.remove('show');
        }
    });

    // Support Dropdown
            const supportTrigger = document.querySelector('.support-trigger');
            const supportDropdown = document.getElementById('supportDropdown');

            supportTrigger.addEventListener('click', function (event) {
                event.preventDefault();
                supportDropdown.classList.toggle('show');
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', function (event) {
                if (!event.target.closest('.dropdown')) {
                    aiDropdown.classList.remove('show');
                    hybridCloudDropdown.classList.remove('show');
                    supportDropdown.classList.remove('show');
                }
            });