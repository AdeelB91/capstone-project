import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/homepage");
    }
  }, [session, router]);

  return (
    <LogInPage>
      <LogInContainer
        width="180"
        height="170"
        viewBox="0 0 188 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.785 129.871H84.7645C83.2238 129.869 81.7469 129.314 80.6579 128.329C79.5688 127.343 78.9565 126.007 78.9553 124.614L77.879 111.29C71.9675 108.545 67.0051 104.382 63.535 99.257C60.0649 94.132 58.2209 88.2425 58.2048 82.2332C58.2048 64.2472 74.3869 49.6102 94.282 49.6102C114.177 49.6102 130.359 64.243 130.359 82.2332C130.34 88.242 128.495 94.1305 125.026 99.2551C121.556 104.38 116.595 108.543 110.685 111.29L109.599 124.767C109.595 127.513 106.991 129.871 103.785 129.871ZM94.2773 53.8602C85.9586 53.8692 77.9835 56.8614 72.1013 62.1804C66.219 67.4995 62.9101 74.711 62.9001 82.2332C62.9145 87.6471 64.6349 92.945 67.8596 97.5065C71.0844 102.068 75.6799 105.704 81.1079 107.988L82.3628 108.515L83.6459 124.461C83.6506 125.171 84.1488 125.621 84.7645 125.621H103.785C104.396 125.621 104.895 125.171 104.895 124.614L106.182 108.515L107.442 107.992C112.869 105.706 117.464 102.069 120.689 97.5072C123.913 92.9454 125.634 87.6473 125.65 82.2332C125.64 74.7118 122.332 67.5008 116.45 62.1819C110.569 56.863 102.595 53.8704 94.2773 53.8602V53.8602Z"
          fill="white"
        />
        <path
          d="M104.307 144.05H84.2428C82.7033 144.047 81.2276 143.493 80.1395 142.508C79.0513 141.523 78.4395 140.189 78.4383 138.797V133.79C78.4383 130.892 81.0421 128.541 84.2428 128.541H104.307C107.512 128.541 110.116 130.896 110.116 133.79V138.797C110.115 140.189 109.503 141.525 108.413 142.51C107.324 143.495 105.847 144.048 104.307 144.05V144.05ZM84.2475 132.787C83.9546 132.787 83.6736 132.892 83.4665 133.08C83.2594 133.267 83.143 133.521 83.143 133.786V138.792C83.143 139.345 83.6365 139.795 84.2475 139.795H104.312C104.923 139.795 105.421 139.345 105.421 138.792V133.79C105.42 133.525 105.302 133.271 105.094 133.084C104.887 132.896 104.605 132.791 104.312 132.791H84.2475V132.787ZM91.9273 17.4505H96.6273V43.7282H91.9273V17.4505ZM145.587 38.9938L148.91 41.9985L128.362 60.5753L125.039 57.5705L145.587 38.9938ZM138.579 83.5253H167.64V87.7753H138.579V83.5253ZM42.4316 38.9853L62.9753 57.562L59.6524 60.5668L39.1087 41.9942L42.4316 38.9853ZM20.3604 83.5253H49.4252V87.7753H20.3604V83.5253Z"
          fill="white"
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

const LogInContainer = styled.svg`
  margin-bottom: 10vh;
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
  const session = await getSession();
  return {
    props: { providers },
  };
}
