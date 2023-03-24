import React from 'react'
import useFetchApi from './useFetchApi'
const PERSONAL_INFO = "https://codeforces.com/api/user.info?handles=aserhailu2020"
const Header = () => {

  const {data, isLoading, error} = useFetchApi(PERSONAL_INFO)
  if (isLoading){
    return <div><h3>loading...</h3></div>
  }
  if (error){
    return <div><h3>Error</h3> {error}</div>
  }

  if (data == null){
    return <div><h3>no data available</h3></div>
  }

  console.log(data)
  
  return (
    <div className='nav'>
        <div>
        <img src='https://cdn.iconscout.com/icon/free/png-512/code-forces-3521352-2944796.png?f=avif&w=512' alt='codeforces logo'/>
        </div>
        <div className='nav-links'>
        <a href='http://codeforces.com' rel="noreferrer" target="_blank">Home</a>
        <a href='http://codeforces.com' rel="noreferrer" target="_blank">Top</a>
        <a href='http://codeforces.com' rel="noreferrer" target="_blank">Problems</a>
        <a href='http://codeforces.com' rel="noreferrer" target="_blank">Contests</a>
        <a href='http://codeforces.com' rel="noreferrer" target="_blank">Discus</a>
        </div>

        <div className='profile'>
          <img className='profile-photo' src = {data.result[0].titlePhoto} alt="codeforces profile pic"/>
        </div>
    </div>
  )
}

export default Header