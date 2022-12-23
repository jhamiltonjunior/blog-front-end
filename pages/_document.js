import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-HL9GELG1VR`}
          />

          <Script strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HL9GELG1VR', {
              page_path: window.location.pathname,
              });
            `}
          </Script>

          {/* pinterest verification */}
          <meta
            name="p:domain_verify"
            content="101e0b73f937264111d2ad8d29c014e5"
          />
          {/* eslint-disable-next-line */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap"
            rel="stylesheet"
          />
          <Script strategy="lazyOnload">
            {`
              var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon")
              var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon")

              // Change the icons inside the button based on previous settings
              if (
                localStorage.getItem("color-theme") === "dark" ||
                (!("color-theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
              ) {
                themeToggleLightIcon.classList.remove("hidden")
              } else {
                themeToggleDarkIcon.classList.remove("hidden")
              }

              var themeToggleBtn = document.getElementById("theme-toggle")

              themeToggleBtn.addEventListener("click", function () {
                // toggle icons inside button
                themeToggleDarkIcon.classList.toggle("hidden")
                themeToggleLightIcon.classList.toggle("hidden")

                // if set via local storage previously
                if (localStorage.getItem("color-theme")) {
                  if (localStorage.getItem("color-theme") === "light") {
                    document.documentElement.classList.add("dark")
                    localStorage.setItem("color-theme", "dark")
                  } else {
                    document.documentElement.classList.remove("dark")
                    localStorage.setItem("color-theme", "light")
                  }

                  // if NOT set via local storage previously
                } else {
                  if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark")
                    localStorage.setItem("color-theme", "light")
                  } else {
                    document.documentElement.classList.add("dark")
                    localStorage.setItem("color-theme", "dark")
                  }
                }
              })
            `}
          </Script>
          <Script strategy="lazyOnload">
            {`if (localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)){" "}
            {document.documentElement.classList.add("dark")}
            
            {document.documentElement.classList.remove("dark")}`}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
