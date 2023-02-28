import Link from "next/link"

interface Props {
  title: string
  src: string
  slug?: string
}

export default function CoverImage({ title, src, slug }: Props) {
  const classes = ["shadow-sm"]

  if (slug) classes.push("hover:shadow-lg", "transition-shadow", "duration-200")

  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={classes.join(" ")}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span aria-label={title}>{image}</span>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
