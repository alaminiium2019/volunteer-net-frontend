import React from 'react';
import Volunteer_Items from '../Volunteer_task/Volunteer_Items';


const Home = () => {

    return (
        <div className="container">
            <div className="text-center">
                <br></br>
                <br></br>
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <br></br>
                <input type="search" className="searchField p-1 w-46" placeholder="Search...."></input>
                <button className="p-1 btn-primary" >Search</button>
            </div>
            <br></br>
            <br></br>
            <Volunteer_Items></Volunteer_Items>
        </div>
    );


};

export default Home;