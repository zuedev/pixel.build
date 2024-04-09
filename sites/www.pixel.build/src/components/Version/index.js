export default function Version(props) {
  let versionString = props?.version || "v0.3.5";

  return (
    <span
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "1rem",
        fontWeight: "900",
      }}
    >
      {versionString}
    </span>
  );
}
