import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Footer = () => {
    const footerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            footerRef.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                },
            }
        );
    }, []);

    return (
        <footer ref={footerRef} className="c-space pt-20 pb-10 border-t border-black-50">
            <div className="flex items-center justify-center">
                <p className="text-white-50 text-sm text-center">
                    © 2025 Iftemum Raian. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
