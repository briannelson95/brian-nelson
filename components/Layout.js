import React from 'react'
import SEO from './SEO'

export default function Layout({ children }) {
  return (
    <>
      <div className="h-screen bg-slate-800 text-white overflow-x-hidden md:px-20">
          <div className=''>
              {children}
          </div>
      </div>
    </>
  )
}