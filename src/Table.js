import React from "react"
import ReactTable from 'react-table';
import moment from 'moment';

import'./table.css'
//import tableData from './mydata.js'

const columns = [{
  columns: [
    {
      Header:"Time",
      id: "time",
      accessor: (t) => { return t.time }
    },
    {
      Header: "Username",
      id: "username",
      accessor: (u) => { return u.username },
    },
    {
      Header:"Type",
      id: "type",
      accessor: "type"  
      },
    {
      Header:"Action",
      id: "action",
      accessor: "action"
      },
    
    {
      Header:"Description",
      id: "description",
      accessor: "description"
    }]
}]

class Table extends React.Component {

   constructor(props) {
    super(props)
     this.state = {
      data: [],
      filtered: [],
    };
     console.log("constructor table props here ",props);
    }

    componentWillMount() {
    this.updateTableData()
  }

updateTableData = () => {
  this.setState({
    data:this.props.tableData
  })
}


  clearFilter = () =>
  {
    this.setState({filtered:[]});
  }

   caseSensitiveFilter = (filter, row) => {

            const id = filter.pivotId || filter.id;
            if (row[id] !== null && typeof row[id] === "string"){
                return (
                    row[id] !== undefined ?
                        String(row[id].toLowerCase()).includes(filter.value.toLowerCase())
                        : true

                );
            }
        };


 componentWillReceiveProps(props){
    console.log("componentWillReceiveProps props come here",props);

    let start_date_string = moment(props.startDate).format('DD/MM/YYYY LT');

    let end_date_string = moment(props.endDate).format('DD/MM/YYYY LT');

    let copyData = Object.assign([],this.props.tableData);
     console.log("copyData value here ",this.props.tableData);
    let filteredData = copyData.filter(x => x.time >= start_date_string && x.time <= end_date_string);
    console.log("filteredData here ",filteredData);

    if (!filteredData){
      return(
        this.setState({data: this.props.tableData})
        )
      
    }else
    {
      return(
        this.setState({data:filteredData})

        )
    
    }
    // this.setState({
    //   data:filteredData
    // })
    
  }


    render () {

      let {data} = this.state

      //let data= this.props.tableData

      //console.log("data here start",data)
      
      return (

  <div className="container">
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={30}
        resizable={true}
         onFilteredChange={(filtered) => {
          
          this.setState({ filtered });

        }}
        filtered={this.state.filtered}
        onSortedChange={this.onSortedChange}
        sortable={true}
        filterable={true}
        className="table-scrollbar"
        pageSizeOptions={[30]}
        defaultFilterMethod={this.caseSensitiveFilter}
        noDataText="Oh Noes no data here!"
        numberOfMonths={1}
         defaultSorted={[
          {
            id: "time",
            desc: true
          }
        ]}

      />
     </div>
      )
}
}


export default Table
