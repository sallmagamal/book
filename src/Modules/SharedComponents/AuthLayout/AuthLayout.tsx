import React from 'react'
import Login from '../../AuthModule/Components/ForgetPass/Forgetpass'
import ChangePass from '../../AuthModule/Components/ChangePass/ChangePass'
import Register from '../../AuthModule/Components/Register/Register'
import ResetPass from '../../AuthModule/Components/ResetPass/ResetPass'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
 <Outlet/>
    </>
  )
}
