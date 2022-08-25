import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-white dark:bg-slate-800 dark:text-white overflow-x-hidden">
        <div className=''>
            {children}
        </div>
    </div>
  )
}