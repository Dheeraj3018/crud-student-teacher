import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Studentview() {
    const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

  const [studentData, setStudentData] = useState({})

  useEffect(() => {
    loadStudent()
  }, [])

  let loadStudent = async () => {
    try {
      let student = await axios.get(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/students/${params.id}`)
      setStudentData(student.data)
    } catch (error) {

    }

  }
  return (
    <>
     <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Student Id : {studentData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-warning" style={{fontSize : "20px"}}>
          <h5 className="card-title">Name : {studentData.name}</h5>
          <h5 className="card-title">Class : {studentData.class}</h5>
          <h5 className="card-title">Subject : {studentData.subject}</h5>
          <h5 className="card-title">Teacher Id : {studentData.teacherid}</h5>
          <h5 className="card-title">Start Date : {studentData.startdate}</h5>
        </div>
     </div>
    </>
  )
}

export default Studentview