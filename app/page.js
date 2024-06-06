import { redirect } from "next/navigation";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports"

Amplify.configure(awsExports);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {redirect("/login")}
    </main>
  );
}
