import { DeleteForever } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const VolEventsReg = () => {
    const [volEventsReg, setvolEventsReg] = useState([]);
    
//will be change

    useEffect(() => {
        fetch('https://alamin-volunteernetwork.herokuapp.com/volunteerList')
            .then(res => res.json())
            .then(data => setvolEventsReg(data))
    }, [])

    
    return (
        <div>            
            {
                volEventsReg.map(events => <DisplayVolList disList={events}></DisplayVolList>

                )
            }

        </div>
    );
};

function DisplayVolList(props){
    const {name,email,date,volwork,_id} = props.disList;

    const deleteVolList = () => {

        fetch(`https://alamin-volunteernetwork.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Deleted successfully');

            })
            .catch(error => console.log(error))

    }


    return(
        <div>

        <table className="table mt-4">

            <tbody>
            <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{volwork}</td>
            <td><button onClick={deleteVolList}><DeleteForever>Delete</DeleteForever></button></td>
            </tr>
            </tbody>
</table>
</div>
    )
}
export default VolEventsReg;