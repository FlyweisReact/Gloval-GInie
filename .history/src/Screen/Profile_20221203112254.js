/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";

const Profile = () => {
  return (
    <>
      <div className="MyOrderHead" style={{ marginTop: "2%" }}>
        <img src={img1} alt="" />
      </div>

      <div className="profileEdit">
        <div className="big">
            <h6>PROFILE</h6>
            <div className="dwn" >
                <p style={{fontFamily : 'Futura'  , fontSize : '1.7rem' , fontWeight : 'bold'}}>Name :</p>
                <div> 
                <p style={{fontFamily : 'Futura'  , fontSize : '1.7rem' , fontWeight : 'bold'}} >Shravan</p>
                <button>Edit</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
