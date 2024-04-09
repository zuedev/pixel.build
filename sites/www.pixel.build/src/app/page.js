import "./page.css";

export default function Home() {
  return (
    <main
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "1rem",
        textAlign: "justify",
      }}
      className="space-y-4"
    >
      <p>
        Welcome to <b className="pixelbuild">PixelBuildOS</b>!
      </p>

      <p>
        This is a work-in-progress operating system built for pixel.build, an{" "}
        <a href="https://github.com/zuedev/pixel.build">open-source</a> prop
        design studio by <a href="https://zue.dev">zuedev</a> that specializes
        in building bespoke parts and premium gaming replicas.
      </p>

      <p>
        The goal of this site is to provide a unique experience for users to
        view and interact with the products and services we offer by providing a
        virtual desktop environment that is both fun and functional to use.
      </p>

      <p>
        In the meantime, feel free to shoot us an email via{" "}
        <a href="mailto:hello@pixel.build">hello@pixel.build</a> if you have any
        questions or inquiries.
      </p>
    </main>
  );
}
