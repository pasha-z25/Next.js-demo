import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getDataFromApi } from "../../utils/helpers";

const PostPage = ({ post, comments, author }) => {
    return (
        <Layout>
            <Head>
                <title>Post Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>{post.title}</h1>
                    <p>Author: <Link href={`/users/${author.id}`}>{author.name}</Link></p>
                    <p>{post.body}</p>
                    <hr />
                    <h3>Comments:</h3>
                    <ul>
                        {comments.map(comment => (
                            <li>
                                <h4>{comment.name}</h4>
                                <p>{comment.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default PostPage;

export async function getServerSideProps(context) {
    const { params: { id = '1' } } = context;

    const post = await getDataFromApi(`/posts/${id}`);
    const comments = await getDataFromApi(`/posts/${id}/comments`);
    const author = await getDataFromApi(`/users/${post.userId}`);

    return {
        props: {
            post,
            comments,
            author
        }
    }
}