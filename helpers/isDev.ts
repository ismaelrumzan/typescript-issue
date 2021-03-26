export default function () {
  const hostname = window.location.hostname.split(".")[0];
  return Boolean(hostname === "dev" || hostname === "localhost");
}
