import Link from 'next/link';

export function Pagination({ currentPage, totalPages }) {
    return (
        <>
            <div className='pagination'>
                <Link
                    href={{
                        pathname: '/users',
                        query: { page: currentPage - 1 },
                    }}
                    disabled={currentPage <= 1}
                >
                    Prev
                </Link>
                <span>&nbsp;</span>
                <Link
                    href={{
                        pathname: '/users',
                        query: { page: currentPage + 1 },
                    }}
                    disabled={currentPage >= totalPages}
                >
                    Next
                </Link>
            </div>
        </>
    )
};

export default Pagination;