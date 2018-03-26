import React, { Component } from 'react';
import NewItem from '../Item/NewItem';
import Item from '../Item/Item';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import ReItem from "../Item/ReItem";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, reItem: []};
        this.addItem = this.addItem.bind(this);
        this.reviseItem = this.reviseItem.bind(this);
        this.update = this.update.bind(this);
        this.update();
    }

    addItem(event){
        event.preventDefault();
        this.setState({count: this.state.count + 1});
    }

    update = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/todolist/items/`);
        const tmp = [];
        console.log(res.data[0]);
        for (let i=0;i<res.data.length;i++){
            const item = res.data[i];
            tmp.push(<Item title={item.title} details={item.details} expire={item.expireDate} id={item.id} done={item.done} key={i} update={this.update} revise={this.reviseItem}/>);
        }
        this.setState({itemList : tmp});
    };

    reviseItem(title, id, done, details, expire) {
        let newReItem = this.state.reItem;
        const item = {
            "title": title,
            "id": id,
            "details": details,
            "expire": expire,
            "done": done
        };
        newReItem.push(item);
        this.setState({reItem: newReItem});
    }

    render() {
        const newItemList = [];
        for (let i=0;i<this.state.count;i++){
            newItemList.push(<NewItem key={i} update={this.update}/>);
        }
        const reItemList = [];
        for (let i=0;i<this.state.reItem.length;i++){
            let item = this.state.reItem[i];
            reItemList.push(<ReItem done={item.done} details={item.details} id={item.id} title={item.title} expire={item.expire} update={this.update} key={i}/>);
        }
        console.log(this.state.itemList);
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
                    {this.state.itemList}
                    </tbody>
                </Table>
                <Button bsStyle="primary" onClick={this.addItem}>添加</Button>
                <div className="Addition-Item">
                {newItemList.map(function (obj) {
                    return obj;
                })}
                {reItemList}
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
