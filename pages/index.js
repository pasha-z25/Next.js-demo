import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>Home Page</h1>
                </div>
            </section>
        </Layout>
    )
}

export default Home