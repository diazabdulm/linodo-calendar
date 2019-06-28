import React from 'react';
import Container from '@material-ui/core/Container';
import SearchColleges from './components/SearchColleges';
import NavigationMenu from './components/NavigationMenu';
import CollegeListItem from './components/CollegeListItem';
import AddDeadlinesToCalendar from './components/AddDeadlinesToCalendar';
import './App.css';

function App() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <CollegeListItem />
      </Container>
      <AddDeadlinesToCalendar />
    </>
  );
}

export default App;
