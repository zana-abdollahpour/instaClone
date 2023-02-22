import Head from "next/head";
import { Inter } from "@next/font/google";

import Header from "@/components/Header/Header";
import Feed from "@/components/Feed/Feed";
import UploadModal from "@/components/UploadModal/UploadModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>InstaClone App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
      <UploadModal />
    </div>
  );
}
