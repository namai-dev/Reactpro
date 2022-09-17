import React from 'react';
import { Fragment } from 'react';
import {FaGithub} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Instractions() {
    return ( 
        <Fragment>
            <div className="p-5 bg-primary">
                <div className="container ">
                    <h1 className="text-center text-white">Task.io</h1>
                    <p className='text-center mb-5'>We value your values
                        Lets work together and shape this universe
                    </p>
                    <div className="row g-4">
                        <div className=" col-lg-20 ">
                            <div className="card-body text-center bg-light">
                                <FaGithub/>
                                <h3 className='card-tittle mb-3'>Senior Amo</h3>
                                <p className="card-text">Experienced Developer</p>
                                <p className=""><a href="#">namaiharmony@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}

export default Instractions;