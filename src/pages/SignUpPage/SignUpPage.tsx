import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../../store/api/authApi'
import { useActions } from '../../hooks/useActions'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

const initialState = {
  email: '',
  password: '',
}

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState(initialState)
  const { email, password } = formValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  const { setUser } = useActions()

  const [
    registerUser,
    { data, isSuccess, isError, error },
  ] = useRegisterUserMutation()

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    if (email && password) {
      registerUser({ email, password })
    } else {
      alert('Please, fill out all fields')
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setUser({ email: data?.email!, token: data?.token!, isAuth: true })
      navigate('/')
    }
    if (isError) {
      alert((error as any).data.message)
    }
  }, [isSuccess, isError])

  return (
    <>
      <div className="auth-page">
        <h1 className="auth__title">SIGN UP</h1>
        <form onSubmit={submitHandler}>
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
          <Button size="large" color="orange" type="submit">
            SIGN UP
          </Button>
        </form>
      </div>
    </>
  )
}
