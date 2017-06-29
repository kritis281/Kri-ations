/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './KriationsHome.css';


class KriationsHome extends React.Component {

  render() {
    return (
      <div>
        <div id="top" />
        <section className={s.gallery}>
          <div className={s.row}>
            <ul>
              <a href="#item02" className={s.close} >
                <li>
                  <a href="#item02">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1474358/respecthustle-bearfight-jeremiahbritton-.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item02">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1514374/essentialswallpaperdribbble-jeremiahbritton.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item02">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1502114/upatnight-city-jb.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item01">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1483213/dog-jeremiahbritton.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item02">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1147375/dwyl-circle-jb.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item01">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1139662/libertytorch-jeremiahbritton.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item01">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1484728/essentials-jeremiahbritton-dribbble.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#item02" >
                    <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1425556/draftdrawcoasters-jeremiahbritton.png" alt="" />
                  </a>
                </li>
              </a>
            </ul>


            <div id="item01" className={s.port}>

              <div className={s.row}>
                <div className={s.description}>
                  <h1>Item 01</h1>
                  <p>Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
                </div>

                <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/1379781/winterletters-jeremiahbritton-dribbble.png" alt="" />
              </div>
            </div>


            <div id="item02" className={s.port}>

              <div className={s.row}>
                <div className={s.description}>
                  <h1>Item 02</h1>
                  <p>pulvinar ut magna eget, consectetur auctor turpis.</p>
                </div>
                <img src="https://d13yacurqjgara.cloudfront.net/users/22177/screenshots/404704/wontstopblue-womens-jeremiahbritton.jpg" alt="" />
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default KriationsHome;
