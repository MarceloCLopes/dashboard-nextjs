import Head from "next/head";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { LeftNavbar } from "../components/LeftNavbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marcelo | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LeftNavbar />
      <Header />
      <Content />
    </div>
  );
}