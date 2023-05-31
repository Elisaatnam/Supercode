import "./Header.css";

const Header = () => {
	return (
		<header>
			<p className='hello'>Hello There</p>
			<h1>We Are Glint</h1>
			<div className='underline'></div>
			<p className='lorem'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga omnis
				beatae aliquid voluptatem, soluta asperiores ad nulla voluptas
				consectetur cum veniam eveniet in dolorem dolores totam eligendi? Illum,
				vero quam.Fuga omnis beatae aliquid voluptatem, soluta asperiores ad
				nulla voluptas consectetur cum veniam eveniet in dolorem dolores totam
				eligendi? Illum, vero quam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Voluptatem distinctio accusantium quos, autem iste
				explicabo.
			</p>
			<div className='wrapper'>
				<div>
					<h2>127</h2>
					<p className='p-bold'>Awards Recieved</p>
				</div>
				<div>
					<h2>1505</h2>
					<p className='p-bold'>Cups of Coffee</p>
				</div>
				<div>
					<h2>109</h2>
					<p className='p-bold'>Projects Completed</p>
				</div>
				<div>
					<h2>102</h2>
					<p className='p-bold'>Happy Clients</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
