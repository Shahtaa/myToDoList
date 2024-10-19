// components/Notification.js

// Function to show notification
export function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
