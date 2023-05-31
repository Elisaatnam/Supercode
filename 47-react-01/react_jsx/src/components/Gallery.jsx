import "./Gallery.css";

//shorthand --> sfc ... erstellt function fuer component

const Gallery = () => {
	return (
		<section className='gallery'>
			<img src='https://unsplash.it/200/200?1' alt='' />
			<img src='https://unsplash.it/200/200?2' alt='' />
			<img src='https://unsplash.it/200/200?3' alt='' />
			<img src='https://unsplash.it/200/200?4' alt='' />
		</section>
	);
};

export default Gallery;
