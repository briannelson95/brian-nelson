import React from 'react'

export default function Video({ videoUrl }) {
  return (
    <iframe 
        className='video' 
        src={`https://www.youtube.com/embed/${videoUrl}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
    />
  )
}
