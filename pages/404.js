import Link from 'next/Link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

//Redirecting the user after 3 sec if it arrives at a 404 page
const NotFound = () => {
    const router = useRouter();
    //router is a object returned by useRouter that has several methods associated

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className="not-found"><h1>Ooops....</h1>
            <h2>The page you are looking for does not exist.</h2>
            <p>Go back to <Link href='/'>Home</Link></p>
        </div>
     );
}
 
export default NotFound;