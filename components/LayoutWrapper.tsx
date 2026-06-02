'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function LayoutWrapper({ children }: Props) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <>
            <main style={{ flex: 1, padding: isHomePage ? '0' : '0' }}>
                {children}
            </main>
        </>
    );
}