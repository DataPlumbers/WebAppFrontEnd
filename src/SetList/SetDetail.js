import React, { Component } from 'react';
import { Paper, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import './SetList.scss'

// Temporary dummy data
const classifiction = {
   category: {name: "Reviews", properties: ["product_id", "author", "rating", "comment"]},
   dataset: [
      {id: 1, product_id: 1, author: "Tony", rating: 5, comment: "This product was great. Will buy again for the next model!"},
      {id: 2, product_id: 1, author: "Mark", rating: 4, comment: "Great laptop for the price!"},
      {id: 3, product_id: 1, author: "David", rating: 3, comment: "Just like any other laptop computer. Nothing special."},
      {id: 4, product_id: 1, author: "John", rating: 1, comment: "This laptop doesn't work and shipping was slow"},
      {id: 5, product_id: 1, author: "Richard", rating: 4, comment: "Setup was easy and worked out of the box. 4/5"}
   ]
};

export default class SetDetail extends Component {
   
   renderHeaderCells = labels => {
      return (
         labels.map(label => {
            return <TableCell key={label}>{label}</TableCell>
         })
      );
   }

   renderDatesetRows = (classifiction) => {
      let properties = classifiction.category.properties;
      let dataset = classifiction.dataset;

      return dataset.map(data => {
         const rowKey = data.id;
         return (<TableRow key={rowKey}>
            {properties.map(property => {
               const cellKey = rowKey + "_" + property;
               return (<TableCell key={cellKey}>{data[property]}</TableCell>);
            })}
         </TableRow>);
      })
   }

   render() {
      return (
         <>
            <h3>Dataset Detail</h3>
            <div className="setdetail content-body">
               <Typography className="category-header" align={'left'} variant="h6">Reviews</Typography>
               <Paper>
                  <Table>
                     <TableHead> 
                        <TableRow>
                           {this.renderHeaderCells(classifiction.category.properties)}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {classifiction.dataset ? this.renderDatesetRows(classifiction) : null}
                     </TableBody>
                  </Table>
               </Paper>
            </div>
         </>
      );
   }
}
