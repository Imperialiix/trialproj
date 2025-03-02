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

            // Add this to your trial.js file
            document.addEventListener('DOMContentLoaded', function() {
                const productsTrigger = document.querySelector('.products-trigger');
                const productsDropdown = document.querySelector('.products-dropdown');
                const productsContent = document.getElementById('productsContent');
    const featuredContent = `
        <div class="featured-content active">
            <h2>API Connect</h2>
            <p>Software to rapidly create, protect, socialize and manage APIs</p>
            <h2>Concert</h2>
            <p>Software to simplify and optimize application management</p>
            <h2>Environmental Intelligence</h2>
            <p>SaaS for predicting and responding to weather and climate events</p>
            <h2>Envizi</h2>
            <p>ESG data management, reporting and analysis SaaS</p>
            <h2>FlashSystem</h2>
            <p>Primary storage for performance and latency sensitive workloads</p>
            <h2>HashiCorp</h2>
            <p>Manage cloud infrastructure and security</p>
            <h2>IBM Cloud</h2>
            <p>On-demand cloud computing platform and APIs</p>
            <h2>IBM Z</h2>
            <p>Flagship mainframe with on-chip AI and quantum-safe cryptography</p>
            <h2>Instana</h2>
            <p>Software for application performance monitoring and automation</p>
            <h2>MaaS360</h2>
            <p>Unified endpoint management software for many device types</p>
            <h2>Maximo</h2>
            <p>Software for asset management and related workflows</p>
            <h2>Planning Analytics</h2>
            <p>Software to automate financial and operational planning</p>
            <h2>Robotic Process Automation (RPA)</h2>
            <p>Software to automate workflows and business processes</p>
            <h2>Storage Defender</h2>
            <p>Data resiliency software for threat detection and data recovery</p>
            <h2>Turbonomic</h2>
            <p>Software to manage and optimize IT resource usage</p>
            <h2>watsonx</h2>
            <p>AI and data platform</p>
            <h2>watsonx Assistant</h2>
            <p>Virtual agents customizable to any domain</p>
            <h2>watsonx Orchestrate</h2>
            <p>Personal-assistant software that automates repetitive tasks</p>
        </div>`
    ;

    productsContent.innerHTML = featuredContent;

    productsTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        productsDropdown.style.display = productsDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Load featured content when clicking "Featured"
    document.querySelector('.sidebar').addEventListener('click', function(e) {
        if (e.target.classList.contains('featured-link')) {
            e.preventDefault();
            productsContent.innerHTML = featuredContent; // Inject content
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            productsDropdown.style.display = 'none';
        }
    });
});

