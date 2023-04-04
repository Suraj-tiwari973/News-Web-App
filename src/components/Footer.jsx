import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-dark text-white p-0 flex-column' style={{height:"200px"}}>
        <div class="row">
            <div class="col-sm">
                <p>This is News API. You can read the news of all catagoris here. Just click on the nav Links and read the news according to your interest.</p>
            </div>
            <div class="col-sm">
                <h3 className='d-flex justify-content-center align-items-center'>Made by Abhishek Tiwari.</h3>
            </div>
        
        </div>
    </div>
  )
}
