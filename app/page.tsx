// import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";
import Link from 'next/link';
import "../style/textAnimation.css";
import "../style/theme.css";
import "../style/style.css";

function funcOmo() {
  console.log('here')
}

const Leads = dynamic(() => import("@/pages/leads"), {
  ssr: false,
});



let HomeContent = `
<html
  data-wf-page="664f95ece092410e6372e3e2"
  data-wf-site="664f95ece092410e6372e3ea"
>
  <head>
    <meta charset="utf-8" />
    <title>Smarter - Webflow HTML website template</title>
    <meta
      content="Smarter - Webflow HTML website template"
      name="description"
    />
    <meta
      content="Smarter - Webflow HTML website template"
      property="og:title"
    />
    <meta
      content="Smarter - Webflow HTML website template"
      property="og:description"
    />
    <meta
      content="Smarter - Webflow HTML website template"
      property="twitter:title"
    />
    <meta
      content="Smarter - Webflow HTML website template"
      property="twitter:description"
    />
    <meta property="og:type" content="website" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="Webflow" name="generator" />
    
    
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link
      href="https://fonts.gstatic.com"
      rel="preconnect"
      crossorigin="anonymous"
    />
    <script
      src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      type="text/javascript"
    ></script>
    <script type="text/javascript">
      WebFont.load({
        google: {
          families: [
            "Work Sans:100,200,300,regular,500,600,700,800,900,100italic,italic",
            "Inter:200,300,regular,500,600",
          ],
        },
      });
    </script>
    <script type="text/javascript">
      !(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
        (n.className += t + "js"),
          ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
            (n.className += t + "touch");
      })(window, document);
    </script>
    <link
      href="https://cdn.prod.website-files.com/664f95ece092410e6372e3ea/66544b6d72a2f56c0f2f037e_Favicon.png"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="https://cdn.prod.website-files.com/664f95ece092410e6372e3ea/66544b718d5f59e399f68d07_Webclip.png"
      rel="apple-touch-icon"
    />
  </head>
  <body>
    <div
      data-w-id="92be72c0-3a98-a5eb-437e-48540808feff"
      class="section hero-section"
    >
    <div  style="padding-top: 140px;"></div>
      <div class="container">
        <div
          data-w-id="e7ef937d-82f4-baa6-4ada-563a57a545fa"
          class="hero-section-holder"
        >
          <div class="hero-section">
            <div
              style="
                opacity: 0;
                -webkit-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
              "
              class="animate-on-load-1st"
            >
              <div class="news-holder">
                <div
                  style="
                    -webkit-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    -moz-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    -ms-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    transform: translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0)
                      rotateY(0) rotateZ(0) skew(0, 0);
                  "
                  class="hero-section-news"
                >
                  <div class="hero-section-news-holder">
                    <div class="news-text">GET 20% OFF THE FIRST PURCHASE</div>
                    <a
                      href="http://google.com"
                      target="_blank"
                      class="small-button w-inline-block"
                      ><div>More</div>
                      <div class="button-icon-holder">
                        <img
                          src="https://cdn.prod.website-files.com/664f95ece092410e6372e3ea/664f95ece092410e6372e3f7_Arrow%20Icon.svg"
                          loading="lazy"
                          alt=""
                          class="button-icon"
                        /></div
                    ></a>
                  </div>
                </div>
                <div
                  style="
                    -webkit-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    -moz-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    -ms-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    transform: translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0)
                      rotateY(0) rotateZ(0) skew(0, 0);
                  "
                  class="hero-section-news"
                >
                  <div class="hero-section-news-holder">
                    <div class="news-text">NOW WITH CMS ON THE APP!</div>
                    <a
                      href="http://google.com"
                      target="_blank"
                      class="small-button w-inline-block"
                      ><div>More</div>
                      <div class="button-icon-holder">
                        <img
                          src="https://cdn.prod.website-files.com/664f95ece092410e6372e3ea/664f95ece092410e6372e3f7_Arrow%20Icon.svg"
                          loading="lazy"
                          alt=""
                          class="button-icon"
                        /></div
                    ></a>
                  </div>
                </div>
                <div
                  style="
                    -webkit-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    -moz-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    -ms-transform: translate3d(0, 0%, 0) scale3d(1, 1, 1)
                      rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    transform: translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0)
                      rotateY(0) rotateZ(0) skew(0, 0);
                  "
                  class="hero-section-news"
                >
                  <div class="hero-section-news-holder">
                    <div class="news-text">
                      READ MORE ABOUT WISEX ON APPLE.COM
                    </div>
                    <a
                      href="http://google.com"
                      target="_blank"
                      class="small-button w-inline-block"
                      ><div>More</div>
                      <div class="button-icon-holder">
                        <img
                          src="https://cdn.prod.website-files.com/664f95ece092410e6372e3ea/664f95ece092410e6372e3f7_Arrow%20Icon.svg"
                          loading="lazy"
                          alt=""
                          class="button-icon"
                        /></div
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-content-holder">
            <div
              style="
                opacity: 0;
                -webkit-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
              "
              class="animate-on-load-2nd"
            >
              <div class="hero-text-holder">
                <h1>
                  The Smartest way to  be the next
                  <span class="gradient">Best Seller</span>
                </h1>
              </div>
            </div>
            <div
              style="
                opacity: 0;
                -webkit-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 30px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
              "
              class="animate-on-load-3rd"
            >
              <div class="hero-paragraph-holder">
                <p>
                  You don't have to keep doing the boring stuffs. Let's Transform Your Vision into a Digital Reality.
                  Grow your brand with proven marketing strategies for rapid Growth
                </p>
                <br>
                <br>
                <div class="">
                  <a href="/leads" style="max-width: 50%" class="button outline-btn w-button"
                    >Explore</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=664f95ece092410e6372e3ea"
      type="text/javascript"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.prod.website-files.com/664f95ece092410e6372e3ea/js/webflow.b28258303.js"
      type="text/javascript"
    ></script>
    <script>
        $(document).ready(function () {
          $(".w-webflow-badge").removeClass("w-webflow-badge").empty();
        });
      </script>
      <script>
      $(document).ready(function () {
        function activateDark() {
          document.getElementById('cb2').checked = true;
          document.getElementById('cb3').checked = true;
          document.body.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
        function activateLight() {
          document.getElementById('cb2').checked = false;
          document.getElementById('cb3').checked = false;
          document.body.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        let toggler = document.getElementById('cb3');
        toggler.addEventListener('click', function () {
            if (this.checked) {
                activateDark()
            } else {
                activateLight()

            }
        });
        let  whatTheme = localStorage.getItem("theme")
        whatTheme == 'dark' ? activateDark() : activateLight()
        let toggler2 = document.getElementById('cb2');
      toggler2.addEventListener('click', function () {
          console.log('here')
          if (this.checked) {
              activateDark()
          } else {
              activateLight()
          }
      }
      );
      });
      </script>
  </body>
</html>
`

export default async function Page() {
  // const accessToken = await getHumeAccessToken();

  // if (!accessToken) {
  //   throw new Error();
  // }

  return (
    <div className={"grow flex flex-col"}>
      <div dangerouslySetInnerHTML={{ __html: HomeContent }}></div>
    </div>
  );
}
