import { PropsWithChildren } from "react"

interface Props {
  level?: "section"
}

export default function Heading({
  children,
  level = "section",
}: PropsWithChildren<Props>) {
  return (
    <>
      <h2 className="c-heading c-heading-section">{children}</h2>
    </>
  )
}
