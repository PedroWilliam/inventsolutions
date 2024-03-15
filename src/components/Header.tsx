import Link from "next/link";

export default function Header() {
  return (
    <div className="self-start mb-auto fixed top-4 left-4">
      <Link className="mx-1 sm:mx-2" href="/pt-BR">PT</Link>
        |
      <Link  className="mx-1 sm:mx-2" href="/en">EN</Link>
    </div>
  )
}
