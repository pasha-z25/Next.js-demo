import Head from 'next/head';
import Link from 'next/link';
import Layout from "../../components/Layout";
// import PhotoCard from '../../components/parts/PhotoCard';
import { getDataFromApi } from "../../utils/helpers";

export function AlbumPage({ album, photos, author }) {
    return (
        <Layout>
            <Head>
                <title>Album Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>{album.title}</h1>
                    <p>Author: <Link href={`/users/${author.id}`}>{author.name}</Link></p>
                    <ul>
                        {photos.map(photo => (<li><img src={photo.thumbnailUrl} alt={photo.title} /></li>))}
                    </ul>
                    <hr />
                </div>
            </section>
        </Layout>
    )
};

export default AlbumPage;

export async function getServerSideProps(context) {
    const { params: { id = '1' } } = context;
    const album = await getDataFromApi(`/albums/${id}`);
    const photos = await getDataFromApi(`/albums/${id}/photos`);
    const author = await getDataFromApi(`/users/${album.userId}`);

    return {
        props: {
            album,
            photos,
            author
        }
    }
}