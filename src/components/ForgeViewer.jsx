import React, { useEffect } from 'react'
import { initializeViewer } from '../utils/viewer.utils.js'

const ForgeViewer = () => {
  const urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c2FudG9yaW5pX2J1Y2tldC9MYW1iZGFTbWFsbEV4YW1wbGUucnZ0'
  useEffect(() => {
    initializeViewer(urn)
  }, [])

  return (
    <div className="col-lg-8" id='viewerContainer'></div>
  )
}
export default ForgeViewer;
