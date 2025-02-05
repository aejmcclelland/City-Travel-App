
import { providerMap } from '../../auth';
import SignIn from '../../components/SignIn';

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <SignIn key={provider.id} provider={provider} />
      ))}
    </div>
  )
}
