import React, { Component } from 'react';
import axios from 'axios';
import {Button, ButtonToolbar} from 'react-bootstrap';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.id, done: this.props.done, active: true, title: this.props.title, details: this.props.details, expire: this.props.expire};
        this.mark = this.mark.bind(this);
        this.del = this.del.bind(this);
        this.update = this.update.bind(this);
        this.revise = this.revise.bind(this);
    }

    update(){
        this.props.update();
    }

    revise(){
        this.props.revise(this.state.title, this.state.id, this.state.done, this.state.details, this.state.expire);
    }

    del = async () => {
        this.setState({active: false});
        await axios.delete(`http://127.0.0.1:8000/todolist/items/${this.state.id}/`);
        this.update();
    };

    mark = async (event)=>{
        event.preventDefault();
        console.log(this.state);
        await axios.put(`http://127.0.0.1:8000/todolist/items/${this.state.id}/`,{
            "done": true,
            "id": this.state.id,
            "expireDate": this.state.expire,
            "title": this.state.title,
            "details": this.state.details
        });
        this.update();
    };

    render() {
        return (
            <tr>
                <th>{this.props.title}</th>
                <th>{this.props.details}</th>
                <th>{this.props.expire}</th>
                <th><ButtonToolbar>
                    {this.props.done ? <Button bsStyle="success" disabled>已完成</Button> : <Button bsStyle="success" onClick={this.mark}>完成</Button>}&nbsp;
                    <Button bsStyle="warning" onClick={this.revise}>修改</Button>&nbsp;
                    <Button bsStyle="danger" onClick={this.del}>删除</Button></ButtonToolbar></th>
            </tr>
        )
    }
}

Item.prototypes = {

};

Item.defautPrototypes = {

};

export default Item;
