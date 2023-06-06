import BlogData from "./BlogData";
import SingleBlog from "./SingleBlog";
import "./BlogSection.css";

const BlogSection = () => {
	return (
		<section className='blog-section'>
			{BlogData.map((blogObj, index) => (
				<SingleBlog key={index} blogPizza={blogObj} />
			))}
		</section>
	);
};

export default BlogSection;
