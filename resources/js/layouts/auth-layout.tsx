import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import { Head } from '@inertiajs/react';

export default function AuthLayout({
    children,
    title,
    description,
    ...props
}: {
    children: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <AuthLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AuthLayoutTemplate>
        </>
    );
}
