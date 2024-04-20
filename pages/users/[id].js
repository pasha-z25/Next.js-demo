import Head from 'next/head';
import Link from 'next/link';
import Layout from "../../components/Layout";
import { getDataFromApi } from "../../utils/helpers";

export function UserPage({
    user,
    posts,
    todos,
    albums
}) {
    const { id, name, email, phone, website } = user;

    return (
        <Layout>
            <Head>
                <title>{name} Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>{name} page</h1>
                    <article id={id}>
                        <h2>{name}</h2>
                        <p><a href={`tel:${phone}`} target='_blank'>{phone}</a></p>
                        <p><a href={`mailto:${email}`} target='_blank'>{email}</a></p>
                        <p><a href={`https://${website}`} target='_blank'>{website}</a></p>
                    </article>
                    <hr />
                    <h3>{name} posts</h3>
                    <ul>
                        {posts.map(post => (<li><Link href={`/posts/${post.id}`}>{post.title}</Link></li>))}
                    </ul>
                    <hr />
                    <h3>{name} todos</h3>
                    <ul>
                        {todos.map(todo => (<li><input type='checkbox' checked={todo.completed} /> <span>{todo.title}</span></li>))}
                    </ul>
                    <hr />
                    <h3>{name} albums</h3>
                    <ul>
                        {albums.map(album => (<li><Link href={`/albums/${album.id}`}>{album.title}</Link></li>))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
};

export default UserPage;

export async function getServerSideProps(context) {
    const { params: { id = '1' } } = context;
    const user = await getDataFromApi(`/users/${id}`);
    const posts = await getDataFromApi(`/users/${id}/posts`);
    const todos = await getDataFromApi(`/users/${id}/todos`);
    const albums = await getDataFromApi(`/users/${id}/albums`);

    return {
        props: {
            user,
            posts,
            todos,
            albums
        }
    }
}