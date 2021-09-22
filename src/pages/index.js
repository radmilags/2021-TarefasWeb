import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (<div>
        <Head>
        <title > Milão APP </title> <meta name = "description" content = "Milão APP by create next app"/>
        <link rel = "icon" href = "/favicon.ico"/>
        </Head>

        <main>
        <h1>
        Radmila diz: Bem vindo ao meu primeiro app on 
	<a href = "https://nextjs.org" > Next.js! </a> 
        </h1>

        </main>
        </div>
    )
}