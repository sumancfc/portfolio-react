import React from "react";

const ProjectBox = (props) => (
  <div className='portfolio__box'>
    <img src={props.preview} alt='project' />
    <div className='portfolio__hover-info flex-center'>
      <div className='text-center'>
        <p className='portfolio__box-title'>{props.title}</p>
        <p className='portfolio__box-tag'>{props.tag}</p>
      </div>
    </div>
  </div>
);

export default ProjectBox;
