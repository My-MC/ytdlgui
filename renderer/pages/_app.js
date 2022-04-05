import styles from '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/licence"><a>LICENCE</a></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        <Component {...pageProps} />
        <div style={{ textAlign: "center" }}>
        <footer className={styles.footer}>
            <a
            href="https://github.com/My-MC"
            target="_blank"
            rel="noopener noreferrer"
            >
            Created by My-MC(My)
            </a>
        </footer>
        </div>
    </div>
    )
}

export default MyApp
