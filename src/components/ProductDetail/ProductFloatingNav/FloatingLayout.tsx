"use client";

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import clx from 'classnames';

type Props = {
    children: ReactNode;
};

function FloatingLayout({ children }: Props) {
    const [isFixed, setIsFixed] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current ) {
                const rect = divRef.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    setIsFixed(true);
                }
                else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <section
                ref={divRef}
                className="w-full h-auto block">
                <div
                    className={clx(
                        'w-full h-auto block',
                        isFixed ? 'fixed top-0 bg-black' : 'bg-black'
                    )}
                >
                    {children}
                </div>
            </section>
    );
}

export default FloatingLayout;
