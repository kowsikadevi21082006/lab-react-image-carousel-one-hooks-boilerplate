import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const[data,setData]=useState(0)
    const{title,subtitle,img}=images[data]

    const next=()=>{
        if(data==images.length-1){
           setData(0)
        }
        else{
        setData(data+1)
        }
    }

    const prev=()=>{
        if(data==0){
            setData(images.length-1)
        }
        else{
            setData(data-1)
        }
    }

    return(
        <>
        <div className="carousal-container flex">
            <div onClick={prev} className="left-arrow arrowdiv flex">
               <ArrowBackIosIcon/>
            </div>
           
                <h2 className="title">{title}</h2>
                <img className="image" src={img} alt="" />
                <h4 className="caption">{subtitle}</h4>
            

            <div onClick={next} className="right-arrow arrowdiv flex">
               <ArrowForwardIosIcon/>
            </div>
        </div>
        </>
    )
}

export default Carousel;