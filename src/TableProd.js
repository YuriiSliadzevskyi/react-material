import React from 'react';

export class TableProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        console.log("componentDidMount TableProd");
        /*
                fetch("https://www.onlinetool.in/api/products/")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({
                                isLoaded: true,
                                items: result
                            });
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
        */
            }

    render() {
        console.log("render table");
//        const {error, isLoaded, items} = this.state;
        const {error, isLoaded, items} = this.props.tabD.tabDat;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <table border="1">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Homepage</td>
                        <td>Description</td>
                    </tr>
                    {items.map(item => (
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

    }
}

export default TableProd;