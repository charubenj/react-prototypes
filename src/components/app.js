import React from 'react';
import Table from './table';



const students=[
    {
        name:'Nick',
        course:'math',
        grade:'90'
    },
    {
        name:'Jack',
        course:'math',
        grade:'80'
    }
]





const App=()=>{
    return (
        <div className='container'>
            <h1>"Student Grade Table"</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;


