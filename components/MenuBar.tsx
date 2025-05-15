import Link from "next/link";

type MenuBarProps = {
  page: string;
};
export default function MenuBar(props: MenuBarProps) {
  return (
    <div>
      <div className="flex justify-around bg-purple-200 p-5 text-3xl text-bold">
        <Link href="/" className="ibm-plex-sans-thai-bold">
          Home
        </Link>
        <Link href="/state" className="ibm-plex-sans-thai-bold">
          State
        </Link>
        <Link href="/props" className="ibm-plex-sans-thai-bold">
          Props
        </Link>
        <Link href="/use-effect" className="ibm-plex-sans-thai-bold">
          UseEffect
        </Link>
      </div>

      <div className="p-4 bg-white-400">
        <p className="text-2xl font-extrabold text-center">
          ตอนนี้คุณอยู่ที่หน้า {props.page}
        </p>
      </div>
    </div>
  );
}
