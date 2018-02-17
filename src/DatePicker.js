import React from 'react';

import { DateRangePicker} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

import './App.css'

class Table extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        focusedInput: null,
         startDate: props.initialDate,
         endDate: props.initialDate,
       };
}

//   onDatesChange = ({ startDate, endDate }) =>{

//     const getStartDate = startDate;
//     const getEndDate = endDate;

//   console.log("startDate",getStartDate)
//   console.log("endDate",getEndDate)

//      this.setState({ 
//       getStartDate , 
//       getEndDate});
// }

// onFocusChange = (focusedInput) =>
// {
//     this.setState({ focusedInput });
// }

updateDate(start,end){
    console.log('calisti2');
    this.props.updateDate(start,end);
  }


render() {
  
  return (

    <div className="flex-container">
       <DateRangePicker
         // {...this.props}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          onDatesChange={({ startDate, endDate }) => {
            console.log("startDate,endDate",startDate,endDate)
            this.setState({ startDate, endDate })
            this.updateDate(startDate,endDate);}}
          focusedInput={this.state.focusedInput}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          startDateId="datepicker_start_home"
          endDateId="datepicker_end_home"
          startDatePlaceholderText="Start Date"
          endDatePlaceholderText="End Date"
          showClearDates={true}
          showDefaultInputIcon={true}
          hideKeyboardShortcutsPanel={true}
          isOutsideRange={() => { return false }}
        />
                </div>
    );
  }
}


export default Table;