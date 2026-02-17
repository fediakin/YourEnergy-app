import { subscribeEmail } from '../api/subscribe-api.js';
import iziToast from 'izitoast';
import { emailPattern } from '../const/patterns';

export function onSubscribeForm(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.querySelector('input[type="email"]');
  const email = input.value.trim();

  if (!emailPattern.test(email)) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email.',
      position: 'topRight',
    });

    return;
  }

  subscribeEmail(email)
    .then(() => {
      iziToast.success({
        title: 'Success',
        message: 'Subscription successful!',
        position: 'topRight',
      });

      form.reset();
    })

    .catch(error => {
      iziToast.info({
        title: 'Info',
        message: error.message,
        position: 'topRight',
      });
    });
}
