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
      router.push("/");
    }
  }, [session, router]);

  if (!providers) {
    return null;
  }

  return (
    <>
      <LogInPage>
        {/* <Image src={"/SVG/bluelogo.svg"} width={300} height={120} /> */}
        <Image src={"/SVG/newlogobeige.svg"} width={300} height={130} />

        <Image src={"/SVG/LogoDilemmaIcons.svg"} width={300} height={150} />
        <LogInContainer>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <LogInButton onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </LogInButton>
            </div>
          ))}
        </LogInContainer>
      </LogInPage>
    </>
  );
}

const LogInPage = styled.div`
  /* background-image: url("/SVG/Vector 7.svg"); */
  background-size: 100%;
  background-repeat: space;
  background-position: fixed;
  height: 100vh;
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  gap: 6vh;
`;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  margin-top: 5vh;
`;
const LogInButton = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  padding: 1vh;
  border: none;
  outline: none;
  color: #f8f7f2;
  background: #385782;
  cursor: pointer;
  position: relative;
  border: black solid 1.5px;
  font-size: 1rem;
  z-index: 0;
  border-radius: 10px;
  font-family: "Josefin Sans", sans-serif;

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
    background: #385782;
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
