'use client'
import React, { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function About() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="container m-20 text-center w-full text-white">
        About us
    </div>
  )
}

export default About