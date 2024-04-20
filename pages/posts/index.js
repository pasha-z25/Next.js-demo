import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
// import PostCard from '../../components/parts/PostCard';
import { getDataFromApi } from "../../utils/helpers";

const Posts = ({ posts }) => {
    return (
        <Layout>
            <Head>
                <title>Posts Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>Posts page</h1>
                    <ul>
                        {posts.map(post => (<li><Link href={`/posts/${post.id}`}>{post.title}</Link></li>))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default Posts

export async function getServerSideProps() {
    const posts = await getDataFromApi(`/posts`);

    return {
        props: {
            posts,
        }
    }
}