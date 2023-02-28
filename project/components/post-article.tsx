import Avatar from "./avatar"
import CoverImage from "./cover-image"
import DateFormatter from "./date-formatter"
import markdownStyles from "@/styles/markdown-styles.module.css"
import { Post } from "@/@types/post"
import { useState, useEffect } from "react"

type Props = {
  post: Post
}

export default function PostArticle({ post }: Props) {
  const [coverImg, setCoverImg] = useState<string>("")

  useEffect(() => {
    setCoverImg(getCoverImg())
  }, [])

  const getCoverImg = () => {
    return post.coverImage
      ? post.coverImage
      : "https://picsum.photos/1000/700?random=" +
          Math.floor(Math.random() * 100).toString()
  }

  return (
    <>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {post.title}
      </h1>
      <div className="hidden md:block md:mb-12">
        <Avatar name={post.author.name} picture={post.author.picture} />
      </div>
      <div className="mb-8 md:mb-16 mx-auto w-fit max-w-4xl">
        <CoverImage title={post.title} src={coverImg} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={post.author.name} picture={post.author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={post.date} />
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  )
}
