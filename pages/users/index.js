import Head from 'next/head';
import Layout from '../../components/Layout';
import UserCard from '../../components/parts/UserCard';
import { getDataFromApi } from "../../utils/helpers";

const Users = ({ users }) => {
    return (
        <Layout>
            <Head>
                <title>Users Page</title>
            </Head>
            <section className='py-rem'>
                <div className='container'>
                    <h1>Users page</h1>
                    <div className='wrapper py-rem'>
                        {users.map(user => <UserCard key={user.id} user={user} />)}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Users

export async function getServerSideProps() {
    const users = await getDataFromApi(`/users`);

    return {
        props: {
            users,
        }
    }
}