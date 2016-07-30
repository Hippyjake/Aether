export class Notifications {
  constructor() {
    this.container = document.querySelectorAll('.notifications-container')[0];
  }

  generate(message, type, delay) {
    if (type === undefined) {
      type = "";
    }

    if (delay === undefined) {
      delay = 5000;
    }

    let notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;
    this.container.appendChild(notification);

    setTimeout(() => {
      notification.className += " fadeout";
      setTimeout(() => {
        this.container.removeChild(notification);
      }, 500);
    }, delay);
  }
}