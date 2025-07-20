import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('button');
const baseUrl = 'https://pixabay.com/api/';
const apiKey = '51405518-123002757a861b136415ef994';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchImages(query);
  } else {
    alert('Please enter a search term.');
  }
});
const fetchImages = query => {
  loader.style.display = 'block'; // Show the loader
  const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        loader.style.display = 'none';
        iziToast.error({
          title: 'No results found',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      console.log(data.hits);
      const images = (gallery.innerHTML = data.hits
        .map(
          hit => `
            <div class="gallery__item">
                <a href="${hit.largeImageURL}" class="gallery__item">
                    <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery__image" />
                </a>
                <div class="gallery__info">
                    <p class="gallery__info_item"><b>Likes</b> ${hit.likes}</p>
                    <p class="gallery__info_item"><b>Views</b> ${hit.views}</p>
                    <p class="gallery__info_item"><b>Comments</b> ${hit.comments}</p>
                    <p class="gallery__info_item"><b>Downloads</b> ${hit.downloads}</p>
                </div>
            </div>
            `
        )
        .join(''));
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoom: false,
      });
      loader.style.display = 'none';
      lightbox.refresh();
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};
