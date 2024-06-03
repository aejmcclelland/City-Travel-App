import { headers } from 'next/headers';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const BackLink = ({ defaultBackPath = '/attractions' }) => {
    const headersList = headers();
    const referer = headersList.get('referer') || '';

    const backPath = referer.includes('/map') ? '/map' : defaultBackPath;

    return (
        <section>
            <div className="container m-auto py-6 px-6">
                <Link href={backPath}
                    className="text-blue-500 hover:text-blue-600 flex items-center">
                    <FaArrowLeft className="mr-2" /> Back

                </Link>
            </div>
        </section>
    );
};

export default BackLink;