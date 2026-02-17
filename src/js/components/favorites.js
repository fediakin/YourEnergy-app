import iconsPath from '../../img/sprite.svg';

const LS_KEY = 'my-saved-exercises'; 

export const getFavorites = () => {
  try {
    const data = localStorage.getItem(LS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading storage:', error);
    return [];
  }
};

const saveFavorites = (favorites) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

export const isFavorite = (exerciseId) => {
  const favorites = getFavorites();
  return favorites.includes(exerciseId);
};

export const addToFavorites = (exerciseId, exerciseData = null) => {
  const favorites = getFavorites();

  if (!favorites.includes(exerciseId)) {
    favorites.push(exerciseId);
    saveFavorites(favorites);

    if (exerciseData) {
      localStorage.setItem(
        `saved_ex_${exerciseId}`, // Змінив префікс ключа
        JSON.stringify({ ...exerciseData, favorite: true })
      );
    }
    return true;
  }
  return false;
};

export const removeFromFavorites = (exerciseId) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(id => id !== exerciseId);

  if (updatedFavorites.length !== favorites.length) {
    saveFavorites(updatedFavorites);
    localStorage.removeItem(`saved_ex_${exerciseId}`); // Видаляємо новий ключ
    return true;
  }
  return false;
};

export const getFavoriteExerciseData = (exerciseId) => {
  try {
    const data = localStorage.getItem(`saved_ex_${exerciseId}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

const renderFavoriteExercise = (exercise, container) => {
  const li = document.createElement('li');
  li.className = 'favorites__item';

  li.innerHTML = `
      <div class="favorites__card card exercise-item" data-id="${exercise._id}">
        <div class="card__header">
          <div class="card__workout">
            <div class="card__label">WORKOUT</div>
            <button aria-label="Delete" type="button" class="card__delete">
              <svg width="16" height="16">
                <use href="${iconsPath}#icon-trash"></use>
              </svg>
            </button>
          </div>
          <button aria-label="Start" type="button" class="card__start">
            Start
            <i>
              <svg width="16" height="16">
                <use href="${iconsPath}#icon-arrow"></use>
              </svg>
            </i>
          </button>
        </div>
        <div class="card__body">
          <div class="card__exercise">
            <svg class="card__exercise-logo">
              <use href="${iconsPath}#running-stick-figure-border"></use>
            </svg>
            <p>${exercise.name}</p>
          </div>
          <ul class="card__list">
            <li class="card__list-item">
              <p>Burned calories:</p>
              <span>${exercise.burnedCalories} / ${exercise.time} min</span>
            </li>
            <li class="card__list-item">
              <p>Body part:</p>
              <span>${exercise.bodyPart}</span>
            </li>
            <li class="card__list-item">
              <p>Target:</p>
              <span>${exercise.target}</span>
            </li>
          </ul>
        </div>
      </div>
    `;

  container.appendChild(li);

  const deleteBtn = li.querySelector('.card__delete');
  deleteBtn?.addEventListener('click', () => {
    removeFromFavorites(exercise._id);
    updateFavoritesDisplay();
  });
};

export const updateFavoritesDisplay = () => {
  const favoritesList = document.querySelector('.favorites__list');
  const emptyMessage = document.querySelector('.favorites__empty');

  if (!favoritesList || !emptyMessage) return;

  const favBody = emptyMessage.closest('.favorites__body');
  const favorites = getFavorites();

  favoritesList.innerHTML = '';

  if (favorites.length === 0) {
    emptyMessage.classList.remove('is-hidden');
    favoritesList.classList.add('is-hidden');
    favBody?.classList.add('center');
    return;
  }

  emptyMessage.classList.add('is-hidden');
  favoritesList.classList.remove('is-hidden');
  favBody?.classList.remove('center');

  favorites.forEach(id => {
    const data = getFavoriteExerciseData(id);
    if (data) renderFavoriteExercise(data, favoritesList);
  });
};