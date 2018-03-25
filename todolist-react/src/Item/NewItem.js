import React, { Component } from 'react';
import axios from 'axios';
import {FormControl, ControlLabel, FormGroup, Form, Button} from 'react-bootstrap';


class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {done: false, active: true};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleExpireDataChange = this.handleExpireDataChange.bind(this);
        this.handleDetailsChange = this.handleDetailsChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem = async (event) => {
        event.preventDefault();
        this.setState({active: false});
        await axios.post(`http://127.0.0.1:8000/todolist/add/`, this.state);
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
                    <Form inline onSubmit={this.addItem}>
                        <FormGroup controlId="title">
                            <ControlLabel>Title</ControlLabel>&nbsp;
                            <FormControl type="text" onChange={this.handleTitleChange}/>
                        </FormGroup>&nbsp;
                        <FormGroup controlId="">
                            <ControlLabel>Details</ControlLabel>&nbsp;
                            <FormControl type="text" onChange={this.handleDetailsChange}/>
                        </FormGroup>&nbsp;
                        <FormGroup controlId="test">
                            <ControlLabel>ExpireDate</ControlLabel>&nbsp;
                            <FormControl type="text" onChange={this.handleExpireDataChange}/>
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

NewItem.prototypes = {

};

NewItem.defautPrototypes = {

};

export default NewItem;
