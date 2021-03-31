import Head from 'next/head'
import styles from './global.styles.css'

export default function BarApp() {
  return (

    <main>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      </head>
      <div style={styles.container}>
        <div className="navigation">
          <ul>
            <li>
              <a href="/home">
                <span className="icon"><i className="fa fa-home" aria-hidden="true" /></span>
                <span className="tittle">
                  Home
              </span>
              </a>
            </li>
            <li>
              <a href="/Profile">
                <span className="icon"><i className="fa fa-user-o" aria-hidden="true" /></span>
                <span className="tittle">
                  Profile
              </span>
              </a>
            </li><li>
              <a href="/Message">
                <span className="icon"><i className="fa fa-commenting-o" aria-hidden="true" /></span>
                <span className="tittle">
                  Message
              </span>
              </a>
            </li>
            <li>
              <a href="/Help">
                <span className="icon"><i className="fa fa-question-circle" aria-hidden="true" /></span>
                <span className="tittle">
                  Help
              </span>
              </a>
            </li>
            <li>
              <a href="/Settings">
                <span className="icon"><i className="fa fa-cog" aria-hidden="true" /></span>
                <span className="tittle">
                  Settings
              </span>
              </a>
            </li>
            <li>
              <a href="/Singout">
                <span className="icon"><i className="fa fa-sign-out" aria-hidden="true" /></span>
                <span className="tittle">
                  Sing out
              </span>
              </a>
            </li>
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
    </main>
  )
}