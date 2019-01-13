import React from 'react';
import Input from "././components/Input";
import Button from "././components/Button";
import Table from "./components/Table";

//import TableProd from "./TableProd";

class FormAddProd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabDat: {
                error: null,
                isLoaded: false,
                items: []
            },
            submEnab: true,
            newProd: {
                homepage: "",
                description: ""
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        // this.readData = this.readData.bind(this);
    }

    readData() {
        fetch("https://www.onlinetool.in/api/products/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("read---------");
                    this.setState({
                        tabDat: {
                            error: false,
                            isLoaded: true,
                            items: result
                        }
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (er) => {
                    this.setState({
                        tabDat: {
                            isLoaded: true,
                            error: er
                        }
                    })
                    ;
                }
            )
    }

    componentDidMount() {
        console.log("componentDidMount  FormAddProd");
        this.readData();
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newProd: {
                    ...prevState.newProd,
                    [name]: value
                }
            })
//            ,() => console.log(this.state.newProd)
        );
        let subm = (this.state.newProd.homepage.length === 0) || (this.state.newProd.description.length === 0)
            || (e.target.value.length === 0);
        this.setState({submEnab: subm});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let prodData = this.state.newProd;

        fetch("https://www.onlinetool.in/api/products/", {
            method: "POST",
            body: JSON.stringify(prodData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                this.setState({submEnab: true});
                alert("Successful\rcreatedAt " + data.createdAt+
                "\rdescription " + data.description +
                "\rhomepage " + data.homepage +
                "\rid " + data.id);
                this.readData();
            });
        });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            submEnab: true,
            newProd: {
                homepage: "",
                description: ""
            }
        });
        this.readData();
    }

    render() {
        // console.log("render" + this.state.tabDat.error);
        const items = this.state.tabDat.items;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <Input
                        inputtype={"text"}
                        title={"Homepage"}
                        name={"homepage"}
                        value={this.state.newProd.homepage}
                        placeholder={"Enter homepage"}
                        handleChange={this.handleInput}
                    />{" "}
                    <Input
                        inputtype={"text"}
                        title={"Description"}
                        name={"description"}
                        value={this.state.newProd.description}
                        placeholder={"Enter homepage"}
                        handleChange={this.handleInput}
                    />{" "}
                    <Button
                        action={this.handleFormSubmit}
                        type={"primary"}
                        title={"Submit"}
                        style={buttonStyle}
                        disabled={this.state.submEnab}
                    />{" "}
                    <Button
                        action={this.handleClearForm}
                        type={"secondary"}
                        title={"Clear"}
                        style={buttonStyle}
                    />{" "}
                </form>
                {/*<TableProd tabD={this.state.tabDat}/>*/}
                <Table items={items}/>
            </div>
        )
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default FormAddProd;