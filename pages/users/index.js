import Head from 'next/head'
import Layout from '../../components/Layout'
import UserCard from '../../components/parts/UserCard'
import Pagination from '../../components/parts/Pagination'
import { getDataFromApi } from "../../utils/helpers"

const Users = (props) => {
    const { data: users, total_pages, page } = props;

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
                    <hr />
                    <div className='py-rem'>
                        <Pagination currentPage={page} totalPages={total_pages} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Users

export async function getServerSideProps(context) {
    const { query: { page = '1' } } = context;
    const data = await getDataFromApi(`/users?page=${page}`);

    return {
        props: {
            ...data,
        }
    }
}