"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const isUserLoggedIn = false;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setProvider();
  }, []);

  return (
    <nav>
      <Link href={"/"}>
        <Image src={"assets/images/logo.svg"} width={30} height={30} />
      </Link>
      <p>Promptopia</p>

      {/* desktop navigation */}
      <div>
        {isUserLoggedIn ? (
          <div>
            <Link
              href={"/create-post"}
              className="btn btn-neutral btn-sm rounded-full"
            >
              Create Post
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="btn btn-sm btn-neutral btn-outline rounded-full"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={"assets/images/logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
