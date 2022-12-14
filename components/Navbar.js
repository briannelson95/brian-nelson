import React from 'react'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
// import { HiHome, HiVideoCamera, HiMail } from 'react-icons/hi'

export default function Navbar({ navigation }) {
  return (
    <>
        <nav>
          {/* mobile */}
          <div className='overflow-hidden w-screen px-4 text-white md:hidden'>
            <div className='h-12 flex justify-between items-center'>
              {navigation.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <a>
                      <div>{item.title}</div>
                    </a>
                  </Link>
              ))}
            </div>
          </div>
          {/* desktop */}
          <div className='hidden md:block w-full overflow-hidden bg-slate-800 text-white'>
            <div className='flex'>
              {navigation.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <a className='h-14 flex items-center first:mr-auto first:p-0 hover:bg-white hover:text-black px-5 first:hover:bg-inherit first:hover:text-inherit'>
                      <div className=''>{item.title}</div>
                    </a>
                  </Link>
              ))}
            </div>
          </div>
        </nav>
    </>
  )
}
