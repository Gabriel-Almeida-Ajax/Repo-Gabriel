import Head from 'next/head'
import styled from 'styled-components'
import { useEffect, useState } from "react";

const ListContent = styled.li`
    position: relative;
    list-style: none;
    width: 100%;
    
    &:hover {
      background: #efefef;
    }
`

const LinkContent = styled.a`
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #ff6161;
  font-weight: 500;
`
const Tittle = styled.span`
  position: relative;
  display: block;
  height: 1rem;
  line-height: 60px;
  white-space: nowrap;
`;
const Icon = styled.span`
  
    position: relative;
    display: block;
    min-width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  

  &fa {
    font-size: 24px;
  }
`
const IconContent = styled.i`
  position: relative; 
  display: block;
  min-width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;`

const ListApp = ({ tittle, icon }) => {
  return (
    <ListContent>
      <LinkContent href={`/${tittle}`}>
        <Icon><IconContent className={icon} aria-hidden="true" /></Icon>
        <Tittle>
          {tittle}
        </Tittle>
      </LinkContent>
    </ListContent>
  )
}




export default function Home() {
  const [items, setItems] = useState([
    { id: '001', tittle: 'Home', icon: 'fa fa-home' },
    { id: '002', tittle: 'Profile', icon: 'fa fa-user-o' },
    { id: '003', tittle: 'Message', icon: 'fa fa-commenting-o' },
    { id: '004', tittle: 'Help', icon: 'fa fa-question-circle' },
    { id: '005', tittle: 'Settings', icon: 'fa fa-cog' },
    { id: '006', tittle: 'Sing-Out', icon: 'fa fa-sign-out' }
  ]);
  
  const container = styled.div`
    height: 120px;
    width: 120px;
  `

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      </Head>

      <main>
        <div className="container">
          <div className="navigation">
            <ul>
              {items.map(item => <ListApp key={item.id} {...item} />)}
            </ul>
          </div>
          <div className="toggle" />
        </div>
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

        {/* <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
<<<<<<< HEAD

=======
*::focus {
    outline: none;
}
>>>>>>> parent of f76f77e (Focus)
body {
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 100vh;
  background: #ff6161;
}

.container {
  position: relative;
}

.container .navigation {
  position: relative;
  width: 80px;
  height: 360px;
  background: #fff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.container .navigation.active {
  width: 300px;
}

.container .navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.container .navigation ul li:hover {
  background: #efefef;
}

.container .navigation ul li {
  position: relative;
  list-style: none;
  width: 100%;
}

.container .navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #ff6161;
  font-weight: 500;
}

.container .navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.container .navigation ul li a .icon .fa {
  font-size: 24px;
}

.container .navigation ul li a .tittle {
  position: relative;
  display: block;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
}

.toggle {
  position: absolute;
  right: -20px;
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  cursor: pointer;
  border: 5px solid #ff6161;

  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.toggle::before{
  content:"\f054";
  font-family: fontAwesome;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 30px;
  text-align: center;
  color: #ff6161;
}

.toggle.active::before{
  content:"\f053"
}
      `}</style> */}
      </main>
    </div>
  )
}
