export function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: '44239146-a4ca37b2af41c42f680f3fb9f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Failed to fetch images');
    });
}
