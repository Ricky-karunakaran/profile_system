import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/public/style.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <div className="body">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
