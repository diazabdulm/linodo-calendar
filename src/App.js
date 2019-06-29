import React from 'react';
import Container from '@material-ui/core/Container';
import SearchColleges from './components/SearchColleges';
import NavigationMenu from './components/NavigationMenu';
import CollegeList from './components/CollegeList';
import AddDeadlinesToCalendar from './components/AddDeadlinesToCalendar';
import './App.css';

function App() {
  return (
    <>
      <NavigationMenu />
      <CollegeList />
      <AddDeadlinesToCalendar />
    </>
  );
}

export default App;
