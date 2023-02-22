import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header/Header";
import Image from "next/image";

import signinImg from "../../assets/img/signin/signin.png";
import signinIgLogo from "../../assets/img/signin/instagram_logo.png";

export default function signin(props) {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-8">
        <Image
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src={signinImg}
          alt="Signin Image"
        />
        <div>
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-32 "
              src={signinIgLogo}
              alt="Instagram's Logo"
            />
            <p className="my-10 text-sm italic text-center">
              IMPORTANT!
              <br /> This app is created for <strong>Learning</strong>
              &nbsp;Purposes only.
            </p>
            {Object.values(props.providers).map((provider) => (
              <button
                key={provider.name}
                className={`p-3 mb-2 text-white transition-transform duration-150 rounded-xl ${
                  provider.name === "Google"
                    ? "hover:bg-red-500 bg-red-400"
                    : provider.name === "GitHub"
                    ? "hover:bg-gray-500 bg-gray-400"
                    : ""
                }`}
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in With {provider.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
