import './globals.css';

export const metadata = {
    title: 'CardanPro | Restauração de Eixos Cardan',
    description: 'Especialistas em restauração, balanceamento e manutenção de eixos cardan para linha pesada e leve.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className="bg-transparent text-white antialiased font-sans m-0 p-0">
                {children}
            </body>
        </html>
    );
}