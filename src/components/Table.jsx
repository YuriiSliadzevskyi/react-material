import React from "react";

const Table = props => {
    // console.log("Table - - - - - ");
    return (
        <table border="1">
            <thead>
            <tr>
                <td>Id</td>
                <td>Homepage</td>
                <td>Description</td>
            </tr>
            {props.items.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.homepage}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </thead>
        </table>
    );
}
export default Table;