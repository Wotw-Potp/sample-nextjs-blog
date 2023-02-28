import { PropsWithChildren } from "react"

interface Props {
  expand?: boolean
}

export default function Container({
  children,
  expand = false,
}: PropsWithChildren<Props>) {
  const classes = ["container", "mx-auto"]
  classes.push(expand ? "px-2" : "px-10")

  return (
    <>
      <div className={classes.join(" ")}>{children}</div>
    </>
  )
}
