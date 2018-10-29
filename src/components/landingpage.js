import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Parallax} from 'react-parallax';
import mee from '../images/landing/journey1.jpg';
import meee from '../images/about/mee1.jpg';

class Landing extends Component {
  render() {
    return(
      <div 

      style={
        {width: '100%',
         margin: 'auto',
         textAlign: 'center'}
           }>
      <Parallax
      blur={6}
      bgImage={mee}
      bgImageAlt="landing img"
      strength={100}>
      <div>
        <img src={meee} alt="own img" className='mee'/>
        </div>
        {/* <h1 className='moi intro-text'>Moi!! Tervey!!
        {
            emoji.getUnicode("heart_eyes")
        }</h1> */}
        <h1 className='intro-text'> Sarita khanal
        <span> 
            <h4 className='sub'>Frontend Developer | Metropolia Student | Writer | Learner</h4>
        </span></h1>
        <div className="social-links">

       {/* LinkedIn */}
<a href="https://www.linkedin.com/in/sarita-khanal-b4a16b150/" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-linkedin-square" aria-hidden="true" />
</a>

{/* Github */}
<a href="https://github.com/saritakha" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-github-square" aria-hidden="true" />
</a>

{/* Medium */}
<a href="https://medium.com/@saritakhanal" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-medium-square" aria-hidden="true" />
</a>

{/* Facebook */}
<a href="https://www.facebook.com/profile.php?id=100009715870155" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-facebook-square" aria-hidden="true" />
</a>

</div>

      </Parallax>
     </div>
    )
  }
}

export default Landing;
