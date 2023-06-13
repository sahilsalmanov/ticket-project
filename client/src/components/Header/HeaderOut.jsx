import Nav from "../Nav/Nav";
import Poster from "../Poster/Poster";
import "./header.scss";
import vid from "./concert.mp4";
import MainNavOut from '../Nav/MainNavOut'
export default function HeaderOut() {
  return (
    <div className="header">
      <video src={vid} autoPlay muted loop></video>
      <MainNavOut/>
      <Poster />
    </div>
  );
}
