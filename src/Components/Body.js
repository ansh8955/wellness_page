import React from "react";
import Button from "./Button";
import wellness from "../Assests/wellness/wellness.avif";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="wellnessimage">
          <img src={wellness} alt="wellness image" />
        </div>
        <div className="contentDiv">
          <h1>Think Health. Think Massage.</h1>

          <p>
            We are open 9am to 6pm; Monday through Sunday. If you would like to
            schedule an appointment with us, please call us at 987-654-3210
            today!
          </p>
          <Button
            borderRadius="0px"
            backgroundColor="#991F48"
            fontColor="#FFFFF"
            padding="15px 1rem"
            border="2px solid white"
            margin="1%"
            width="18%"
          >
            LEARN MORE ABOUT US
          </Button>
          <Button
            borderRadius="0px"
            backgroundColor="#991F48"
            fontColor="#FFFFF"
            padding="15px 1rem"
            border="2px solid white"
            margin="1%"
            width="18%"
          >
            CONTACT US TODAY
          </Button>
        </div>
        <div className="paradiv">
          <p className="redpara">
            Are you looking for a professional, registered massage therapist?
            Sample Massage Therapy has 4 registered massage therapists who can
            provide clinical massage.
          </p>

          <p>
            We are committed to your long term health and well-being. Our
            multi-disciplinary clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>
          <p>
            We welcome you to come explore all the benefits you’ll enjoy as one
            of our valued guests. Our professional staff is committed to
            offering the best massage therapy in Mainland.
          </p>
          <hr />
        </div>
        <div className="familywellnessdiv">
        <p className="familywellness">
        Family Wellness Massage Therapy
        </p>
        <p>888 Griffiths Way, Mainland ML 12345</p>
        <p>Tel: 987.654.3210</p>
        <p>Email: info@yoursite.com</p>
        </div>
        
      </div>
    </>
  );
};

export default Body;
