import React from 'react';
import '../App.css';

const SlideValue = () => {


    <div>
             <div className="range">
          <div class="sliderValue">
            <span>2500</span>
          </div>

         <div className="field">
            <div className="value left"> 0 </div>
          <input type="range" min="10" max="5000" value="100" steps="1" />

            <div className="value right">5000</div>
          </div>
      </div>

       </div>

    const slideValue = document.querySelector("span");
    const inputSlider = document.querySelector("input");
    
     <div>
        inputSlider.oninput = (() => {
        let value = inputSlider.value;
        slideValue.textContent = value;
        slideValue.style.left = (value/2) + "%";
        slideValue.classList.add("show");
      });
  
      inputSlider.onblur = (() => {
        slideValue.classList.remove("show");
      });
    
        
    return (
        
        </div>
    );
};

export default SlideValue;