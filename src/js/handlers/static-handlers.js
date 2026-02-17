import { exercisesApi } from '../api/exercises.api.js';
import { renderQuote } from '../components/quote.js';

const QUOTE_KEY = 'daily-motivation-data';

export const handleQuoteOfDay = async () => {
  const today = new Date().toDateString();
  
  try {
    const stored = localStorage.getItem(QUOTE_KEY);

    if (stored) {
      const { date, data } = JSON.parse(stored);
      if (date === today) {
        renderQuote(data);
        return;
      }
    }

    const data = await exercisesApi.quoteOfDay();

    localStorage.setItem(QUOTE_KEY, JSON.stringify({
      date: today,
      data
    }));
    
    renderQuote(data);
    
  } catch (error) {
  }
};