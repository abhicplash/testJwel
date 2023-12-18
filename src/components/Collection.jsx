import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Botbar from './Botbar'
import "./Collection.css"
import Varna from './Varna'
import Nidhi from './Nidhi'
import Loginpage from './Loginpage'
import Shila from './Shila'
import Shilaimages from './Shilaimages'
import Siri from './Siri'
function Collection() {
  return (
    <div>
      <Navbar />
      <Botbar />
      <Nidhi/>
      <Varna/>
      
      <Siri/>
      <Shila/>
      {/* <Shilaimages/> */}
      {/* <Loginpage/> */}
      {/* <Footer/> */}
</div>
  )
}

export default Collection
