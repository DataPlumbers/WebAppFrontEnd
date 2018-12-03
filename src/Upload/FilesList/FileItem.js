import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

class FileItem extends React.Component {

    componentDidMount() {
        console.log("Did mount", this.props.file);
    }

    componentDidUpdate() {
        console.log("Did update", this.props.file);
    }

    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.file.name}
                </TableCell>
                <TableCell>
                    {this.props.file.size}   
                </TableCell>
                <TableCell>
                    {this.props.file.type}        
                </TableCell>
            </TableRow>
        );
    }
}

export default FileItem;
