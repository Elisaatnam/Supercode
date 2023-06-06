import "./SingleBlog.css";
import { Link } from "react-router-dom";

const SingleBlog = props => {
	return (
		<article className='single-blog'>
			<img src={props.blogPizza.img_url} alt='' />
			<h3>{props.blogPizza.title}</h3>

			<button>Read more</button>
		</article>
	);
};

export default SingleBlog;
