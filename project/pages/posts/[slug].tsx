import { Post as PostType } from "@/@types/post"
import { PostsApi } from "@/libs/api/posts"
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import GlobalLayout from "@/components/global-layout"
import Head from "next/head"
import PostArticle from "@/components/post-article"
import Container from "@/components/container"
import Link from "next/link"

interface Props {
  post: PostType
}

interface PageParams {
  params: {
    slug: string
  }
}

const POST_API = new PostsApi()

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <GlobalLayout>
        {router.isFallback ? (
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Loading…
          </h1>
        ) : (
          <>
            <Head>
              <title>{post.title} | Sample Next Blog</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <article className="pt-24 mb-32">
              <Container expand>
                <PostArticle post={post} />
              </Container>
              <div className="pt-20 pb-14">
                <hr />
                <div className="flex justify-center pt-14">
                  <Link href={"/"}>
                    <button type="button" className="c-button --blue">
                      <span>Home</span>
                      <span>
                        <svg
                          fill="none"
                          className="w-6 h-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </>
        )}
      </GlobalLayout>
    </>
  )
}

export async function getStaticProps({ params }: PageParams) {
  const post = POST_API.getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])

  const content = await PostsApi.markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = POST_API.getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
