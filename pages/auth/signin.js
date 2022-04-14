import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/homepage");
    }
  }, [session, router]);

  if (!providers) {
    return null;
  }

  return (
    <>
      <LogInPage>
        <LogInContainer>
          <Image src={"/SVG/AppText.svg"} width={300} height={100} />
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <LogInButton onClick={() => signIn(provider.id)}>
                {<FcGoogle size={25} />} Sign in with {provider.name}
              </LogInButton>
            </div>
          ))}
        </LogInContainer>
      </LogInPage>
    </>
  );
}
const LogInPage = styled.div`
  background-image: url("/SVG/Vector 7.svg");
  background-size: 100%;
  background-repeat: space;
  background-position: fixed;
  height: 100vh;
  border: solid white 1px;
  margin-top: 18vh;
`;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;
const LogInButton = styled.button`
  display: flex;
  gap: 1.1vh;
  align-items: center;
  width: 180px;
  padding: 8px;
  border: none;
  outline: none;
  color: black;
  background: white;
  cursor: pointer;
  position: relative;
  border: black solid 1.6px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 0;
  border-radius: 10px;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession();
  return {
    props: { providers },
  };
}
