import React from "react";
import { IconButton } from "@material-ui/core";

//data
import data from "./data.json";

//icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const HorizontalScroll = () => {
  const [slideLeft, setSlideLeft] = React.useState(0);
  const [hideButtonLeft, setHideButtonLeft] = React.useState(true);
  const [hideButtonRight, setHideButtonRight] = React.useState(false);
  const [sliderWidth, setSliderWidth] = React.useState(0);

  React.useEffect(() => {
    // console.log("offsetWidth" , document.getElementById('hscroll').offsetWidth)
    // console.log("clientWidth" , document.getElementById('hscroll').clientWidth)
    // console.log("scrollWidth" , document.getElementById('hscroll').scrollWidth)
    setSliderWidth(
      document.getElementById("hscroll").scrollWidth -
        document.getElementById("hscroll").offsetWidth
    );
  }, []);

  //on arrow click
  const moveRight = () => {
    const el = document.getElementById(`hscroll`);
    setSlideLeft((el.scrollLeft += 200));
  };

  const moveLeft = () => {
    const el = document.getElementById(`hscroll`);
    setSlideLeft((el.scrollLeft -= 200));
  };

  const onHScroll = () => {
    const el = document.getElementById(`hscroll`).scrollLeft;
    if (el > 0) {
      setHideButtonLeft(false);
    } else {
      setHideButtonLeft(true);
    }
    if (el < sliderWidth) {
      setHideButtonRight(false);
    } else {
      setHideButtonRight(true);
    }
  };

  return (
    <div className="homepageMargin">
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        {/* {hideButtonLeft ? ( */}
        <IconButton onClick={moveLeft} disabled={hideButtonLeft}>
          <ArrowBackIcon
            style={{
              paddingTop: ".2rem",
              cursor: "pointer"
            }}
          />
        </IconButton>

        <IconButton onClick={moveRight} disabled={hideButtonRight}>
          <ArrowForwardIcon
            style={{
              paddingTop: ".2rem",
              cursor: "pointer"
            }}
          />
        </IconButton>
      </section>

      <hr style={{ backgroundColor: "black" }} />
      <div class="flex-container" id={`hscroll`} onScroll={() => onHScroll()}>
        {data.map((item) => (
          <div style={{ minWidth: "300px" }}>
            <img src={item.imgSrc} alt="images" style={{ width: "18rem" }} />
            <h6>{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
