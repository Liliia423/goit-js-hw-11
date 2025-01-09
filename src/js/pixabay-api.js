const API_KEY = '45378122-3aa1f0accb7d59cfaae2c348a';
const BASE_URL = 'https://pixabay.com/api/';

export function requestSending(query) {
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    });
}

