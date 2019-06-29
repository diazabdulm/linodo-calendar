import React, { useState } from 'react';
import NavigationMenu from './components/NavigationMenu';
import SearchColleges from './components/SearchColleges';
import CollegeList from './components/CollegeList';
import AddDeadlinesToCalendar from './components/AddDeadlinesToCalendar';
import useCollegeState from './utils/useCollegeState';

function App() {
  const { colleges, addCollege, deleteCollege } = useCollegeState([]);
  return (
    <>
      <SearchColleges saveCollege={addCollege} />
      <CollegeList colleges={colleges} deleteCollege={deleteCollege} />
      <AddDeadlinesToCalendar />
    </>
  );
}

export default App;
