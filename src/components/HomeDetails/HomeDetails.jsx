import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsMain } from './DetailsMain'
import { comingSoon } from '../../db';

export const HomeDetails = () => {
  const { id } = useParams()
  const [storedData, setStoredData] = useState([])
  useEffect(() => {
    ComingSoonData()
  }, [])

  let ComingSoonData = () => {
    let filterData = comingSoon.filter((el) => el.id == id)
    setStoredData(filterData)
  }

  return (
    <>
      <div className="playback">
        <video controls width="100%" height="100%" muted loop autoplay>
          {storedData.map((el) => (
            <source src={el.video} type="video/mp4" />
          ))}
          Your browser does not support the video tag.
        </video>
      </div>

      <DetailsMain />
    </>
  )
}
