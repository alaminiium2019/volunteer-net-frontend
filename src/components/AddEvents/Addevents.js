import { Link } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Addevents.css';

const Addevents = () => {

    const {register,handleSubmit,watch}= useForm();


    //addNewEvents


    const onSubmit = () =>{
        // console.log('submitted',data);
      const name = document.getElementById('eventTitle').value;
      const email = document.getElementById('eventDate').value;
      const date =document.getElementById('description').value;
      const description =document.getElementById('image').value;
      const e ={name,email,date,description};
      console.log(e);
  
      console.log(e);
         fetch('https://alamin-volunteernetwork.herokuapp.com/addNewEvents',{
             method:'POST',
             headers: {
                 'Content-Type':'application/json'
             },
             body: JSON.stringify(e)
         })
         .then(res => res.json())
         .then(result => {
             console.log(result)
              alert("Event added")
              
              }
             )
         .catch(error => console.log(error)) 
  
     }

    
    return (
        <div className="container d-flex">
            <div>
                <div className="d-flex pt-4">
                    <div className="pr-3 mr-3">
                        <div className="d-flex">
                            <p className="pt-2"><Link to="/volList">Volunteer List</Link></p>
                        </div>
                        <div className="d-flex ">
                            <p className="pt-2">Add Event</p>
                        </div>
                    </div>
                    <div className="ml-4">
                    </div>
                </div>
            </div>
            <div>
                <form className="addevent-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex pb-3">
                        <div>
                            Event Title<br></br>
                            <input type="text" className="form-control" placeholder="Enter title" id="eventTitle"></input>
                        </div>
                        <div className="pl-4">
                            Event Date<br></br>
                            <input type="date" className="form-control" placeholder="Enter title" id="eventDate"></input>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            Description<br></br>
                            <textarea className="textArea form-control" placeholder="Enter Description" id="description"></textarea>
                        </div>
                        <div className="pl-4">
                            Bannar:<br></br>
                            <input type="file" placeholder="Upload Image" id="image"></input>
                        </div>
                    </div>
                    <input className="btn btn-primary mt-3" type="submit" />
                </form >
            </div>
        </div >
    );
};

export default Addevents;