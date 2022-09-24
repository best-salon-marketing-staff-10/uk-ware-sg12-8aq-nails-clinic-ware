import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import React, { useEffect } from "react";
import Router from 'next/router';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function Appointment(){
  if (process.browser){
    document.oncontextmenu = new Function("return false;");
  }
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/appointment' ){
        Router.push(thongTinTiem2.linkBookingTiem)
    }
  });

  return (
    <>

    </>
  )
}
