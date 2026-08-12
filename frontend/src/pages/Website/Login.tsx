import InputField from "../../components/InputField";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <InputField label='email' type='email' stateVar={email} stateFunc={setEmail} />
      <InputField label='password' type='password' stateVar={password} stateFunc={setPassword}/>
    </div>
  )
}

export default Login;