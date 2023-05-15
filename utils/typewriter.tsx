import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 100 }: { text: string; speed: number }) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentIndex < text.length) {
				setDisplayText((prevDisplayText) => prevDisplayText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}
		}, speed);

		return () => clearTimeout(timer);
	}, [currentIndex, text, speed]);

	return displayText;
};

export default Typewriter;
