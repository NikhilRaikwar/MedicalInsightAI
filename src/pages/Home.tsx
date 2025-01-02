import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Stethoscope, Brain, Search, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MedicalInsightAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="relative">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Revolutionizing</span>
                  <span className="block text-indigo-600">Clinical Trial Matching</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Using advanced AI and knowledge graphs to connect patients with the right clinical trials faster and more accurately than ever before.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Link to="/signup">
                      <Button size="lg">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            <Brain className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">AI-Powered Matching</h3>
                        <p className="mt-5 text-base text-gray-500">
                          Advanced algorithms analyze patient data to find the most suitable clinical trials.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            <Search className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Smart Search</h3>
                        <p className="mt-5 text-base text-gray-500">
                          Intelligent search capabilities to find relevant trials quickly and efficiently.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            <Users className="h-6 w-6 text-white" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Patient-Centric</h3>
                        <p className="mt-5 text-base text-gray-500">
                          Designed with patients in mind, making trial participation more accessible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}