import React, {useState, useEffect} from 'react';
import './ProgressBar.scss';


const ProgressBar = (progress) => {

      const[purchase,setPurchase]=useState(true);

      useEffect(() => {
            setPurchase(progress);
          });
        

    return (<>
        <div className="progress_bar_container">

            <div className="step progress_bar_step_one">
                  <div className="progress_bar_step_one_circle"></div>
                  <div className="progress_bar_description">ingrese su domicilio</div>
            </div>
            <div className="progress_bar_line_complete"></div> 
            <div className="step progress_bar_step_two">
                  <div className="progress_bar_step_one_circle"></div>
                  <div className="progress_bar_description">ingrese sus datos de contacto</div>
            </div>
            


            </div>
 
      </>
    )
}

export default ProgressBar

// <div className="progress_bar_line_complete"></div> 