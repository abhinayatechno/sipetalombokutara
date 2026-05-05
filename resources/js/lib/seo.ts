export function getCanonicalUrl(pathname: string): string {
    const origin =
        typeof window !== 'undefined'
            ? window.location.origin
            : 'https://sipetalombokutara.id';

    return new URL(pathname, origin).toString();
}