import { useEffect, useState } from "react"
import Link from "next/link"
import Avatar from "./avatar"
import { Post } from "@/@types/post"
import DateFormatter from "./date-formatter"

interface Props {
  Post: Post
}

export default function PostCard({ Post }: Props) {
  const [coverImg, setCoverImg] = useState("")

  useEffect(() => {
    setCoverImg(getCoverImg())
  }, [])

  const getCoverImg = () => {
    return Post.coverImage
      ? Post.coverImage
      : "https://picsum.photos/1000/700?random=" +
          Math.floor(Math.random() * 100).toString()
  }

  return (
    <>
      <article className="shadow-md bg-white h-full">
        <Link as={`/posts/${Post.slug}`} href="/posts/[slug]">
          <div className="flex flex-col h-full">
            <div className="lg:h-60 h-48 overflow-hidden">
              <picture>
                <img
                  src={coverImg}
                  alt={Post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                />
              </picture>
            </div>
            <div className="grow px-6 py-4">
              <h3>{Post.title}</h3>
              <div>
                <DateFormatter dateString={Post.date} />
              </div>
            </div>
            <div className="px-6 pb-4">
              <Avatar name={Post.author.name} picture={Post.author.picture} />
            </div>
          </div>
        </Link>
      </article>
    </>
  )
}
