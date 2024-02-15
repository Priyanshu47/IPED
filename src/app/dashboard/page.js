import React from 'react'
import Policies from '@/components/policies'
import Announcements from '@/components/announcements'
import Overview from '@/components/overview'


const page = () => {
  return (
    <>
    <Announcements/>
    <Overview/>
    <Policies/>
    </>
  )
}

export default page