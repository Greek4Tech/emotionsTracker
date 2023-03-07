import React, { useState } from 'react';
import AvatarList from './components/AvatarList';
import MiniMonthNavigator from './components/MiniMonthNavigator';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  return (
    <div className="App">
     <AvatarList/>
     <MiniMonthNavigator onChange={handleDateChange} />
    </div>
  );
}

export default App;
