'use client'
import Cookies from 'js-cookie'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { users } from '@/data/users'

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Please provide a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Please enter at least 6 characters'),
})

export default function Login() {
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        setErrors({})
        try {
          const matchedUser = users.find((user) => user.email.toLowerCase() === values.email.toLowerCase())
          
          if (!matchedUser) {
            setErrors({ email: 'This email is invalid.' })
            return;
          }
          if (matchedUser.password !== values.password) {
            setErrors({ password: 'The password you entered is incorrect.' })
            return;
          }

          Cookies.set('accessToken', matchedUser.accessToken, {expires : 15/1440 })
          Cookies.set('refreshToken', matchedUser.refreshToken, { expires : 7})

          router.push('/dashboard')

        } catch (error) {
          setErrors({ password: 'An unexpected validation error occurred.' })
          console.log(error)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='mt-10 max-w-lg mx-auto flex items-center justify-center flex-col'>
            <p className='text-3xl font-bold text-center mb-6'>Login Page</p>
            <div>
              <Field 
              type="email" 
              name="email"  
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-amber-600 mb-4"/>
              <ErrorMessage name="email" component="div"/>
            </div>
            <div>
              <Field 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-amber-600"/>
              <ErrorMessage name="password" component="div"/>
            </div>
            <button
              type="submit"
              className="border border-amber-600 px-4 py-2 rounded mt-4 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
