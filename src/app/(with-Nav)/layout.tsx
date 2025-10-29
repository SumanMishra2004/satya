
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
          <Navbar />
          <main>{children}</main>
          <Footer/>
    </>
     
  );
}
