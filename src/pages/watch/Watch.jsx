import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined style={{color:'black'}}/> Home
      </div>
      <video
        src="https://rnazarf.com/video/pexels-kampus-production-8938122.mp4"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}
