import React from 'react'
import ProjectTemplate from './ProjectTemplate'

function Projects({projects}) {
  return (
    <div>
      {projects.map((project=><ProjectTemplate />))}
    </div>
  )
}

export default Projects
