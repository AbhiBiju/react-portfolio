import React from 'react'
import ProgressBar from './ProgressBar'

function Resume() {
  return (
    <div className="w-full my-5 mb-20 grid grid-cols-1 sm:grid-cols-2">
      <ProgressBar percent={60} color={"lightblue"} label={"React"} />
      <ProgressBar percent={80} color={"blue"} label={"jQuery"} />
      <ProgressBar percent={80} color={"orange"} label={"SQL"} />
      <ProgressBar percent={70} color={"green"} label={"MongoDB"} />
    </div>
  );
}

export default Resume
