import React from 'react'
import { Switch,Route,Routes} from 'react-router-dom'
import {CoursesDetailsPage} from '../pages/CoursesDetailsPage';
export default function Routs() {
  return (
    <div>
        <Routes>
             
            <Route path="/"  ></Route>  
            <Route path="coursedetails/id" name='coursedetail'  component={CoursesDetailsPage} ></Route>
        </Routes>
    </div>
  )
}
