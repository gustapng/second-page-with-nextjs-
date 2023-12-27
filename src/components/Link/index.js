import Link from 'next/link';

// TODO - CORRIGIR A ESTILIZAÇÃO DE LINK

export default function CustomLink({ children, href, ...props }) {
    console.log(props);
    return (
        <Link href={href} passHref styleSheet={props} >
            {children}
        </Link>
    );
}

