import React, {Component} from 'react';
import PortfolioItem from './portfolio-item.js';

export default class PortfolioContainer extends Component {
   render() {
      return (
         <div>
            <h2>Portfolio Items Go Here...</h2>

            <PortfolioItem />
         </div>
      )
   }
}