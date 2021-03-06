import React from 'react';
import './App.css';
import Header from './components/Header';
// import EmployeeTable from './components/Table';
import EmployeeTable from './components/EmployeeTable';

// material imports
import Container from '@material-ui/core/Container';

function App() {
    return (
        <>
            <Header />
            <Container fixed>
                <EmployeeTable />
            </Container>
        </>
    );
}

export default App;