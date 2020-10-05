import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Register.css';

const Register = () => {

   const {volname} = useParams()

    const {register,handleSubmit,watch}= useForm();
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
///from 
   const onSubmit = () =>{
      // console.log('submitted',data);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date =document.getElementById('date').value;
    const description =document.getElementById('description').value;
    const volwork =document.getElementById('volwork').value;
    const all ={name,email,date,description,volwork};

    console.log(all);
       fetch('https://alamin-volunteernetwork.herokuapp.com/addRegister',{
           method:'POST',
           headers: {
               'Content-Type':'application/json'
           },
           body: JSON.stringify(all)
       })
       .then(res => res.json())
       .then(result => {
           console.log(result)
            alert("Registration done")
            
            }
           )
       .catch(error => console.log(error)) 

   }

    return (
        <div className="container">
            <div className="reg-form">
             <h2>Register as a Volunteer</h2>
             <br></br>
             <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" class="form-control" value={loggedInUser.name} id="name"/>
            <br></br>
            <input type="email" class="form-control" value={loggedInUser.email} id="email"/>
            <br></br>
            <input class="form-control" type="date" id="date"/>
            <br></br>
            <input class="form-control" type="text" placeholder="Description" id="description"/>
            <br></br>
            <input class="form-control" type="text" value={volname} id="volwork"/>
            <br></br>
            <input className="btn btn-block btn-primary" type="submit"/>
            </form>
            
            </div>
        </div>
    );
};

export default Register;