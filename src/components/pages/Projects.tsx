'use client'
import React, { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function Projects() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="container m-20 text-center w-full text-white">
        Projects
    </div>
  )
}

export default Projects