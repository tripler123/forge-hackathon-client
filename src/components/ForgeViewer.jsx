import React, { useEffect } from 'react'
import { initializeViewer } from '../utils/viewer.utils.js'

const ForgeViewer = () => {
  const data = require('./fakeData.json');
  const urn = data.project.URN;
  useEffect(() => {
    initializeViewer(urn)
  }, [])

  return (
    <div className="col-lg-8" id='viewerContainer'></div>
  )
}
export default ForgeViewer;
