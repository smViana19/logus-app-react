import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../components/CardsContainers/UserCard.jsx';
import CategoryCard from '../components/CardsContainers/CategoryCard.jsx';
import Navbar from '@/components/Navs/NavBar.jsx';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {

    const { isLoggedIn, isLoading, user, role } = useSelector((state) => ({
        isLoggedIn: state.auth.isLoggedIn,
        isLoading: state.auth.isLoading,
        user: state.auth.user?.nome,
        role: state.auth.user?.role,
    }));

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verificar o tema armazenado no localStorage ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    const handleThemeChange = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-800">
            <Navbar role={role} handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
            <main className="pt-24">
                <UserCard role={role} user={user} />

                <div className="flex md:gap-8 gap-4 md:mx-16 overflow-x-auto">
                    <CategoryCard
                        categoria={'Resumos'}
                        customClass={'bg-white text-black'}
                    />
                    <CategoryCard
                        categoria={'Apresentações'}
                        customClass={'bg-white text-black'}
                    />
                    <CategoryCard
                        categoria={'Atividades'}
                        customClass={'bg-white text-black'}
                    />
                </div>

                <section className="md:mx-8 lg:mx-16 mt-16">
                    <h1>Recados</h1>

                    <div>

                    </div>
                </section>
            </main>
        </div>
    );
}
