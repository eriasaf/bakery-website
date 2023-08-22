import React from 'react'
import logo from './assets/logo.png'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Card from 'react-bootstrap/Card'; // Import the Bootstrap Card component
import Call from './Call';
function Notifications(){

  const flexed = {
      display:"flex",
      alignItems:"left",
      gap: 10
  }

  return(
    <div className='child'>
      <div style={flexed}>
        <img src={logo} alt='logo'/>
        
      </div>
      <p>we are ked bakers located along kyambogo road <br>
      </br>
      We bake cakes,cookies, pastries and Breads</p>
    </div>
  )
}

function Feed() {
  return (
    
      <div className='notifications'>
          <Card className='about'>
          <h2>About us</h2>
          <Notifications />
         </Card>
         <Call/>
      </div>
  )
}

export default Feed