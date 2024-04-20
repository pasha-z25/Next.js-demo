import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getDataFromApi } from "../../utils/helpers";

const Albums = ({ albums }) => {
    return (
        <Layout>
            <Head>
                <title>Albums Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>Albums page</h1>
                    <ul>
                        {albums.map(album => (<li><Link href={`./albums/${album.id}`}>{album.title}</Link></li>))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default Albums;

export async function getServerSideProps() {
    const albums = await getDataFromApi(`/albums`);

    return {
        props: {
            albums,
        }
    }
}