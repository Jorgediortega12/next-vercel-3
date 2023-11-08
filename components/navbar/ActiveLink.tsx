import { useRouter } from 'next/router';
import { FC } from 'react';
import Link from 'next/link';
import { CSSProperties } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

/*Aqui definimos nuestras Props para evitar el error al migrar a TypeScript,
si estuvieramos en React tendriamos que crear nuestras Props fuera.*/
interface Props {
    text: string; 
    href: string; 
}

export const ActiveLink:FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href } legacyBehavior>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
    );
};
