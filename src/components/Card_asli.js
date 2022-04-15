import react from "react";
import photu from "../Assests/IPHON2.jpeg";
import photu2 from "../Assests/wm1.jpg";

function CardAsli(props) {
  return (
    <div className="parent_asli">
      
      <div className="game">
      <div className="rank">{props.rank}</div>
        <div className="front">
          <img className="thumbnail" src={props.productimg}></img>
          <h3 className="name">{props.name}</h3>
          <div className="stats">
            <p className="viewers">{props.buys}</p>
            <div className="streamers">
              <img src={props.review1img}></img>
              <img src={props.review2img}></img>
              <img src={props.review3img}></img>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="straeming-info">
            <p className="game-stat">
              {props.reviewsnum}
              <span>Watching</span>
            </p>
            <p className="game-stat">
              {props.recommends}
              <span>Streams</span>
            </p>
          </div>
          <button className="btn">See more Streams</button>
          <div className="streamers">
            <div className="streamer">
              <div className="iconi">
                <img src={props.review1img}></img>
              </div>
              <p className="name">{props.review1name}</p>
              <p className="number">{props.review1rating}</p>
            </div>
            <div className="streamer">
              <div className="iconi">
                <img src={props.review2img}></img>
              </div>
              <p className="name">{props.review2name}</p>
              <p className="number">{props.review2rating}</p>
            </div>
            <div className="streamer">
              <div className="iconi">
                <img src={props.review3img}></img>
              </div>
              <p className="name">{props.review3name}</p>
              <p className="number">{props.review3rating}</p>
            </div>
          </div>
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
}

export default CardAsli;
