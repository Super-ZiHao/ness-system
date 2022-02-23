import axios from 'axios'
import React, { useEffect } from 'react'
import './App.scss'

function App() {
  useEffect(() => {
    axios
      .get(
        '/ajax/moreCinemas?movieId=0&day=2022-02-23&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1645600165853&cityId=1&optimus_uuid=3773AE70947711ECB7CBED43E23C1D719D633CB712AC4A8ABAC5440BAE88FD99&optimus_risk_level=71&optimus_code=10',
      )
      .then((res) => {
        console.log(res)
      })
  }, [])
  return <div className="App">app</div>
}

export default App
