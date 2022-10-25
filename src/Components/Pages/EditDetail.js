import React from 'react';
import { Link } from 'react-router-dom';

const EditSTData = () => {
    return (
        <div className='container'>
            <div className="row">
            <div className="bg-info justify-content-evenly d-flex text-center p-2">
                    <div>
                        <h4>Student Data</h4>
                    </div>
                    <div className=''>
                        <Link to='/' className='btn btn-warning text-white'>BacK TO HomE</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-4">
                    <div class="mb-3">
                        <label for="Enter-id" class="form-label">Student ID</label>
                        <input type="number" class="form-control" id="Enter-id" aria-describedby="emailHelp" value={1} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-8">
                    <div class="mb-3">
                        <label for="Enter-neme" class="form-label">Student Name</label>
                        <input type="text" class="form-control" id="Enter-neme" aria-describedby="emailHelp" value={"Istiak"} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col">
                    <div class="mb-3">
                        <label for="Enter-email" class="form-label">Student Email</label>
                        <input type="email" class="form-control" id="Enter-neme" aria-describedby="emailHelp" value={"istiak@gmail.com"} />
                    </div>
                </div>
                <div>
                    <button type="submit" className='btn btn-warning text-white'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditSTData;