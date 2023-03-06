import React, { useState } from 'react';
// import './MiniMonthNavigator.css';

function MiniMonthNavigator({ onChange }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const handleClick = month => {
    setSelectedMonth(month);
    if (onChange) {
      onChange(new Date(new Date().getFullYear(), month));
    }
  };

  const handlePrevMonth = () => {
    const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
    setSelectedMonth(prevMonth);
    if (onChange) {
      onChange(new Date(new Date().getFullYear(), prevMonth));
    }
  };

  const handleNextMonth = () => {
    const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
    setSelectedMonth(nextMonth);
    if (onChange) {
      onChange(new Date(new Date().getFullYear(), nextMonth));
    }
  };

  const renderMonths = () => {
    const months = [];
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
