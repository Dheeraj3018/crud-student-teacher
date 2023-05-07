import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Createteacher() {
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
            if (values.studentid === "") {
                errors.studentid = "Please enter teacherid"
            }
            if (values.joindate === "") {
                errors.joindate = "Please enter startdate"
            }
            return errors
        },
        onSubmit: async (values) => {
            let teacher = await axios.post(`https://63fe2eba370fe830d9cfe790.mockapi.io/teachers`, values)
            alert("Teacher Created")
            navigate("/Portal/Teachers")
        }
    })
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
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
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
                                            <lable style={{ color: "black" }}>Student Id</lable>
                                            <input type="number" className="form-control form-control-user" id={`${formik.errors.teacherid ? `input-error` :``}`}
                                                placeholder="Student Id" value={formik.values.studentid} onChange={formik.handleChange} name="studentid" />
                                            <span style={{ color: "red" }}>{formik.errors.studentid}</span>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <lable style={{ color: "black" }}>Join Date</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.startdate ? `input-error` :``}`}
                                                placeholder="Join Date" value={formik.values.joindate} onChange={formik.handleChange} name="joindate" />
                                            <span style={{ color: "red" }}>{formik.errors.sjoindate}</span>
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

export default Createteacher