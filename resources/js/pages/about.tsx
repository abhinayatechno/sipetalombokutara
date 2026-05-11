import { InfoIcon } from '@/components/icons';
import SiteHeader from '@/components/site-header';
import { getCanonicalUrl } from '@/lib/seo';
import { Head } from '@inertiajs/react';
import { Building2, MapPin, MessageCircle } from 'lucide-react';

const leadershipStructure = [
    'Kepala Badan',
    'Sekretaris Badan',
    'Kepala Bidang Pengelolaan Barang Milik Daerah',
];

const subfields = [
    'Kepala Subbidang Pengendalian dan Pemanfaatan Barang Milik Daerah',
    'Kepala Subbidang Pengamanan, Pengalihan dan Penghapusan Barang Milik Daerah',
];

const functionalRoles = [
    'Analis Kebijakan Ahli Muda',
    'Analis Kebijakan Ahli Pertama',
    'Penelaah Teknis Kebijakan',
    'Pengolah Data dan Informasi',
    'Pengelola Layanan Operasional',
];

const whatsappUrl = 'https://wa.me/6282340866669';

export default function About() {
    return (
        <>
            <Head title="About - SIPETA Kabupaten Lombok Utara">
                <link rel="canonical" href={getCanonicalUrl('/about')} />
                <meta
                    name="description"
                    content="Informasi kontak, alamat, dan struktur organisasi penanggung jawab SIPETA Kabupaten Lombok Utara pada Bidang Pengelolaan Barang Milik Daerah."
                />
                <meta
                    property="og:title"
                    content="About - SIPETA Kabupaten Lombok Utara"
                />
                <meta
                    property="og:description"
                    content="Kontak WhatsApp, alamat, dan struktur organisasi penanggung jawab SIPETA Kabupaten Lombok Utara."
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/logo-klu.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div className="relative min-h-screen overflow-hidden bg-cyan-400">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: 'url(/assets/background-2.png)' }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-cyan-500/95 via-cyan-400/90 to-cyan-500/95" />

                <div className="relative z-10">
                    <div className="container mx-auto">
                        <SiteHeader />
                    </div>

                    <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-12 lg:py-10">
                        <section className="mb-8 max-w-4xl">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/35">
                                <InfoIcon className="h-5 w-5" />
                                About SIPETA
                            </div>
                            <h1 className="text-3xl font-black text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
                                Informasi Penanggung Jawab
                            </h1>
                            <p className="mt-4 max-w-3xl text-base leading-7 font-medium text-white/95 sm:text-lg">
                                SIPETA dikelola oleh Badan Keuangan dan Aset
                                Daerah Kabupaten Lombok Utara, dengan fokus
                                struktur pada Bidang Pengelolaan Barang Milik
                                Daerah.
                            </p>
                        </section>

                        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
                            <div className="space-y-4">
                                <div className="rounded-lg bg-white p-5 shadow-2xl">
                                    <div className="flex gap-4 items-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                                        <MessageCircle className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-xl font-black text-gray-900">
                                            Kontak WhatsApp
                                        </h2>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        Hubungi layanan melalui WhatsApp untuk
                                        informasi terkait SIPETA.
                                    </p>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-700 sm:w-auto"
                                    >
                                        <MessageCircle className="h-5 w-5" />
                                        +62 823-4086-6669
                                    </a>
                                </div>

                                <div className="rounded-lg bg-white p-5 shadow-2xl">
                                    <div className="flex gap-4 items-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-xl font-black text-gray-900">
                                            Alamat
                                        </h2>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        Jl. Raya Tioq Tata Tunak, Tanjung,
                                        Kabupaten Lombok Utara, Nusa Tenggara
                                        Barat, 83352.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-lg bg-white p-5 shadow-2xl sm:p-6 lg:p-8">
                                <div className="mb-6 flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                                        <Building2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                                            Struktur Organisasi BMD
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            Badan Keuangan dan Aset Daerah
                                            Kabupaten Lombok Utara
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-x-auto pb-2">
                                    <div className="mx-auto max-w-70 md:max-w-full">
                                        <div className="flex flex-col items-center">
                                            {leadershipStructure.map(
                                                (position, index) => (
                                                    <div
                                                        key={position}
                                                        className="flex flex-col items-center"
                                                    >
                                                        <div
                                                            className={`w-72 rounded-lg border px-4 py-3 text-center shadow-sm ${
                                                                index === 2
                                                                    ? 'border-cyan-300 bg-cyan-50 text-cyan-900'
                                                                    : 'border-gray-200 bg-white text-gray-900'
                                                            }`}
                                                        >
                                                            <p className="text-sm leading-5 font-black">
                                                                {position}
                                                            </p>
                                                        </div>
                                                        {index <
                                                            leadershipStructure.length -
                                                                1 && (
                                                            <div className="h-6 w-px bg-cyan-300" />
                                                        )}
                                                    </div>
                                                ),
                                            )}

                                            <div className="h-6 w-px bg-cyan-300" />
                                            <div className="h-px w-[275px] bg-cyan-300" />
                                            <div className="grid w-[520px] grid-cols-2 gap-6">
                                                {subfields.map((position) => (
                                                    <div
                                                        key={position}
                                                        className="flex flex-col items-center"
                                                    >
                                                        <div className="h-6 w-px bg-cyan-300" />
                                                        <div className="min-h-24 rounded-lg border border-cyan-200 bg-white px-4 py-3 text-center shadow-sm">
                                                            <p className="text-sm leading-5 font-bold text-gray-900">
                                                                {position}
                                                            </p>
                                                        </div>
                                                        <div className="h-6 w-px bg-cyan-300" />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="h-px w-[275px] bg-cyan-300" />

                                            <div className="h-8 w-px bg-cyan-300" />
                                            <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4">
                                                <p className="mb-4 text-center text-sm font-black text-gray-800">
                                                    Jabatan Fungsional dan
                                                    Pelaksana Bidang BMD
                                                </p>
                                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                                    {functionalRoles.map(
                                                        (position) => (
                                                            <div
                                                                key={position}
                                                                className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-center"
                                                            >
                                                                <p className="text-xs leading-5 font-bold text-gray-800 sm:text-sm">
                                                                    {position}
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
