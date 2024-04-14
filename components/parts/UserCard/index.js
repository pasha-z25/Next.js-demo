import Link from 'next/link';

export function UserCard({ user }) {
    const { id, avatar, first_name, last_name, email } = user;
    return (
        <article id={id} className='card'>
            <img src={avatar} alt={first_name} />
            <h2>{first_name} {last_name}</h2>
            <a href={`mailto:${email}`} target='_blank'>{email}</a>
            <br />
            <Link href={`./users/${id}`}>More info...</Link>
        </article>
    )
};

export default UserCard;