import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses,setAllCourses]= useState([])
    

    //fetch all courses
    const fetchAllcourses = async()=>{
        setAllCourses(dummyCourses)
    }

    //function to calculate average rating of course

    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating=>{
            totalRating += rating.rating
        })
        return totalRating/course.courseRatings.length
    }

    useEffect(()=>{
        fetchAllcourses()
    },[])
    const value ={
        currency, allCourses, navigate, calculateRating
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}