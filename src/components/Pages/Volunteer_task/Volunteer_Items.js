import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Volunteer_Items = () => {

    //const first20data = fakeData;

    const [work, setWork] = useState([]);

    useEffect(() => {
        fetch('https://alamin-volunteernetwork.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setWork(data));

    }, [])

    return (
        <div className="row">
            {
                work.map(vlWork =>
                    <Display VLWORK={vlWork}></Display>
                )

            }

        </div>
    );
};

function Display(props) {
    const { name, img } = props.VLWORK;
    return (
        <div className="col-md-3 text-center mb-4">
            <div className="card" style={{ width: "16rem" }}>
                <img src={img} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text"><Link to={`/register/${name}`}>{name}</Link></p>

                </div>
            </div>
        </div>
    );
}


export default Volunteer_Items;