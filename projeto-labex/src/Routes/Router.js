import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import AdminHomePage from '../Pages/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage'
import ListTripsPage from '../Pages/ListTripsPage'
import TripDetailPage from '../Pages/TripDetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>

        <Routes>

            <Route index element={<HomePage />} />
            <Route path='LoginPage' element={<LoginPage />} />
            <Route path='AdminHomePage' element={<AdminHomePage />} />
            <Route path='ApplicationFormPage' element={<ApplicationFormPage />} />Lista
            <Route path='CreateTripPage' element={<CreateTripPage />} />
            <Route path='ListTripsPage' element={<ListTripsPage />} />
            <Route path='TripDetailPage/:id' element={<TripDetailPage />} />           
            

        </Routes>


    </BrowserRouter>
    ) 
    


    
}



