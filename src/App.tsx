import { ThemeProvider, createTheme } from '@mui/material'
import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loading from './pages/Loading'
import { AnimatePresence } from 'framer-motion'
const App = () => {
    const theme = createTheme({
        typography: {
            fontFamily: 'Urbanist, sans-serif',
        },
    })

    const location = useLocation()

    const LazyPageLayout = lazy(() => import('./pages/PageLayout'))
    const LazyDashboard = lazy(() => import('./pages/Dasboard'))
    const LazyCreateAds = lazy(() => import('./pages/CreateAds'))
    const LazyCreateAdForm = lazy(() => import('./pages/CreateAdForm'))
    const LazyPage404 = lazy(() => import('./pages/Page404'))

    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={<Loading />}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<LazyPageLayout />}>
                            <Route path="/" element={<LazyDashboard />}></Route>
                            <Route
                                path="/create-ads"
                                element={<LazyCreateAds />}
                            ></Route>
                            <Route
                                path="/create-ad-form/:adType"
                                element={<LazyCreateAdForm />}
                            ></Route>
                        </Route>
                        <Route path="*" element={<LazyPage404 />}></Route>
                    </Routes>
                </AnimatePresence>
            </Suspense>
        </ThemeProvider>
    )
}

export default App
