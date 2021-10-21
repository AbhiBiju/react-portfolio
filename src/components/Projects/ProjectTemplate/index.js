import React from 'react'

function ProjectTemplate({project}) {
  return (
    <div className="rounded-xl bg-green-500 w-1/2">
      {project.name}
    </div>
  )
}

export default ProjectTemplate
