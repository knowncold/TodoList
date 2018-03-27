import React, { Component } from 'react';
import axios from 'axios';
import {FormControl, ControlLabel, FormGroup, Form, Button} from 'react-bootstrap';


class ReItem extends Component {
    constructor(props) {
        super(props);
        this.state = {done: this.props.done, active: true, title: this.props.title, details: this.props.details, expireDate: this.props.expire, id: this.props.id};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleExpireDataChange = this.handleExpireDataChange.bind(this);
        this.handleDetailsChange = this.handleDetailsChange.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem = async (event) => {
        event.preventDefault();
        this.setState({active: false});
        await axios.put(`http://127.0.0.1:8000/todolist/items/${this.state.id}/`, this.state);
        this.update();
        this.props.doneRevise();
    };

    update(){
        this.props.update();
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
    }

    handleDetailsChange(event){
        this.setState({details: event.target.value});
    }

    handleExpireDataChange(event){
        this.setState({expireDate: event.target.value});
    }

    render() {
        return (
            <div>
                    <div>
                        <Form inline onSubmit={this.updateItem}>
                            <FormGroup controlId="">
                                <ControlLabel>Title</ControlLabel>&nbsp;
                                <FormControl type="text" onChange={this.handleTitleChange} value={this.state.title}/>
                            </FormGroup>&nbsp;
                            <FormGroup controlId="">
                                <ControlLabel>Details</ControlLabel>&nbsp;
                                <FormControl type="text" onChange={this.handleDetailsChange} value={this.state.details}/>
                            </FormGroup>&nbsp;
                            <FormGroup controlId="">
                                <ControlLabel>ExpireDate</ControlLabel>&nbsp;
                                <FormControl type="text" onChange={this.handleExpireDataChange} value={this.state.expireDate}/>
                            </FormGroup>&nbsp;
                            <Button type="submit" bsStyle="success">保存</Button>
                        </Form>
                    </div>
            </div>
        );
    }
}

ReItem.prototypes = {

};

ReItem.defautPrototypes = {

};

export default ReItem;
