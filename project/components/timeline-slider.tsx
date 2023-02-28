import SwiperCore, { Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

SwiperCore.use([Pagination, Navigation])

export default function TimelineSlider() {
  function handleRenderBullet(index: number, className: string) {
    const year = document
      .querySelectorAll(".swiper-slide__image")
      [index].getAttribute("data-year")

    return `<span class=${className}>${year}</span>`
  }

  const SwiperOptions: SwiperProps = {
    direction: "vertical",
    loop: false,
    speed: 1600,
    pagination: {
      el: ".swiper-pagination",
      renderBullet: handleRenderBullet,
      clickable: true,
    },
    navigation: true,
  }

  return (
    <>
      <div className="timeline">
        <div className="swiper-container">
          <Swiper {...SwiperOptions}>
            <SwiperSlide>
              <div
                className="swiper-slide__image"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/600/600?random=100)",
                }}
                data-year="1988"
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">1988</span>
                  <h4 className="timeline-title">
                    初期OVA
                    <br />
                    <span className="text-[70%]">(アーリーデイズ)</span>
                    <br />
                    漫画版
                  </h4>
                  <blockquote className="timeline-text">
                    「生きてりゃ、もう１回ぐらいやれるさ」
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__image"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/600/600?random=80)",
                }}
                data-year="1989.7"
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">1989.7</span>
                  <h4 className="timeline-title">
                    劇場版
                    <br />
                    the Movie
                  </h4>
                  <p className="timeline-text">
                    「アルフォンスはいつだって最高だよ。」
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__image"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/600/600?random=50)",
                }}
                data-year="1989.10"
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">1989.10</span>
                  <h4 className="timeline-title">TVシリーズ</h4>
                  <blockquote className="timeline-text">
                    「最後まで、悔いがないように使うのが
                    <br />
                    あたしの責任なんだ」
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__image"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/600/600?random=20)",
                }}
                data-year="1990"
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">1990</span>
                  <h4 className="timeline-title">NEW OVA</h4>
                  <blockquote className="timeline-text">
                    「遊びやゲームとわけが違うんだからね！」
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__image"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/600/600?random=70)",
                }}
                data-year="1993"
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">1993</span>
                  <h4 className="timeline-title">
                    劇場版
                    <br />2 the Movie
                  </h4>
                  <p className="timeline-text">
                    「だから！遅すぎたと言ってるんだ！」
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="swiper-slide__image"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/600/600?random=40)",
                }}
                data-year="2002"
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">2002</span>
                  <h4 className="timeline-title">
                    劇場版
                    <br />
                    WX Ⅲ
                  </h4>
                  <p className="timeline-text">
                    「前座に食われないよう、 頑張りましょう」
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  )
}
