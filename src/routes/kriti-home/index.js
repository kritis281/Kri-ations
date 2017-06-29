/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Kriations2 from '../../components/Kriations2';


export default {

  path: '/kriti-home',

  async action() {
    return {
      title: 'Kriti Home',
      chunk: 'kriti-home',
      component: <Kriations2 />,
    };
  },

};
