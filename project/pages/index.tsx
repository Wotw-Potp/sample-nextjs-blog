import { Post } from "@/@types/post"
import Container from "@/components/container"
import GlobalLayout from "@/components/global-layout"
import Heading from "@/components/heading"
import PostCard from "@/components/post-card"
import TimelineSlider from "@/components/timeline-slider"
import { PostsApi } from "@/libs/api/posts"
import Head from "next/head"

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  const images: number[] = []

  for (let i = 0; i < 6; i++) {
    images.push(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <Head>
        <title>Sample Next Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalLayout>
        <section className="mb-12">
          <Container>
            <ul className="grid grid-cols-2">
              {images.map((n, i) => (
                <li key={n * i + i}>
                  <picture>
                    <img
                      src={`https://picsum.photos/700/700?random=${n}`}
                      alt={`sample image ${n}`}
                      loading="eager"
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                </li>
              ))}
            </ul>
          </Container>
        </section>
        <section className="bg-lightgray pt-12 pb-28">
          <Container>
            <div className="flex items-center justify-around">
              <div className="mr-10">
                <Heading>About</Heading>
                <blockquote className="leading-exloose">
                  万一の事態って一体何だい
                  <br />
                  誰もがまさかと思い、同時にもしやと疑いを否定できない。あのベイブリッジ以来ね。
                  <br />
                  この間のスクランブル騒ぎがいい例さ。府中の防空司令は撃墜命令まで出しちゃったって言うじゃない。
                  <br />
                  あの狸親父この機会に点数を稼いで警備部の権限を拡大しようって腹だろうが、こんな情勢下に警察がその矛先を自衛隊に向けたら
                </blockquote>
              </div>
              <div className="basis-2/5 shrink-0">
                <TimelineSlider />
              </div>
            </div>
          </Container>
        </section>
        <section className="pt-14 pb-20">
          <Container>
            <Heading>Message</Heading>
            <div className="text-center leading-exloose">
              <blockquote>
                エホバくだりて、かの人々の建つる街と塔を見たまえり。
                <br />
                いざ我らくだり、かしこにて彼らの言葉を乱し、互いに言葉を通ずることを得ざらしめん。
                <br />
                ゆえにその名は、バベルと呼ばる
              </blockquote>
              <hr className="my-8 mx-auto w-1/2 border-darkbrawn" />
              <blockquote>
                時代遅れの技術屋がなぐさめあってもはじまらねえ。
                <br />
                本当のことさ。だがな、どんなに技術が進んでもこれだけはかわらねえ。
                <br />
                機械を作るやつ、整備するやつ使うやつ、
                <br />
                人間の側が間違いを起こさなけりゃ機械も決して悪さはしねえもんだ。
              </blockquote>
            </div>
          </Container>
        </section>
        <section className="pt-14 pb-24 bg-lightgray">
          <Container>
            <Heading>Blogs</Heading>
            <div className="py-10">
              {posts && (
                <ul className="grid grid-cols-3 lg:gap-12 gap-8">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <PostCard Post={post} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
        </section>
      </GlobalLayout>
    </>
  )
}

export async function getStaticProps() {
  const posts = new PostsApi().getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
  ])

  return {
    props: { posts },
  }
}
