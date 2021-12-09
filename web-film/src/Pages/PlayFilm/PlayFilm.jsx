import { Container } from "react-bootstrap";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
const PlayFilm = () => {
  return (
    <>
    <h1>hihi</h1>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://scontent.cdninstagram.com/v/t66.36240-6/10000000_283566583552525_4158161632715410673_n.mp4?_nc_cat=1&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=c-w9HS1RED8AX937Ddm&rl=1500&vabr=908&_nc_ht=scontent-ams4-1.xx&edm=APRAPSkEAAAA&oh=27c2c9d6590bd9f813c957f33303f9dc&oe=61B2F4A0"
      ></Player>
    </>
  );
};

export default PlayFilm;
