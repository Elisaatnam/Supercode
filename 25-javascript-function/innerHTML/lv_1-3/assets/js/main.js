let gallerySection = document.querySelector('#gallery');

gallerySection.innerHTML = '<figure><img src="https://unsplash.it/250"><figcaption>Fig.1</figcaption></figure>';
gallerySection.innerHTML += '<figure><img src="https://unsplash.it/250"><figcaption>Fig.2</figcaption></figure>';
gallerySection.innerHTML += '<figure><img src="https://unsplash.it/250"><figcaption>Fig.3</figcaption></figure>';

gallerySection.style.height = '100vh';
gallerySection.style.widht = '100vw';
gallerySection.style.display = 'flex';
gallerySection.style.justifyContent = 'center';
gallerySection.style.alignItems = 'center';