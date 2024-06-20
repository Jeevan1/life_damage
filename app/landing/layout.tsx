"use client";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <main>
        <>{children}</>
      </main>
      <Footer />
    </div>
  );
}
