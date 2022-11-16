import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useLoginUserMutation } from '../../store/api/authApi'
import { useActions } from '../../hooks/useActions'
import './SignInPage.scss'

const initialState = {
  email: '',
  password: '',
}

export const SignInPage = () => {
  let navigate = useNavigate()

  const { setUser } = useActions()

  const [formValue, setFormValue] = useState(initialState)
  const { email, password } = formValue

  const [
    loginUser,
    { data, isSuccess, isError, error },
  ] = useLoginUserMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    if (email && password) {
      await loginUser({ email, password })
    } else {
      alert('Please, fill out all fields')
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setUser({ email: data?.email!, token: data?.token! })
      navigate('/')
    }
    if (isError) {
      alert((error as any).data.message)
    }
  }, [isSuccess, isError])

  return (
    <>
      <div className="auth-page">
        <h1 className="auth__title">SIGN IN</h1>
        <form>
          <Input
            placeholder="e-mail"
            name="email"
            type="e-mail"
            value={email}
            className={'input--medium'}
            onChange={handleChange}
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            value={password}
            className={'input--medium'}
            onChange={handleChange}
          />
          <Button
            size={'large'}
            color={'black'}
            type="button"
            onClick={() => handleLogin()}
          >
            SIGN IN
          </Button>
        </form>
      </div>
    </>
  )
}
