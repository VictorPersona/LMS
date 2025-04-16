import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/students/Home'
import Courselist from './pages/students/Courselist'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './pages/students/Loading'
import Educator from './pages/educator/Educator'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import Students from './pages/educator/Students'
import Enrolled from './pages/educator/Enrolled'
import Navbar from './components/students/Navbar'

const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list/:input" element={<Courselist />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students" element={<Students />} />
          <Route path="enrolled" element={<Enrolled />} />
          <Route path="educator" element={<Educator />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
