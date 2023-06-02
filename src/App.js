import React from 'react'
import './App.css';
import Header from './compnents/Header'
import Body from './compnents/Body';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import Corporates from './compnents/Corporates';
import Offers from './compnents/Offers';
import Error from './compnents/Error';
import Footer from './compnents/Footer';
import MovieDetail from './compnents/MovieDetail';
import Form from './compnents/Form';
import BookingMessage from './compnents/BookingMessage';


const App = () => {
  return (
    <div className='app'>
       <Header/>
       <Outlet/>
       <Footer/>
    </div>
  )
}
export const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/corporates",
                element:<Corporates/>
            },
            {
                path:"/offers",
                element:<Offers/>
            },
            {
                path:"movie/:id",
                element:<MovieDetail/>
            },
            {
                path:"/form",
                element:<Form/>
            },
            {
                path:"/booking",
                element:<BookingMessage/>
            }
        ]
    }
])

export default App;