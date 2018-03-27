import React, { Component } from 'react';
import NewItem from '../Item/NewItem';
import Item from '../Item/Item';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import ReItem from "../Item/ReItem";
import uuid from 'uuid';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {itemList:[], newItemList: [], hasRevise: false, hasAdd: false};
        this.addItem = this.addItem.bind(this);
        this.reviseItem = this.reviseItem.bind(this);
        this.update = this.update.bind(this);
        this.doneRevise = this.doneRevise.bind(this);
        this.doneAdd = this.doneAdd.bind(this);
        this.update();
    }

    addItem(){
        this.setState({hasAdd: true});
    }

    doneAdd(){
        this.setState({hasAdd: false});
    }

    update = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/todolist/items/`);
        const tmpList = [];
        for (let i=0;i<res.data.length;i++){
            tmpList.push(res.data[i]);
        }
        this.setState({itemList : tmpList});
    };

    reviseItem(title, id, done, details, expire) {
        this.setState({hasRevise: true, reItem: {
            title,
            id,
            details,
            expire,
            done
        }});
    }

    doneRevise(){
        this.setState({hasRevise: false});
    }

    render() {
        return (
            <div className="list">
                <h1>ToDoList</h1>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Details</th>
                        <th>ExpireDate</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.itemList.map( (item) => {
                        return <Item title={item.title} details={item.details} expire={item.expireDate} id={item.id} done={item.done} key={uuid.v4()} update={this.update} revise={this.reviseItem}/>;
                    })}
                    </tbody>
                </Table>
                <Button bsStyle="primary" onClick={this.addItem}>添加</Button>
                <div className="Addition-Item">
                {this.state.hasAdd &&
                    <NewItem update={this.update} doneAdd={this.doneAdd}/>
                }
                {this.state.hasRevise &&
                    <ReItem done={this.state.reItem.done} details={this.state.reItem.details}
                            id={this.state.reItem.id} title={this.state.reItem.title}
                            expire={this.state.reItem.expire} update={this.update} doneRevise={this.doneRevise}/>
                }
                </div>
            </div>
        )
    }
}

List.prototypes = {

};

List.defautPrototypes = {

};

export default List;
