import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Teacherview() {
    const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

  const [teacherData, setTeacherData] = useState({})

  useEffect(() => {
    loadTeacher()
  }, [])

  let loadTeacher = async () => {
    try {
      let teacher = await axios.get(`https://63fe2eba370fe830d9cfe790.mockapi.io/teachers/${params.id}`)
      setTeacherData(teacher.data)
    } catch (error) {

    }

  }
  return (
    <>
     <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Teacher Id : {teacherData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-warning" style={{fontSize : "20px"}}>
          <h5 className="card-title">Name : {teacherData.name}</h5>
          <h5 className="card-title">Class : {teacherData.class}</h5>
          <h5 className="card-title">Subject : {teacherData.subject}</h5>
          <h5 className="card-title">Student Id : {teacherData.studentid}</h5>
          <h5 className="card-title">Join Date : {teacherData.joindate}</h5>
        </div>
     </div>
    </>
  )
}

export default Teacherview