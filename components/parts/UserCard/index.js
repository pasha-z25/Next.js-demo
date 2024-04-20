import Link from 'next/link';
import { getRandomColor } from '../../../utils/helpers';

export function UserCard({ user }) {
    const { id, name, email } = user;
    const initials = name.split(' ').map(str => str[0].toUpperCase()).join('');
    const logoUrl = `https://via.placeholder.com/200/${getRandomColor()}?text=${initials}`; //

    return (
        <article id={id} className='card'>
            <img src={logoUrl} alt={name} className='logo' />
            <h2>{name}</h2>
            <a href={`mailto:${email}`} target='_blank'>{email}</a>
            <br />
            <Link href={`./users/${id}`}>More info...</Link>
        </article>
    )
};

export default UserCard;