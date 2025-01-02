import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Stethoscope, User } from 'lucide-react';

export default function Navigation() {
  const { signOut } = useAuth();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">MedicalInsightAI</span>
          </div>

          <div className="hidden sm:ml-16 sm:flex sm:space-x-8">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/trials"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
              }
            >
              Clinical Trials
            </NavLink>
            <NavLink
              to="/patients"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
              }
            >
              Patients
            </NavLink>
          </div>

          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar>
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => {}}>Profile</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => {}}>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={signOut}>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}