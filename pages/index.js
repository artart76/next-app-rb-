import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div>
			<Link href='/blog'>Все статьи</Link>
			<div className={styles.grid}>
				<a
					href="https://github.com/artart76"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
					GitHub <span>-&gt;</span>
					</h2>
					
				</a>

				<a
					href="/"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
					Telegram <span>-&gt;</span>
					</h2>
				</a>

				<a
					href="/"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
					Email <span>-&gt;</span>
					</h2>
				</a>

				<a
					href="/"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
					Phone <span>-&gt;</span>
					</h2>
					
				</a>
			</div>
		</div>
	)
}
