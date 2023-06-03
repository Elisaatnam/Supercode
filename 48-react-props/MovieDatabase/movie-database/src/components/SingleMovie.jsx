const SingleMovie = props => {
	return (
		<article>
			<p>{props.movie.title}</p>
			<p>{props.movie.year}</p>
			<p>{props.movie.director}</p>
			<p>{props.movie.duration}</p>
			<p>{props.movie.rate}</p>
			<div>
				{props.movie.genre.map((genre, index) => (
					<span key={index} className='genre'>
						{genre}
						{index !== props.movie.genre.length - 1 && ", "}
						{/* The && operator also has another use in JavaScript, which is known as short-circuit evaluation. In expressions like {index !== props.movie.genre.length - 1 && ', '}, the && operator is used for this purpose.

In short-circuit evaluation, when the expression on the left side of && is true, the result will be the value on the right side of &&. But when the expression on the left side is false, the result will be false and the right side will not be evaluated or considered.

In the specific code {index !== props.movie.genre.length - 1 && ' '}, the purpose is to add a space and a "," between each genre, but only if it is not the last genre. If index !== props.movie.genre.length - 1 evaluates to true, then the ', ' (space and comma) will be added. Otherwise, if index === props.movie.genre.length - 1 (meaning it is the last genre), the expression evaluates to false, and no comma/space will be added.

So, in this context, the && operator is used for conditional rendering, allowing the space to be added conditionally based on whether the current genre is the last one or not. */}
					</span>
				))}
			</div>
		</article>
	);
};

export default SingleMovie;
