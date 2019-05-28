import React from 'react';
import axios from 'axios';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        axios.get(`/get`)
            .then(res => {
               this.setState({
                   data: res.data
               })
            });
    }

    render() {
        const items = this.state.data.map(function(item) {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.date_gmt}</td>
                    <td>{item.guid.rendered}</td>
                    <td>{item.modified}</td>
                    <td>{item.modified_gm}</td>
                    <td>{item.slug}</td>
                    <td>{item.status}</td>
                </tr>

            );
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Date GMT</th>
                            <th>Guild</th>
                            <th>Modified</th>
                            <th>Modified GMT</th>
                            <th>Slug</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
                <pre>{JSON.stringify(this.state.data, null, 2) }</pre>
            </div>
        );
    }
}