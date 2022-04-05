import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

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
    <LogInPage>
      <LogInContainer>
        <Image
          alt="App-Logo"
          src="/SVG/iwwa_lightbulb.svg"
          height={190}
          width={170}
        />
      </LogInContainer>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <LogInButton onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </LogInButton>
        </div>
      ))}
    </LogInPage>
  );
}
const LogInPage = styled.main`
  background: linear-gradient(180deg, #000000 0%, #809ab1 26.04%, #044179 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15vh;
  gap: 5vh;
`;

const LogInContainer = styled.div`
  margin-bottom: 15vh;
`;
const LogInButton = styled.button`
  width: fit-content;
  box-shadow: 0px 1px 0px 0px #1c1b18;
  background: linear-gradient(to bottom, #1a1404 5%, #1d508f 100%);
  background-color: #1a1404;
  border-radius: 18px;
  border: 1px solid #141007;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Courier New;
  font-size: 16px;
  font-weight: normal;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #000000;

  .button:hover {
    background: linear-gradient(to bottom, #1d508f 5%, #1a1404 100%);
    background-color: #1d508f;
  }
  .button:active {
    position: relative;
    top: 1px;
  }
`;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  return {
    props: { providers, session },
  };
}
