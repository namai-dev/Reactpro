import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function NewsFeed() {
    return ( 
        <div className='p-5 bg-success' p-5>
            <div className="container">
                <div className='d-md-flex justfy-content-between align-items-center'>

                    <h1 className='mb-3 mb-md-3'>Sign up to our newsletter</h1>
                    <div class="input-group mb-3">
      <input type="email" 
          class="form-control" 
          placeholder="Email" 
          aria-label="Recipient's username" 
          aria-describedby="button-addon2"/>
  <button class="btn  btn-primary" type="button" id="button-addon2">Button</button>
</div>

                </div>
            </div>

        </div>
     );
}

export default NewsFeed;