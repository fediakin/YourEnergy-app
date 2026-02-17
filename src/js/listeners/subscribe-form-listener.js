import { onSubscribeForm } from '../handlers/on-subscribe-form.js';

export function subscribeFormListener() {
  const form = document.querySelector('.js-footer-form');

  if (form) {
    form.addEventListener('submit', onSubscribeForm);
  }
}
