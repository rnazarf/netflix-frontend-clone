import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured({ type }) {
  return (
    <div className="featured">

      { type && (
        <div className="category">
          <span>{ type === "movie" ? "Movies" : "Series" }</span>
          <select name="genre" id="genere">
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000" alt="" />
      <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/INDOSIAR_Logo.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium, illo nam aperiam quo dignissimos quam doloribus repellendus! Repellat doloremque ex exercitationem, debitis porro sunt sapiente voluptatibus quae vitae cupiditate.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
