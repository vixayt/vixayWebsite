import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css'

class Stocks extends Component {
    constructor() {
        super();
        this.state = {
            stocks: ["AMZN"],
            date: [],
            vwap: []
        }
    }

    callStockAPI() {
        fetch("https://api.iextrading.com/1.0/stock/AMZN/chart/dynamic")
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                var vwap = [];
                var date = [];
                for (var key in result.data) {
                    date[key] = result.data[key].date;
                    vwap[key] = result.data[key].vwap;
                }
                this.setState({ date: date, vwap: vwap})
                console.log(this.state.date);
                console.log(this.state.vwap);

            })
    }

    componentDidMount() {
        this.callStockAPI()
    }
    displayInfo() {
        Object.values(this.state.info).map((key) => {
            return <li key={key}>{ this.state.info[key]}</li>
        });
    }

    render() {
        const data = [{
            stock: this.state.date,
            vwap: this.state.vwap
        }];
        const columns = [{
            Header: 'Date',
            accessor: 'stock',
        }, {
            Header: 'VWAP',
            accessor: 'vwap'
        }];
        return (
            <div>
                {this.state.stocks}
                <pre>
                  <ReactTable
                      data={data}
                      columns={columns}
                      />
                  {/*{JSON.stringify(this.state.info, null, 4)}*/}
                </pre>
            </div>
        )
    }
}
export default Stocks;