export default function VideoBackground(props) {
  let src = props?.src || "/background.mp4";
  let type = props?.type || "video/mp4";

  return (
    <video
      playsInline
      autoPlay
      muted
      loop
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <source src={src} type={type} />
    </video>
  );
}
