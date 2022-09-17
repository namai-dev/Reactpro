import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Cards() {
  return (
    <div className="bg-secondary">
    <div className="container p-5 ">
      <div className="row text-center text-light">
        <div className="col-md g-4">
          <div class="card bg-dark">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Harmony Namai</h5>
              <p class="card-text">
              Cyber Security
                Data Science
                Software Enginee
              </p>
              <a href="#" class="btn btn-primary">
                Contuct me
              </a>
            </div>
            
          </div>
          
        </div>
        <div className="col-md g-4">
          <div class="card bg-dark">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Leo Namai</h5>
              <p class="card-text">
              Cyber Security
                Data Science
                Software Enginee
              </p>
              <a href="#" class="btn btn-primary">
              Contuct me
              </a>
            </div>
            
          </div>
          
        </div>
        <div className="col-md g-4">
          <div class="card bg-dark">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Kingsley Namai</h5>
              <p class="card-text">
                Cyber Security
                Data Science
                Software Engineer
              </p>
              <a href="#" class="btn btn-primary">
              Contuct me
              </a>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
