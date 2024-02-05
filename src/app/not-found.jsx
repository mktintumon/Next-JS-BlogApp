import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <p>The page you are looking for doesn't exists!!!</p>
            <Link href="/">Go to Home</Link>
        </div>
    );
}


