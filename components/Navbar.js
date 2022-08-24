import React from 'react'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

export default function Navbar({ navigation }) {
  return (
    <>
        <div className='flex space-x-4'>
            {navigation.map((item, index) => (
                <Link key={index} href={item.href}><a>{item.title}</a></Link>
            ))}
        </div>
    </>
  )
}
