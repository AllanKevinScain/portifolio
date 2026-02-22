import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Form } from "./form";
import { FormPortifolioProvider } from "@/providers/form";

export function MultiStepPage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/login" />
      </SignedOut>

      <SignedIn>
        <FormPortifolioProvider>
          <Form />
        </FormPortifolioProvider>
      </SignedIn>
    </>
  );
}
