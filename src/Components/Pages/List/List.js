import React, { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListDetas from './ListDetas';

const List = () => {

    const [sutdents, setStudents] = useState([]);

    useEffect(() => {
        getStudents ()
    }, [])

    async function getStudents () {
        try{
            const studentss = await axios.get('students');
            // console.log(studentss.data);
            setStudents(studentss.data);
        } catch (error) {
            console.log("sumthing is wrong");
        }
    }

    return (
        <>
            {
                sutdents.map(student => <ListDetas
                    student={student}
                ></ListDetas>)
            }
        </>
    );
};

export default List;