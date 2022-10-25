import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const List = () => {
    return (
        <>
            <div className='row bg-secondary p-1'>
                <div className="col-2 text-center">
                    <span className='text-white'>01</span>
                </div>
                <div className="col-3 text-center">
                    <span className='text-white'>al noor istiak</span>
                </div>
                <div className="col-4 text-center">
                    <span className='text-white'>istiak@gmail.com</span>
                </div>
                <div className="col-3 text-center">
                    <span>
                        <Link to='view' className='text-warning mx-3'>
                            <RemoveRedEyeIcon />
                        </Link>
                    </span>
                    <span>
                        <Link to='edit' className='text-warning'>
                            <CreateIcon />
                        </Link>
                    </span>
                    <span className='text-danger'>
                        <DeleteIcon />
                    </span>
                </div>
            </div>
        </>
    );
};

export default List;