console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('Push Recieved...');
  self.registration.showNotification(data.title, {
    body: 'Notified by Me!',
    icon: '/icon.png',
    actions: [
      {
        action: 'explore',
        title: 'Explore this new world',
        icon: '/images/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close notification',
        icon: '/images/xmark.png'
      }
    ],
    data: data
  });
});

self.addEventListener('notificationclick', e => {
  console.log('e from notfication click', e);
  var notification = e.notification;
  var action = e.action;

  if (action === 'close') {
    console.log('closed');
    notification.close();
  } else {
    console.log('url clicked');
    clients.openWindow(e.notification.data.url);
    notification.close();
  }
});
