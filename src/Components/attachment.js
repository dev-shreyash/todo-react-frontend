import React from 'react'

const Attachment = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <div>
        <div className='details'>
          <h1>Made By  <span> Shreyash Bhosale</span></h1>
          <p>Copyright @{currentYear}</p>
        </div>
      </div>
    );
  }

export default Attachment