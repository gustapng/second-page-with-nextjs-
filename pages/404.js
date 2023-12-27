import Link from 'next/link';

export default function undefinedPage() {
    return (
        <div>
            <h1>Você se perdeu na navegação, página 404</h1>
            <Link href="/">Ir para a Home</Link>
        </div>
    )
}