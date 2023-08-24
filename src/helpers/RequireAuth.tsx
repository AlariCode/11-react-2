import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const jwt = localStorage.getItem('jwt');
	if (!jwt) {
		return <Navigate to="/auth/login" replace />;
	}
	return children;
};