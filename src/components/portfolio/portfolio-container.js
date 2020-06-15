import React, {Component} from 'react';
import PortfolioItem from './portfolio-item.js';

export default class PortfolioContainer extends Component {
   constructor() {
      super();

      console.log("Portfolio container has rendered");
   }
   
   portfolioItems() {
      const data = ["Intel", "AtTask", "Solutionreach", "O.C. Tanner"];

      return data.map(item => {
         return <PortfolioItem />;
      })
   }

   render() {
      return (
         <div>
            <h2>Portfolio Items Go Here...</h2>

            { this.portfolioItems() }
         </div>
      )
   }
}