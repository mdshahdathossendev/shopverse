import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
   <html>
    <body>
    <div>
   <Providers>
     {children}
   </Providers>
    </div>
   </body>
   </html>
  );
}