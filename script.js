// Account Confirmation Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userId = urlParams.get('user_id');
    const email = urlParams.get('email');

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
