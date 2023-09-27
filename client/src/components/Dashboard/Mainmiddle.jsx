import React, { useState } from 'react';
import { Link } from "react-router-dom";
import icon from "../../assets/usericon.png";
import "./style.css";

const Mainmiddle = () => {
  // const [showNextSet, setShowNextSet] = useState(false);

  // const toggleNextSet = () => {
  //   setShowNextSet(!showNextSet);
  // };

  return (
    <>
      <div className='top-m'>
        <img src={icon} alt="" height={100} width={100} />
        <div className='username'>
          Hello Muskan,<br />
          <h5>Where to next?</h5>
        </div>
        <button className='tripbutton'>
          <span>Plan Your Voyage</span>
        </button>
      </div>
      <div className='bottom-m'>
        <h2 className="namee">Archives</h2>
        <div className='detail-cards-container'>
          {/* {showNextSet ? ( */}
            <>
              <div className='detail-cards'> <br />
                <h1>7th June</h1> <br />
                <p><h3>Location: Varanasi <br /> Duration: 6 Days</h3></p> <br /><br />
                <button className='button-detail'>Details</button>
              </div>
              <div className='detail-cards'><br />
                <h1>21st November</h1> <br />
                <p><h3>Location: Paris <br /> Duration: 6 Days</h3></p> <br /><br />
                <button className='button-detail'>Details</button>
              </div>
            </>
          {/* ) : ( */}
            <>
              <div className='detail-cards'><br />
                <h1>26th September</h1> <br />
                <p><h3>Location: Mumbai <br /> Duration: 7 Days</h3></p> <br /><br />
                <Link to="/user/Muskan/trips/1">
                  <button className='button-detail'>Details</button>
                </Link>
              </div>
              <div className='detail-cards'><br />
                <h1>12th August</h1> <br />
                <p><h3>Location: Goa <br /> Duration: 6 Days</h3></p> <br /><br />
                <button className='button-detail'>Details</button>
              </div>
            </>
          {/* )} */}
        </div>
        {/* <button className='arrow-button' onClick={toggleNextSet}>
          Show Next Set
        </button> */}
      </div>
    </>
  );
}

export default Mainmiddle;
