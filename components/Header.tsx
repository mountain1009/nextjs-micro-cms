import Link from "next/link";
import Image from 'next/image';
const Header = () => {
    return(
        <header className="container">
            <nav>
                <ul>
                    <li>
                        <Image src="/images/logo.png" alt="ロゴ画像" width={50} height={50}></Image>
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
