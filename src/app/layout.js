
import './globals.css';
import Script from 'next/script';

export const metadata = {
    title: 'CardanPro | Restauração de Eixos Cardan',
    description: 'Especialistas em restauração, balanceamento e manutenção de eixos cardan para linha pesada e leve.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className="bg-transparent text-white antialiased font-sans m-0 p-0">
                {children}

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-1SW341894N"
                    strategy="afterInteractive"
                />

                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        window.gtag = gtag;
                        gtag('js', new Date());
                        gtag('config', 'G-1SW341894N');
                    `}
                </Script>
            </body>
        </html>
    );
}
