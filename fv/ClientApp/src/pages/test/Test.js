import React, { Component } from "react";
import { API_LOCAL } from './../../Constants/Constants' //url prueba
import List from './List';
import { log } from "util";

class Test extends Component {
    
    constructor(props) {
        super(props);
        this.state = { data: [], error: null };
    }

    async componentDidMount() {
        this.getWallet()
    }

    async getWallet() {
        try {
            let res = await fetch(`${API_LOCAL}/users`)
            let data = await res.json()
            this.setState({
                data: data,
            })
            //console.log(this.state.data);
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <List
                    data={this.state.data}
                />
            </div>
        );
    }
}
export default Test;
