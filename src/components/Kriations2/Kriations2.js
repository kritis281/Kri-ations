import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Kriations2.css';
import bird from './bird.png';
import piano from './piano.png';
import guitar from './guitar.png';
import radio from './radio.png';
import salsa from './salsa.png';
import wine from './wine.png';


class KriationsHome extends React.Component {

  render() {
    return (
      <div className={s.backolor}>
        <h1><b><i>Kriations</i></b></h1>
        <div className={`${s.gallery} ${s.cf}`}>
          <a href={bird} className={`${s.gallery} ${s.cf}`}>
            <div>
              <img src={bird} alt="" />
            </div>
          </a>
          <a href={piano} className={`${s.gallery} ${s.cf}`}><div>
            <img src={piano} alt="" />
          </div></a>
          <div>
            <img src={guitar} alt="" />
          </div>
          <div>
            <img src={radio} alt="" />
          </div>
          <div>
            <img src={salsa} alt="" />
          </div>
          <div>
            <img src={wine} alt="" />
          </div>
          <div>
            <img src="http://abload.de/img/a6aawu.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(KriationsHome);
