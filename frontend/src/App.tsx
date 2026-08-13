import AppNav from './components/App/AppNav.tsx';
import { Outlet } from 'react-router';

function App() {

    const url = import.meta.env.VITE_API_URL;
    console.log(url)

    async function getData() {
        try {
            const response = await fetch(url);
            console.log(response)
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