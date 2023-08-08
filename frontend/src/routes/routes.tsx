import { useAuth } from 'contexts/auth.context';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { LoadingPage } from 'pages/LoadingPage';

const ResetPwd = lazy(() => import('pages/ResetPwd').then((module) => ({ default: module.ResetPwd })));
const ForgotPwd = lazy(() => import('pages/ForgotPwd').then((module) => ({ default: module.ForgotPwd })));
const Login = lazy(() => import('pages/Login').then((module) => ({ default: module.Login })));
const SignUp = lazy(() => import('pages/SignUp').then((module) => ({ default: module.SignUp })));
const FillInformation = lazy(() => import('pages/FillInformation').then((module) => ({ default: module.FillInformation })));
const Home = lazy(() => import('pages/Home').then((module) => ({ default: module.Home })));

export const Router = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path="*" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgot-pwd" element={<ForgotPwd />} />
                    <Route path="reset-pwd" element={<ResetPwd />} />

                    <Route path="404" element={<NotFound />} />
                </Routes>
            </Suspense>
        )
    }

    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="fill-information" element={<FillInformation />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </Suspense>
    )
}
