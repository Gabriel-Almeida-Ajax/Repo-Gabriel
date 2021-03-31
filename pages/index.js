import Head from 'next/head'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { AppBar } from './Components/AppBar/index'






export default function Home() {
  const [items, setItems] = useState([
    { id: '001', tittle: 'Home', icon: 'fa fa-home' },
    { id: '002', tittle: 'Profile', icon: 'fa fa-user-o' },
    { id: '003', tittle: 'Message', icon: 'fa fa-commenting-o' },
    { id: '004', tittle: 'Help', icon: 'fa fa-question-circle' },
    { id: '005', tittle: 'Settings', icon: 'fa fa-cog' },
    { id: '006', tittle: 'Sing-Out', icon: 'fa fa-sign-out' }
  ]);
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      </Head>

      <main>
        <AppBar items={items}/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const navigation = document.querySelector('.navigation');
  document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
  }
                  `,
          }}
        ></script>
      </main>
    </div>
  )
}
