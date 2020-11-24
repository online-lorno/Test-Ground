import React, { Component } from "react";
import web3 from "../web3"
import {Card, Form} from "semantic-ui-react";

class Invest extends Component{

    constructor(props){
        super(props);
        this.state={
            amount : 0
        };

    }

    invest = async event =>{
        console.log("EYYYYYY");
        /*
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();

            await EcoCapCoin.methods
                .burn(this.state.amount) // contains the user account name
                .send({
                    from: accounts[0]
                });
            this.setState({
            });
        } catch (err) {
            console.log("ERROR IN SENDING TO CHAIN " + err);
            this.setState({
            });
        }

             */
    }

    render() {
        return(
            <div>
                <h4>Invest USDC</h4>
                <Form.Field >
                    <input
                        style={{width:'80%'}}
                        placeholder="How many USDC tokens would you like to invest?"
                        onChange={event =>
                            this.setState({
                                amount: event.target.value
                            })
                        }
                    />
                </Form.Field>
                <br/>
                <h4 style={{ color: 'Green', margin: 0  }}>   Tokens will be used for investments and you will get MUSH tokens based on your share of the pool</h4>
                <button id={'setLocation'} className={'btn btn-md btn-success'} style={{color:'black'}} onClick={this.invest}>
                    <span>Invest Tokens</span>
                </button>
            </div>
        )
    }
};
export default Invest;
