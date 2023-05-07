import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './App.css'

function Editstudent() {
    const params = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            class: "",
            subject: "",
            teacherid: "",
            startdate: ""
        },
        validate: (values) => {
            let errors = {}
            if (values.name === "") {
                errors.name = "Please enter name"
            }
            if (values.class === "") {
                errors.class = "Please enter class"
            }
            if (values.subject === "") {
                errors.subject = "Please enter subject"
            }
            if (values.teacherid === "") {
                errors.teacherid = "Please enter teacherid"
            }
            if (values.startdate === "") {
                errors.startdate = "Please enter startdate"
            }
            return errors
        },
        onSubmit: async (values) => {
            let student = await axios.put(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/students/${params.id}`, values)
            alert("Student Updated")
            navigate ("/Portal/Students")
        }
    });

    useEffect(() => {
        loadStudent ()
      }, [])
  
      let loadStudent = async () => {
          try {
             let student = await axios.get(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/students/${params.id}`)
             formik.setValues ({
              name: student.data.name,
              class: student.data.class,
              subject: student.data.subject,
              teacherid: student.data.teacherid,
              startdate: student.data.startdate
             })
          }catch (error){
  
          }
      }
  return (
    <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-4 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-8">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Edit an Account!</h1>
                                </div>
                                <form className="user" onSubmit={formik.handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label style={{ color: "black" }}>Name</label>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.name ? `input-error` :``}`}
                                                placeholder="Name" value={formik.values.name} onChange={formik.handleChange} name="name" />
                                            <span style={{ color: "red" }}>{formik.errors.name}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Class</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.class ? `input-error` :``}`}
                                                placeholder="Class" value={formik.values.class} onChange={formik.handleChange} name="class" />
                                            <span style={{ color: "red" }}>{formik.errors.class}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Subject</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.subject ? `input-error` :``}`}
                                                placeholder="Subject" value={formik.values.subject} onChange={formik.handleChange} name="subject" />
                                            <span style={{ color: "red" }}>{formik.errors.subject}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <lable style={{ color: "black" }}>Teacher Id</lable>
                                            <input type="number" className="form-control form-control-user" id={`${formik.errors.teacherid ? `input-error` :``}`}
                                                placeholder="Teacher Id" value={formik.values.teacherid} onChange={formik.handleChange} name="teacherid" />
                                            <span style={{ color: "red" }}>{formik.errors.teacherid}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Start Date</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.startdate ? `input-error` :``}`}
                                                placeholder="Start Date" value={formik.values.startdate} onChange={formik.handleChange} name="startdate" />
                                            <span style={{ color: "red" }}>{formik.errors.startdate}</span>
                                        </div>
                                    </div>
                                    <input className="btn btn-primary btn-user btn-block" type={"submit"} value="Register Account" disabled={!formik.isValid} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Editstudent