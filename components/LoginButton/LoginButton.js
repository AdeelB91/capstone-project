import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
