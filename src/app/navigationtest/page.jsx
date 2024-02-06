"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NavigationTest() {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const query = searchParams.get("q")

    console.log(pathname);
    console.log(query);

    const handleClick = () =>{
        console.log("button clicked");
        router.push("/") // route.replace will not keep history of routes 
    }

    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Redirect</button>
        </div>
    );
}

