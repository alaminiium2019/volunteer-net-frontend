import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './RegiEvents.css';

const RegisteredEvents = () => {
    const [regEvent, setRegEvent] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    //Added jwt

    useEffect(() => {
        fetch('https://alamin-volunteernetwork.herokuapp.com/registeredEvent?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRegEvent(data))
    }, [])
    //New Added
    return (
        <div>
            <div className="row d-flex">
                {
                    regEvent.map(events => <DisplayEvents RegEvents={events}></DisplayEvents>)
                }
            </div>
        </div>
    );
};


function DisplayEvents(props) {
    const { date, volwork, _id } = props.RegEvents;

    const deleteEvent = () => {
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

    return (
        <div className="eventData container">
            <div className="col-md-6">
                <div className="card" style={{ width: "16rem" }}>
                    <img src="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{volwork}</h5>
                        <p className="card-text">{date}</p>
                        <button className="m-3 p-2 btn-secondary text-right" onClick={deleteEvent}>Cencel</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default RegisteredEvents;