import { PropsWithChildren, useState } from "react"
import Container from "./container"
import Heading from "./heading"

export default function GlobalLayout({ children }: PropsWithChildren) {
  const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false)

  function sendMail() {
    alert("本来ならばここで\nメール送信する")
  }

  return (
    <>
      <header>
        <Container expand>
          <div className="flex justify-between items-center pt-16 pb-10">
            <p className="leading-loose tracking-wide">
              災いなるかなバビロン<span className="-tracking-normal">__</span>
              <br />
              そのもろもろの神の像は
              <br />
              砕けて地に伏したり<span className="-tracking-normal">____</span>
            </p>
            <div>
              <button type="button" onClick={() => toggleMenuOpen(!isMenuOpen)}>
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="pt-16 pb-10 bg-slate-800 text-white">
        <Container>
          <div className="flex items-center justify-around">
            <div className="basis-2/5 shrink-0">
              <Heading>Contact</Heading>
              <div className="flex justify-center py-10">
                <button type="button" className="c-button" onClick={sendMail}>
                  <span>Contact</span>
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="ml-10">
              <blockquote className="leading-exloose">
                公務員だぞ、地方公務員。
                <br />
                お前達が乗車しているのはグレートマジンガーか？ ダンガイオーか？
                <br />
                自閉症児や不良少年が主人公のロボットアニメじゃないんだよ。
                <br />
                分かっとるのか？ 本当に
              </blockquote>
            </div>
          </div>
        </Container>
      </footer>
      {isMenuOpen && (
        <div className="fixed z-20 inset-0 bg-slate-700 bg-opacity-80 flex items-center justify-center">
          <div className="min-w-[45ch] text-white">
            <div className="text-right mb-7">
              <button type="button" onClick={() => toggleMenuOpen(!isMenuOpen)}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="text-center text-lg font-bold space-y-4">
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
