import React, { useState } from 'react';
// import './MiniMonthNavigator.css';

function MiniMonthNavigator({ onChange }) {

  const entries = [
    {emotion: "anger", score: 5, notes: "I lost my keys", date: "November 10th, 2022"},
    {emotion: "anger", score: 6, notes: "Cannot find my glasses", date: "November 5th, 2022"},
    {emotion: "anger", score: 2, notes: "Forgot my mask at home", date: "December 2nd, 2022"},
    {emotion: "anger", score: 9, notes: "I failed my exam, I had studied so hard for it", date: "January 22nd, 2023"},
    {emotion: "anger", score: 1, notes: "My phone glitched, wouldn't unlock for a minute or so", date: "December 2nd, 2022"},
  ]

  // useState for selectedMonth. The selected month will be stored here. 
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getYear());

  // onClick={() => handleClick(i)}> - Here, handleClick is a function that is taking in month as an argument. 
  // Line 20: setSelected month is updating the state of selectedMonth to the argument passed (month)
  const handleClick = month => {
    setSelectedMonth(month);
    // if there is a change `onChange` is updated with a `new Date()`: year and month 
    if (onChange) {
      onChange(new Date(new Date().getFullYear(), month));
    }
  };

  // function that executes when `{'<'} button` is clicked
  const handlePrevMonth = () => {
    // This code is checking if the `selectedMonth` is equal to 0. If it is, then it means that the current month is January. January is 0 instead of 1 because it's the first index of the array of months. 
    const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
    setSelectedMonth(prevMonth);
     // if there is a change `onChange` is updated with a `new Date()`: year and month 
    if (onChange) {
      onChange(new Date(new Date().getFullYear(), prevMonth));
    }
  };

  // similar as above. Instead of subtracking a month, here you add a month.
  const handleNextMonth = () => {
    const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
    setSelectedMonth(nextMonth);
    if (onChange) {
      onChange(new Date(new Date().getFullYear(), nextMonth));
    }
  };

  // function that returns a specific month. If you click on Jan, it changes the class of the div to "month selected"
  const renderMonths = () => {
    // empty array
    const months = [];
    // loop through 0 - 11 
    for (let i = 0; i < 12; i++) {
      const classNames = ['month'];
      if (i === selectedMonth) {
        classNames.push('selected');
      }
      months.push(
        <div key={i} className={classNames.join(' ')} onClick={() => handleClick(i)}>
            {/* here we'd like to return the events of the month */}
          {new Date(new Date().getFullYear(), i).toLocaleString('default', { month: 'short' })}
        </div>
      );
    }
    return months;
  };

  return (
    <div className="mini-month-navigator">
      <div className="navigator-header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <div className="navigator-title">
          {new Date(new Date().getFullYear(), selectedMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <div className="navigator-body">{renderMonths()}</div>
    </div>
  );
}

export default MiniMonthNavigator;
