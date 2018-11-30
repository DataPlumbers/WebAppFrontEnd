import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './Table.scss';

const data = [
   {
      id: 6826,
      firstName: "Ameer",
      lastName: "Abdullah",
      primaryPosition: "RB",
      jerseyNumber: 21,
      currentTeam: {
         id: 63,
         abbreviation: "MIN"
      }
   },
   {
      id: 6827,
      firstName: "Duke",
      lastName: "Johnson",
      primaryPosition: "RB",
      jerseyNumber: 14,
      currentTeam: {
         id: 63,
         abbreviation: "CLE"
      }
   },
   {
      id: 6821,
      firstName: "Amari",
      lastName: "Cooper",
      primaryPosition: "WR",
      jerseyNumber: 80,
      currentTeam: {
         id: 63,
         abbreviation: "DAL"
      }
   },
   {
      id: 6326,
      firstName: "Philip",
      lastName: "Rivers",
      primaryPosition: "QB",
      jerseyNumber: 17,
      currentTeam: {
         id: 63,
         abbreviation: "LAC"
      }
   },
]

const columns = [{
      Header: 'ID',
      accessor: 'id' // String-based value accessors!
   }, {
      Header: 'First Name',
      accessor: 'firstName',
      Cell: props => <span className='firstname'>{props.value}</span>
   },
   {
      Header: 'Last Name',
      accessor: 'lastName',
      Cell: props => <span className='lastname'>{props.value}</span>
   },
   {
      Header: 'Position',
      accessor: 'primaryPosition',
      Cell: props => <span className='position'>{props.value}</span>
   },
   {
      Header: 'Jersey Number',
      accessor: 'jerseyNumber',
      Cell: props => <span className='number'>{props.value}</span>
   },
   {
      id: 'currentTeam', // Required because our accessor is not a string
      Header: 'Current Team',
      accessor: d => d.currentTeam.abbreviation // Custom value accessors!
   }]

const Table = props => {
   return (
      <ReactTable
         data={data}
         columns={columns}
         defaultPageSize={5}
         className="-striped -highlight blah"
      />
   );
}

export default Table;