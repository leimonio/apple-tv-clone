import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsMain } from '../components/DetailsMain/DetailsMain'
import { comingSoon } from '../db'

export const HomeDetails = () => {
  const { id } = useParams()
  const [storedData, setStoredData] = useState([])
  useEffect(() => {
    let filterData = comingSoon.filter((el) => el.id === id)
    setStoredData(filterData)
  }, [id])

  return (
    <>
      <div className="playback">
        <video controls width="100%" height="100%" muted loop autoPlay>
          {storedData.map((el) => (
            <source key={el.id} src={el.video} type="video/mp4" />
          ))}
          Your browser does not support the video tag.
        </video>
      </div>

      <DetailsMain />
    </>
  )
}
