import client from './client.js';

export async function subscribeEmail(email) {
  try {
    const response = await client.post('/subscription', { email });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error('This email is already subscribed.');
    }
    throw new Error('Something went wrong. Try again.');
  }
}