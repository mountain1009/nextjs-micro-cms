import Link from "next/link";

const Header = () => {
    return(
        <header className="container">
            <nav>
                <ul>
                    <li>
                        <img width="50px" height="50px" src="/images/logo.png" alt="ロゴ画像"/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">Top</Link>
                    </li>
                    <li>
                        <Link href="/categories">カテゴリー</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header
