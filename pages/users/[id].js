import Head from 'next/head'
import Layout from "../../components/Layout";
import { getDataFromApi } from "../../utils/helpers";

export function UserPage({ user }) {
    const { id, avatar, first_name, last_name, email } = user;

    return (
        <Layout>
            <Head>
                <title>{first_name} Page</title>
            </Head>
            <section>
                <div>
                    <h1>{first_name} {last_name} page</h1>
                    <article id={id}>
                        <img src={avatar} alt={first_name} />
                        <h2>{first_name} {last_name}</h2>
                        <a href={`mailto:${email}`} target='_blank'>{email}</a>
                    </article>
                </div>
            </section>
        </Layout>
    )
};

export default UserPage;

export async function getServerSideProps(context) {
    const { params: { id = '1' } } = context;
    const data = await getDataFromApi(`/users/${id}`);

    return {
        props: {
            user: data.data,
        }
    }
}