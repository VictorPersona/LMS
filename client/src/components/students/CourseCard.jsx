import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({course}) => {
  const {currency} = useContext(AppContext)

  return (
    <div>
      <img src={course.courseThumbnail} alt="" />
      <h3>{course.courseTitle}</h3>
      <p>{course.educator.name}</p>
      <div className="">
        <p>4.5</p>
        <div className="">{
          [...Array(5)].map((_,i)=>{return <img src={assets.star}></img>})}</div>
       <p>22</p></div>
     <p>{currency (course.coursePrice - (course.coursePrice * (course.discount/100))).toFixed(2)}</p>
    </div>

  )
}

export default CourseCard