import AppNav from './components/App/AppNav.tsx';
import { Outlet } from 'react-router';

function App() {

    async function getData() {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL).then((response) => response.json())
            console.log(response);
        } catch (error) {
            console.log('error occurred:' + error);
        }
    }
    getData()

    return (
        <div className='flex h-screen'>
        <AppNav />
        <div className='w-full h-full'>
            <Outlet />
        </div>
        </div>
    )
}

export default App