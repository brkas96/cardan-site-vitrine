'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Wrench,
    ShieldCheck,
    Truck,
    MessageCircle,
    ChevronRight,
    MapPin,
    Clock
} from 'lucide-react';

export default function Home() {
    // Playlist de vídeos de fundo em sequência
    const playlist = [
        '/videos/truck01.mp4',
        '/videos/truck02.mp4',
        '/videos/truck03.mp4'
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Função disparada automaticamente quando o vídeo atual acaba
    const handleVideoEnded = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    const whatsappNumber = '5516999783336'; // Substitua pelo número real
    const whatsappBaseUrl = `https://wa.me/${whatsappNumber}?text=`;

    const handleQuoteClick = (service = '') => {
        const message = service
            ? `Olá! Gostaria de solicitar um orçamento para restauração de eixo cardan de ${service}.`
            : 'Olá! Gostaria de fazer um orçamento para restauração de eixo cardan.';
        window.open(`${whatsappBaseUrl}${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="relative isolate min-h-screen w-full overflow-x-hidden text-white font-sans selection:bg-red-600 selection:text-white">

            {/* 
              ========================================
              1. BACKGROUND EM VÍDEO FIXO (PLAYLIST DE VÍDEOS)
              ========================================
            */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}
            >
                <video
                    key={playlist[currentVideoIndex]} // Garante a troca fluida para o próximo vídeo da lista
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnded} // Avança para o próximo vídeo ao terminar
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.5) contrast(1.15)'
                    }}
                >
                    <source src={playlist[currentVideoIndex]} type="video/mp4" />
                    Seu navegador não suporta tags de vídeo.
                </video>

                {/* Overlay com gradiente escuro profissional para a escrita NUNCA ficar ofuscada */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.75), rgba(9, 9, 11, 0.55))'
                    }}
                />
            </div>

            {/* 
              ========================================
              2. CONTEÚDO PRINCIPAL DO SITE (CENTRALIZADO E RESPONSIVO)
              ========================================
            */}
            <main className="relative z-10 cardan-layout">

                {/* HEADER / NAVBAR */}
                <header className="flex items-center justify-between gap-2 border border-white/10 px-3 py-3 backdrop-blur-xl rounded-2xl bg-zinc-900/60 shadow-2xl sm:px-8 sm:py-4">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <div className="shrink-0 rounded-xl bg-red-600 p-2.5 text-white shadow-lg shadow-red-600/20">
                            <Wrench className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
                        </div>
                        <div className="whitespace-nowrap">
                            <span className="text-base sm:text-2xl font-black tracking-wider uppercase text-white">PR </span>
                            <span className="text-base sm:text-2xl font-black tracking-wider uppercase text-red-500">Cardans</span>
                        </div>
                    </div>

                    <button
                        onClick={() => handleQuoteClick()}
                        className="flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-3 py-2.5 text-xs font-extrabold text-white transition-all hover:bg-red-500 hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20 cursor-pointer sm:px-6 sm:py-3 sm:text-sm"
                    >
                        <MessageCircle className="h-4 w-4 fill-zinc-950" />
                        <span className="hidden xs:inline">Falar com Técnico</span>
                        <span className="xs:hidden">WhatsApp</span>
                    </button>
                </header>

                {/* HERO SECTION */}
                <section className="my-auto py-14 sm:py-20 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-600/10 border border-red-500/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-300 backdrop-blur-md shadow-lg">
                            <ShieldCheck className="h-4 w-4" />
                            Especialistas em Alta Performance e Carga Pesada
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white drop-shadow-md">
                            Restauração e Balanceamento de <span className="text-red-500">Eixos Cardan</span>
                        </h1>

                        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-medium drop-shadow">
                            Manutenção especializada para veículos leves, utilitários e frota pesada. Alinhamento de alta precisão, substituição de cruzetas e eliminação completa de vibrações.
                        </p>

                        {/* CALL TO ACTIONS */}
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleQuoteClick('Caminhões / Linha Pesada')}
                                className="group flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 sm:px-8 py-4 text-sm sm:text-base font-black text-white shadow-2xl shadow-red-600/30 transition-all hover:bg-red-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                            >
                                <MessageCircle className="h-5 w-5 fill-white" />
                                <span>Solicitar Orçamento Via WhatsApp</span>
                                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <a
                                href="#servicos"
                                className="flex items-center justify-center rounded-xl border border-white/20 bg-zinc-900/80 px-6 sm:px-8 py-4 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-800 hover:border-red-500/50 shadow-lg"
                            >
                                Ver Serviços
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* CARDS DE SERVIÇOS */}
                <section id="servicos" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-12 sm:my-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-white/10 bg-zinc-900/85 p-8 sm:p-10 backdrop-blur-xl transition-all hover:border-red-500/50 hover:bg-zinc-900/95 shadow-2xl group"
                    >
                        <div className="mx-auto rounded-xl bg-red-600/10 border border-red-500/20 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                            <Truck className="h-7 w-7 text-red-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-extrabold text-white mb-2">Linha Pesada & Frota</h3>
                        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                            Recuperação, alongamento e usinagem de eixos para caminhões, carretas e ônibus com balanceamento dinâmico.
                        </p>
                        <button
                            onClick={() => handleQuoteClick('Linha Pesada')}
                            className="text-sm font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                        >
                            Cotar Linha Pesada &rarr;
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-2xl border border-white/10 bg-zinc-900/85 p-8 sm:p-10 backdrop-blur-xl transition-all hover:border-red-500/50 hover:bg-zinc-900/95 shadow-2xl group"
                    >
                        <div className="mx-auto rounded-xl bg-red-600/10 border border-red-500/20 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                            <Wrench className="h-7 w-7 text-red-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-extrabold text-white mb-2">Linha Leve & Utilitários</h3>
                        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                            Manutenção preventiva e corretiva para SUVs, pickups 4x4, vans e veículos de passeio com tração traseira/integral.
                        </p>
                        <button
                            onClick={() => handleQuoteClick('Linha Leve')}
                            className="text-sm font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                        >
                            Cotar Linha Leve &rarr;
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="rounded-2xl border border-white/10 bg-zinc-900/85 p-8 sm:p-10 backdrop-blur-xl transition-all hover:border-red-500/50 hover:bg-zinc-900/95 shadow-2xl group"
                    >
                        <div className="mx-auto rounded-xl bg-red-600/10 border border-red-500/20 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                            <ShieldCheck className="h-7 w-7 text-red-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-extrabold text-white mb-2">Troca de Componentes</h3>
                        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                            Substituição de cruzetas, luvas, ponteiras, mancais e suportes centrais com peças de alta durabilidade.
                        </p>
                        <button
                            onClick={() => handleQuoteClick('Troca de Componentes')}
                            className="text-sm font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                        >
                            Consultar Peças &rarr;
                        </button>
                    </motion.div>

                </section>

                {/* FOOTER */}
                <footer className="mt-10 border border-white/10 py-8 px-6 sm:px-8 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-300 rounded-2xl bg-zinc-900/60 shadow-2xl">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 font-medium">
                        <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                            <span>Atendimento Regional e Oficina Física</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-red-500 shrink-0" />
                            <span>Seg - Sex: 07:00 às 17:00</span>
                        </span>
                    </div>
                    <p className="text-center md:text-right">
                        © {new Date().getFullYear()} <strong className="text-white">PR Cardans</strong>. Todos os direitos reservados.
                    </p>
                </footer>

            </main>
        </div>
    );
}
