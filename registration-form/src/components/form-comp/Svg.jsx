import { ReactComponent as CrownIcon } from '../../svg/sucess.svg';
import "../registration-comp/form.style.css"
const Svg = () => (
  <div className="success-message">
      <CrownIcon className="svg-icon" 
           style={{ width: '64px', height: '64px' }}
        />


    <p>Form submitted successfully!</p>
  </div>
);

export default Svg;