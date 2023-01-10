import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const formFields = {
  signIn: {
    username: {
      dialCode: "+82",
    },
  },
  signUp: {
    phone_number: {
      dialCode: "+82",
    },
  },
};

export default function App() {
  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.attributes.name}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
