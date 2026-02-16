import React from 'react'

const Admindetails = () => {
  const storedData = localStorage.getItem("userdetails");
  const userDetails = storedData ? JSON.parse(storedData) : null;
  return (
    <div>
      <h1 className='text-black'>{userDetails['id']}</h1>
      <h1 className='text-black'>{userDetails['Name']}</h1>
      <h1 className='text-black'>{userDetails['Address']}</h1>
      <h1 className='text-black'>{userDetails['Phone_Number']}</h1>
      <p className='text-black'>{userDetails['Content']}</p>
    </div>
  )
}

export default Admindetails