import React from 'react'
import '../styles/components/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='footerContainer'>
            <div className='Contacts'>
                <p>Contacts</p>

                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>

            <div className='Contributions'>
                <p>Mes sponsors</p>
                
                <ul>
                    <li>Sony</li>
                    <li>Kodak</li>
                    <li>Phillips</li>
                    <li>Polaroïd</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;
