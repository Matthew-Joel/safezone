import React from "react";
import Typed from "react-typed";

const Typewriter = ({
	texts,
	speed = 40,
}: {
	texts: string[];
	speed?: number;
}) => {
	return (
		<Typed
			strings={texts}
			typeSpeed={speed}
			backSpeed={speed + 10}
			loop
		/>
	);
};

export default Typewriter;
