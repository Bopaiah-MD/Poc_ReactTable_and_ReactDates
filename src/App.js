import React from 'react';
import './App.css'

import Table from './Table'

import DatePicker from "./DatePicker"

import tableData from './mydata.js'

class App extends React.Component {

	constructor(props){
    super(props);
    this.state = {
      startDate : props.initialDate,
      endDate: props.initialDate
    }
    //this.updateDate = this.updateDate.bind(this);
  }

  componentWillMount() {
    this.updateTableData()
  }

updateTableData = () => {
  this.setState({
    data:tableData
  })
}

  updateDate = (startDate,endDate) => {
    console.log('calisti');
    this.setState({startDate,endDate});
  }



 render() {

return (
	    <div>
        <DatePicker updateDate={this.updateDate}/>
        <br/>
       <span className="clear-all" onClick={()=>this.tableRef.clearFilter()}>Clear Filter</span> <br/><br/><br/>
        <Table ref={(r)=>this.tableRef=r} 
        startDate={this.state.startDate} 
        endDate={this.state.endDate}
        tableData={this.state.data}/>
        </div>
);   

}
}

export default App;
