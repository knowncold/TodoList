import React, { Component } from 'react';
import axios from 'axios';
import {FormControl, ControlLabel, FormGroup, Form, Button} from 'react-bootstrap';


class ReItem extends Component {
    constructor(props) {
        super(props);
        this.state = {done: this.props.done, active: true, title: this.props.title, detail: this.props.details, expire: this.props.expire, id: this.props.id};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleExpireDataChange = this.handleExpireDataChange.bind(this);
        this.handleDetailsChange = this.handleDetailsChange.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem = async (event) => {
        event.preventDefault();
        this.setState({active: false});
        await axios.post(`http://127.0.0.1:8000/todolist/update/`, this.state);
        console.log(this.state);
        this.update();
    };

    update(){
        this.props.update();
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
    }

    handleDetailsChange(event){
        this.setState({detail: event.target.value});
    }

    handleExpireDataChange(event){
        this.setState({expire: event.target.value});
    }

    render() {
        return (
            <div>
                {this.state.active ?
                    <div>
                        <Form inline onSubmit={this.updateItem}>
                            <FormGroup controlId="title">
                                <ControlLabel>Title</ControlLabel>&nbsp;
                                <FormControl type="text" onChange={this.handleTitleChange} placeholder={this.state.title}/>
                            </FormGroup>&nbsp;
                            <FormGroup controlId="">
                                <ControlLabel>Details</ControlLabel>&nbsp;
                                <FormControl type="text" onChange={this.handleDetailsChange} placeholder={this.state.detail}/>
                            </FormGroup>&nbsp;
                            <FormGroup controlId="test">
                                <ControlLabel>ExpireDate</ControlLabel>&nbsp;
                                <FormControl type="text" onChange={this.handleExpireDataChange} placeholder={this.state.expire}/>
                            </FormGroup>&nbsp;
                            <Button type="submit" bsStyle="success">保存</Button>
                        </Form>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

ReItem.prototypes = {

};

ReItem.defautPrototypes = {

};

export default ReItem;
