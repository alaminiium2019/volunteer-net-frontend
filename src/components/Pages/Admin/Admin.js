import React from 'react';
import { Link } from 'react-router-dom';
import eventImg from '../../../images/logos/plus 1.png';
import list from '../../../images/logos/users-alt 1.png';
import VolEventsReg from '../../VolunteerList/VolEventsReg';

const Admin = () => {

    return (
        <div className="container mt-4">
            <div className="d-flex">
                <div>
                    <div className="d-flex pt-4">
                        <div className="pr-3 mr-3">
                            <div className="d-flex">
                                <img src={list} />
                                <p className="pt-3">Volunteer register list</p>
                            </div>
                            <div className="d-flex ">
                                <img src={eventImg} />
                                <p className="pt-2"><Link to="/eventsReg">Add Event</Link></p>
                            </div>

                        </div>
                        <div className="ml-4">
                        </div>
                    </div>
                </div>

                <div>
                    <VolEventsReg></VolEventsReg>
                </div>
            </div>


        </div>
    );
};

export default Admin;