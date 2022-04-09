import "./MemeForm.css";
import memeData from "../../memeData";
import { useEffect, useState } from "react";

export default function MemeForm() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "",
	});
	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}
	const [allMemeImages, setAllMemeImages] = useState([]);
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemeImages(data.data.memes));
	}, []);
	function getRandomMeme() {
		const randomNumber = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[randomNumber].url;
		setMeme((prevState) => {
			return {
				...prevState,
				randomImage: url,
			};
		});
	}
	return (
		<>
			<div className="meme-container">
				<form className="meme-form">
					<input
						type="text"
						className="meme-top-text"
						name="topText"
						value={meme.topText}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="meme-bottom-text"
						name="bottomText"
						value={meme.bottomText}
						onChange={handleChange}
					/>
					<button type="button" className="submit-button" onClick={getRandomMeme}>
						Get a new meme image 🖼️
					</button>
				</form>
				<div className="meme">
					<img className="meme-image" src={meme.randomImage} />
					<h1 className="top-text">{meme.topText}</h1>
					<h1 className="bottom-text">{meme.bottomText}</h1>
				</div>
			</div>
		</>
	);
}
