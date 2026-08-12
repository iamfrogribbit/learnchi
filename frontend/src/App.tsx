import AppNav from './components/App/AppNav.tsx';
import { Outlet } from 'react-router';
import axios from 'axios'

function App() {

    async function getData() {
        try {
            const response = await axios.get('http://localhost:3000');
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