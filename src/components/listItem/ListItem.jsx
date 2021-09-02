import {
  Add,
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://rnazarf.com/preview/1541905617.mp4";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 255 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.pexels.com/photos/1386602/pexels-photo-1386602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nemo mollitia nihil blanditiis.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
