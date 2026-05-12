import SiteHeader from '@/components/site-header';
import { getCanonicalUrl } from '@/lib/seo';
import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            image: '/assets/backgroud-1.png',
            badge: 'Inovasi Cerdas',
            title: 'Sistem Pencarian',
            highlight: 'Tanah Daerah',
            description: 'Portal informasi digital terpadu untuk pencarian lokasi administratif, batas wilayah, dan dokumen spasial Kabupaten Lombok Utara secara akurat.'
        },
        {
            image: '/assets/gili-meno.jpg',
            badge: 'Transparan & Presisi',
            title: 'Pemetaan Spasial',
            highlight: 'Akurat',
            description: 'Memberikan kepastian informasi pertanahan untuk mendukung pembangunan yang inklusif, berkelanjutan dan tata ruang yang rapi.'
        },
        {
            image: '/assets/gili-trawangan.jpeg',
            badge: 'Akses Mudah',
            title: 'Layanan 24 Jam',
            highlight: 'Terintegrasi',
            description: 'Akses informasi pertanahan kapan saja dan di mana saja. Membawa pelayanan publik terdepan langsung ke ujung jari Anda.'
        }
    ];

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => window.clearInterval(intervalId);
    }, [slides.length]);

    return (
        <>
            <Head title="SIPETA - Lombok Utara">
                <link rel="canonical" href={getCanonicalUrl('/')} />
                <meta name="description" content="SIPETA (Sistem Pencarian Tanah) Kabupaten Lombok Utara" />
            </Head>

            <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-cyan-950 font-sans selection:bg-cyan-500 selection:text-white">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out ${
                                activeSlide === idx ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                            }`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                    ))}
                    {/* Overlay Gradient for readability */}
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-950/95 via-cyan-900/80 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-cyan-950 via-transparent to-transparent md:hidden" />
                </div>

                <div className="relative z-10 flex min-h-screen flex-col">
                    <SiteHeader />

                    <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8 md:flex-row md:justify-between md:px-8 lg:px-16">
                        
                        {/* Text Content */}
                        <div className="flex w-full flex-col justify-center space-y-6 md:w-1/2 lg:w-7/12">
                            <div className="relative h-[320px] w-full sm:h-[280px] md:h-[350px]">
                                {slides.map((slide, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                                            activeSlide === idx 
                                                ? 'translate-y-0 opacity-100 pointer-events-auto' 
                                                : 'translate-y-8 opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        <span className="mb-4 inline-block w-fit rounded-full border border-cyan-300/30 bg-cyan-500/20 px-4 py-1.5 text-sm font-semibold text-cyan-100 backdrop-blur-md">
                                            {slide.badge}
                                        </span>
                                        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                            {slide.title} <br />
                                            <span className="text-transparent bg-clip-text text-cyan-300 drop-shadow-lg">
                                                {slide.highlight}
                                            </span>
                                        </h1>
                                        <p className="mt-4 max-w-lg text-base text-cyan-50 sm:text-lg md:text-xl leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mascot Section */}
                        <div className="relative mt-12 flex w-full justify-center md:mt-0 md:w-1/2 lg:w-5/12 pb-10 md:pb-0">
                            {/* Decorative blob behind mascot */}
                            <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/40 blur-[80px] filter md:h-80 md:w-80"></div>
                            
                            <img 
                                src="/assets/maskot.png" 
                                alt="Maskot SIPETA" 
                                className="z-10 h-64 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] md:h-[300px] lg:h-[400px] animate-[bounce_4s_ease-in-out_infinite]"
                            />
                        </div>
                    </main>

                    {/* Custom Footer & Slider Controls */}
                    <div className="container relative z-20 mx-auto flex flex-col items-center justify-between gap-4 border-t border-white/10 p-6 md:flex-row md:py-8 lg:px-16">
                        <div className="text-sm font-medium text-cyan-200">
                            © 2026 SIPETA Kabupaten Lombok Utara
                        </div>
                        
                        {/* Slider Dots */}
                        <div className="flex gap-3">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSlide(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        activeSlide === idx ? 'w-10 bg-cyan-400' : 'w-2.5 bg-white/30 hover:bg-white/50'
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <a href="https://sipetalombokutara.id" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                            www.sipetalombokutara.id
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
