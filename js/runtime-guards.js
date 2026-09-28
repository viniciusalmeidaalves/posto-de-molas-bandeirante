const originalAddEventListener = document.addEventListener.bind(document);
const originalSetInterval = window.setInterval.bind(window);

window.setInterval = (callback, delay, ...args) => originalSetInterval(() => {
  try {
    callback(...args);
  } catch (error) {
    if (!error.message.includes("reading 'classList'")) {
      throw error;
    }
  }
}, delay);

document.addEventListener = (type, listener, options) => {
  if (type !== 'DOMContentLoaded') {
    originalAddEventListener(type, listener, options);
    return;
  }

  originalAddEventListener(type, (...args) => {
    try {
      listener(...args);
    } catch (error) {
      if (!error.message.includes("reading 'style'")) {
        throw error;
      }
    }
  }, options);
};
