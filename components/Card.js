import React from 'react'

export default function Card({ children }) {
  return (
    <>
        <div 
            className="
                relative 
                rounded-xl 
                bg-gradient-to-br 
                from-pink-500 via-purple-600/10 to-indigo-500 
                p-1 
                before:absolute 
                before:inset-0 
                before:h-full before:w-full 
                before:rounded-xl 
                before:bg-gradient-to-br 
                before:from-pink-500 before:via-purple-500/30 before:to-indigo-500 
                before:blur-3xl
            "
        >
            <div 
                className="
                    relative 
                    z-10 
                    h-full w-full 
                    rounded-xl 
                    bg-slate-800 dark:text-white 
                    p-8 
                    before:absolute 
                    before:inset-0 
                    before:-z-10 
                    before:rounded-xl 
                    before:bg-gradient-to-br 
                    before:from-pink-900/25 before:via-black before:to-indigo-900/25 
                    sm:p-12
                "
            >
                {children}
            </div>
        </div>
    </>
  )
}
