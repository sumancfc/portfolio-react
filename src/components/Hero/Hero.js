import React from "react";
import Button from "../common/Button";
import HeroImage from "../../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <div className='hero__section' id='hero'>
      <div className='wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='hero__section-info'>
                <h1 className='hero__section-title'>Hello!!!</h1>
                <h2 className='hero__section-title-2'>
                  We Are Creative Digital Agency.
                </h2>
                <p className='hero__section-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <Button label='SEND MESSAGE' target={"contact"} />
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='hero__section-image'>
                <img src={HeroImage} alt='hero' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
