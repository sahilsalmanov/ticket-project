import Nav from "../Nav/Nav";
import Poster from "../Poster/Poster";
import "./header.scss";
import vid from "./concert.mp4";
export default function Header() {
  return (
    <div className="header">
      <video src={vid} autoPlay muted loop></video>
      <Nav />
      <Poster />
    </div>
  );
}
