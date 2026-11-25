// Vercel Routing Middleware: password gate for /christmas.
// Runs on Vercel before any file in public/christmas is served,
// so the page and the drawings are only sent after the right password.
// Set the password in Vercel: Project → Settings → Environment Variables → CHRISTMAS_PASSWORD.

const COOKIE = "xmas_gift";
const MAX_AGE = 60 * 60 * 24 * 60; // stay unlocked for 60 days

const enc = new TextEncoder();

// The cookie holds a signature derived from the password, never the password itself.
// Changing the password logs everyone out.
async function sign(secret) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode("christmas-gift-v1")));
  return btoa(String.fromCharCode(...sig)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function same(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function readCookie(request, name) {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return "";
}

export default async function middleware(request) {
  const password = process.env.CHRISTMAS_PASSWORD;
  if (!password) return gate({ notReady: true });

  const expected = await sign(password);

  if (request.method === "POST") {
    let guess = "";
    try { guess = String((await request.formData()).get("password") || ""); } catch {}
    if (guess && same(await sign(guess), expected)) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: "/christmas/",
          "Set-Cookie": `${COOKIE}=${expected}; Path=/christmas; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
          "Cache-Control": "no-store",
        },
      });
    }
    await new Promise(r => setTimeout(r, 800)); // slow down guessing
    return gate({ wrong: true });
  }

  if (same(readCookie(request, COOKIE), expected)) return; // unlocked: serve the page as normal
  return gate({});
}

export const config = { matcher: ["/christmas", "/christmas/:path*"] };

function gate({ wrong = false, notReady = false }) {
  const message = notReady
    ? "This gift isn't ready yet. Come back soon."
    : wrong
      ? "That's not it. Try again?"
      : "There's a gift here for you.";
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Christmas</title>
<link rel="icon" href="/logo.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#E6D2B8; --ink:#3B2A20; --muted:#7A5E4A; --glow:rgba(255,214,150,.75); --vignette:rgba(110,62,28,.32);
  --field:#F6EBDD; --line:#D6BFA2; --accent:#B3202E; --accent-ink:#FFF4E8; --error:#9E1B27;
  color-scheme:light;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --bg:#1F1612; --ink:#F1E4D4; --muted:#B59E88; --glow:rgba(255,160,80,.2); --vignette:rgba(0,0,0,.6);
    --field:#2C211B; --line:#4A382D; --accent:#C42A38; --accent-ink:#FFF4E8; --error:#FF8A8E;
    color-scheme:dark;
  }
}
:root[data-theme="dark"]{
  --bg:#1F1612; --ink:#F1E4D4; --muted:#B59E88; --glow:rgba(255,160,80,.2); --vignette:rgba(0,0,0,.6);
  --field:#2C211B; --line:#4A382D; --accent:#C42A38; --accent-ink:#FFF4E8; --error:#FF8A8E;
  color-scheme:dark;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0; display:grid; place-items:center; padding:16px;
  background-color:var(--bg);
  background-image:
    radial-gradient(ellipse 55% 48% at 50% 42%, var(--glow), transparent 72%),
    radial-gradient(ellipse at center, transparent 45%, var(--vignette) 100%);
  color:var(--ink);
  font-family:"Patrick Hand","Comic Neue","Segoe Print","Bradley Hand",system-ui,sans-serif;
}
form{width:100%; max-width:320px; display:flex; flex-direction:column; align-items:center; gap:14px; text-align:center}
.gift{width:88px; height:88px; filter:drop-shadow(0 14px 14px rgba(60,25,8,.35))}
h1{margin:0; font-weight:400; font-size:1.7rem}
p{margin:0; font-size:1.2rem; color:var(--muted)}
p.wrong{color:var(--error)}
label{position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0)}
input{
  width:100%; font:inherit; font-size:1.2rem; color:var(--ink); background:var(--field);
  border:1.5px solid var(--line); border-radius:999px; padding:.55rem 1.1rem; text-align:center;
}
input:focus-visible{outline:2px solid var(--ink); outline-offset:2px}
button{
  font:inherit; font-size:1.2rem; color:var(--accent-ink); background:var(--accent);
  border:0; border-radius:999px; padding:.5rem 1.6rem; cursor:pointer;
}
button:focus-visible{outline:2px solid var(--ink); outline-offset:3px}
</style>
</head>
<body>
<form method="post" action="/christmas/">
  <svg class="gift" viewBox="0 0 100 100" aria-hidden="true">
    <rect x="6" y="6" width="88" height="88" rx="2" fill="#B3202E"/>
    <rect x="44" y="6" width="12" height="88" fill="#6A0F18" opacity=".85"/>
    <rect x="6" y="44" width="88" height="12" fill="#6A0F18" opacity=".85"/>
    <g fill="#E6C15C" stroke="#8A6A1E" stroke-width="1.6">
      <ellipse cx="40" cy="40" rx="11" ry="7" transform="rotate(45 40 40)"/>
      <ellipse cx="60" cy="40" rx="11" ry="7" transform="rotate(-45 60 40)"/>
      <ellipse cx="40" cy="60" rx="11" ry="7" transform="rotate(-45 40 60)"/>
      <ellipse cx="60" cy="60" rx="11" ry="7" transform="rotate(45 60 60)"/>
      <rect x="44" y="44" width="12" height="12" rx="2"/>
    </g>
  </svg>
  <h1>Merry Christmas</h1>
  <p class="${wrong ? "wrong" : ""}" role="${wrong ? "alert" : ""}">${message}</p>
  ${notReady ? "" : `<label for="pw">Password</label>
  <input id="pw" name="password" type="password" placeholder="Password" autocomplete="current-password" required autofocus>
  <button type="submit">Unlock</button>`}
</form>
</body>
</html>`;
  return new Response(html, {
    status: notReady ? 503 : wrong ? 401 : 200,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}
