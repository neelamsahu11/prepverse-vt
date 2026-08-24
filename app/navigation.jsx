import Link from "next/link";
function Navigation(){
return<>

<div className="flex justify-between p-2 bg-blue-100 border-b border-black  ">
    <div><Link href="/">LOGO</Link></div>
    <div className="flex gap-3
    ">
        <Link href="/modules">Modules</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/dashboard">Dashboard</Link>
    </div>
    <div className="flex gap-3">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
    </div>
</div>
</>
}
export default Navigation;