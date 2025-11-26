// Account Confirmation Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userId = urlParams.get('user_id');
    const email = urlParams.get('email');

    // Try to open app if available
    function tryOpenApp() {
        // Check if we have confirmation parameters
        if (token && userId) {
            console.log('Attempting to open Sana app...');

            // Create app URL with confirmation data
            const appUrl = `sana://auth/confirm?token=${encodeURIComponent(token)}&user_id=${encodeURIComponent(userId)}`;

            // Try to open the app
            const opened = window.open(appUrl, '_self');

            // If app opens, this page will be hidden
            // If app doesn't open, we'll continue showing this page

            // Fallback: try again after a short delay (in case app needs time to load)
            setTimeout(() => {
                if (!opened || opened.closed) {
                    // App didn't open, continue showing web page
                    console.log('App not available, showing web confirmation page');
                    showWebConfirmation();
                }
            }, 1000);
        } else {
            // No confirmation parameters, just show the page
            showWebConfirmation();
        }
    }

    // Show web confirmation page
    function showWebConfirmation() {
        console.log('Showing web confirmation page');
        // The page content is already visible by default
    }

    // Analytics tracking (if needed)
    function trackEvent(eventName, properties = {}) {
        // Add your analytics code here
        console.log('Event tracked:', eventName, properties);
    }

    // Track page view
    trackEvent('confirmation_page_viewed', {
        token: token ? 'present' : 'missing',
        userId: userId ? 'present' : 'missing',
        email: email ? 'present' : 'missing',
        timestamp: new Date().toISOString()
    });

    // Try to open app immediately
    tryOpenApp();

    // Handle successful confirmation (you can add this logic based on your backend)
    function handleConfirmationSuccess() {
        // Show success message or redirect
        console.log('Account confirmation successful');

        // You can add additional logic here based on your requirements
        // For example, store confirmation status in localStorage
        localStorage.setItem('account_confirmed', 'true');
        localStorage.setItem('confirmation_time', new Date().toISOString());
    }

    // Call this when confirmation is verified
    if (token && userId) {
        // Here you would typically verify the token with your backend
        // For now, we'll assume it's successful
        handleConfirmationSuccess();
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('Error occurred:', e.error);
        trackEvent('confirmation_page_error', {
            error: e.error.message,
            url: window.location.href
        });
    });

    // Service worker registration for PWA features (if needed)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Register service worker if you decide to make this a PWA
            // navigator.serviceWorker.register('/sw.js');
        });
    }

    // Print functionality (optional)
    function printPage() {
        window.print();
    }

    // Add print button if needed (uncomment if you want this feature)
    // To add a print button, uncomment the following lines and add the button to HTML:
    /*
    const printBtn = document.createElement('button');
    printBtn.textContent = 'طباعة الصفحة / Print Page';
    printBtn.className = 'btn secondary-btn';
    printBtn.onclick = printPage;
    // Add to appropriate container in HTML
    */

    // Accessibility improvements
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Announce successful confirmation
    announceToScreenReader('تم تأكيد الحساب بنجاح - Account confirmed successfully');
});
