import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
    title: "Sahand Portfolio",
    description: "Frontend Developer Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}