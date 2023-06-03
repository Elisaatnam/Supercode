import SingleMovie from "./SingleMovie";
import movies from "./MovieData";

const MovieSection = () => {
	return (
		<section>
			{movies.map((movie, index) => (
				<SingleMovie key={index} movie={movie} />
			))}
		</section>
	);
};

export default MovieSection;
