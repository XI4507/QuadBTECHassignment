import React, { useEffect, useState } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import Shimmer from './Shimmer';

const MovieDetail = () => {
const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [popup,setPopUP]=useState(false)
  const [movieDetail,setMovieDetail]=useState(null);
  const {id}=useParams();
  useEffect(()=>{
    getMovieDetail();
  },[])
  async function getMovieDetail(){
    const data=await fetch("https://api.tvmaze.com/shows/"+id)
    const json=await data.json();
    setMovieDetail(json)
  }
  function handleBooking(){
    setPopUP(!popup)
  }
  function handleCross(){
    setPopUP(false)
  }
  function handleSubmit(name,email){
        const userDetail={name,email}
        console.log(userDetail);
        localStorage.setItem("userdata",JSON.stringify(userDetail))
        navigate('/booking')
  }
  return !movieDetail ? <Shimmer/>: (
    <div className='movie-detail'>
        <div>
            <img src={movieDetail.image.medium} alt="" />
        </div>
        <div>
            <p>{movieDetail.summary.substring(3,movieDetail.summary.length-4)}</p>
            <button className='booking-btn' onClick={()=>{handleBooking()}}>Book Now</button>
            <div>
                {popup?
                <div className="main">
                    <div className="popup">
                        <div className="popup-header">
                            <h3>Booking Form</h3>
                            <h3 onClick={handleCross} className='cross'>X</h3>
                        </div>
                        <div className='form'>
                            <div className="moviedetailform">
                                <h3>Your are booking Ticket for : {movieDetail.name}</h3>
                            </div>
                            <form onSubmit={()=>handleSubmit(name,email)} action='submit'  className='form-element'>
                                <input className='input-form' type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
                                <input className='input-form' type="text" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <button className='input-form booking-btn' type='submit' >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>:""}
            </div>
        </div>
    </div>
  )
}

export default MovieDetail
