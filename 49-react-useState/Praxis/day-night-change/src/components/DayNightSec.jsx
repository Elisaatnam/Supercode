import { useState } from "react";

const DayNightSec = () => {
	const [day, setDay] = useState("Tag");
	const [night, setNight] = useState("Nacht");
	const [isDay, setIsDay] = useState(true); // state to track day/night

	const change = () => {
		setDay(night);
		setNight(day);
		setIsDay(!isDay); // Toggle day/night state
	};

	return (
		<section
			style={
				isDay
					? { backgroundColor: "lightblue", color: "black" }
					: { backgroundColor: "darkblue", color: "white" }
			}
		>
			<p>
				Es ist {day}{" "}
				<img
					src={isDay ? "day.png" : "night.png"}
					alt={isDay ? "Day" : "Night"}
				/>
			</p>
			<button onClick={change}>Wechsel zu {night}</button>
		</section>
	);
};

export default DayNightSec;
