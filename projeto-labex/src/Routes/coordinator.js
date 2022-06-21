export const goToListTripPage = (navigate) => {
    navigate('/ListTripsPage')
}

export const goToLoginPage = (navigate) => {
    navigate('/LoginPage')

}

export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToCreateTripePage = (navigate) => {
  navigate('/CreateTripPage')
}

export const goToHomePage = (navigate) => {
  navigate('/')
}

export const goToApplicationFormPage = (navigate) => {
    navigate('/ApplicationFormPage')
}

export const goToAdminHomePage = (navigate) => {
    navigate('/AdminHomePage')
}

export const goToDetailPage = (navigate, id) => {
    navigate(`/TripDetailPage/${id}`)
}