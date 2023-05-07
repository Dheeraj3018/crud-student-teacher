import { faEye, faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
  const [students,setStudents] = useState ([])
    const [isLoading,setLoading] = useState(false)

    useEffect (() => {
      loadData ()
    },[])
    let loadData = async () => {
        setLoading (true);
        let students = await axios.get("https://6379a4bd7eb4705cf282a5b9.mockapi.io/students");
        setStudents (students.data);
        setLoading(false);
    };

    let studentDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure ! Do you want Delete this Data ?");
            if (ask){
                await axios.delete(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/students/${id}`)
            };
            loadData ()
           } catch (error) {

        }
    }
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Students</h1>
        <Link to="/Portal/Create-Student" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Create Student</Link>
    </div>
  {
    isLoading ? 
    <button className="btn btn-primary" style={{fontSize:"50px"}} type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
    </button> :  
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" >
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Teacher Id</th>
                            <th>Start date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Teacher Id</th>
                            <th>Start date</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            students.map((student,index)=>{
                                  return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.subject}</td>
                            <td>{student.teacherid}</td>
                            <td>{student.startdate}</td>
                            <td>
                                <Link to={`/Portal/Students/${student.id}`} className='btn btn-sm btn-warning mr-2'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </Link>
                                <Link  to={`/Portal/Students/Edit/${student.id}`} className='btn btn-sm btn-primary mr-2'><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> </Link>
                                <button onClick={()=> studentDelete(student.id)} className='btn btn-sm btn-danger mr-2'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                            </td>
                        </tr>
                                  )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }

   

    </div>
   // <!-- /.container-fluid -->
  )
}

export default Students