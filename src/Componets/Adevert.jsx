import React, { Fragment } from 'react';
import myImage from './download.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

function Adevert() {

    return ( 
        <Fragment>

<div className="bg-primary text-center text-light p-5 p-lg-0 pt-lg-5 mt-5">
    <div className="container">
        <div className='d-sm-flex align-items-center justfy-content-between'>
            <div className='w-auto'>
               <h1 className='text-warning'>Manage your Task</h1>
               <p className='lead my-4'>   
                     Help you manage your tasks
                    We assure you of quality and reliability
                    Sign up to our team and forever remain
                    indipendent and informed.

               </p>
               <Link className='btn btn-lg btn-danger' to={"/regester"}>Enroll With us</Link>

            </div>
            <img className='img-fluid ms-auto d-none d-sm-block' src={myImage} alt="" />
        </div>

    </div>
</div>
        </Fragment>
     );
}

export default Adevert;