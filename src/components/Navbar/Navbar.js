import "./Navbar.css";
import logo from "../../troll-face.png";

export default function Navbar() {
	return (
		<>
			<header>
				<nav className="navbar">
					<img src={logo} className="nav-logo" />
					<h2 className="nav-title">Meme Generator</h2>
				</nav>
			</header>
		</>
	);
}
