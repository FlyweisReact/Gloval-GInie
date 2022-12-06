/** @format */

import React from "react";
import img from "../Assets/Banner  012.png";

const Facial = () => {
  return (
    <>
      <div className="facial">
        <img src={img} alt="" />
      </div>

      <p className="facialH1">
        <strong>Rejuvenate & Reinvent</strong>
        Your Facial Skin With <strong>The Ordinary.</strong>
      </p>

      <div className="facialAdd">
        <p>
          March 23, 2022 <br />
          By: TGG Editorial Team
        </p>
        <hr
          style={{
            border: "1px solid black",
            color: "black",
            backgroundColor: "black",
          }}
        />
      </div>


      <div className="facialDesc">
        <h4>Tell us: What does being a TGG trainer mean to you?</h4>
        <p> <strong>KE: </strong> In 2016, I heard about the TA trainer auditions from choreographer Tony G. I thought what an amazing opportunity that
would be! I’ve always been into fitness and with my background of cheer, dance, and gymnastics, I figured this would be perfect.
However, it seemed so far-fetched at the time. In 2013, I had a traumatic cheerleading injury to my right elbow, resulting in 
multiple surgeries. After years of recovering, I went to the trainer auditions in September 2016, and just weeks later, received
the offer. I was thrilled! I knew how fulfilling it would feel to be able to call myself a TA trainer. </p>
      </div>
    </>
  );
};

export default Facial;
