import React from 'react';


const Table=(props)=> {

    const tableRows=props.data.map(function(item,index){
       console.log(item);

        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )


    });


    return (

        <table className='table'>
            <thead className='thead-inverse'>
           <tr>
               <th>Name</th>
               <th>Course</th>
               <th>Grade</th>
           </tr>

            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}

export default Table;