const VITE_BASE_URL = "http://localhost:8000/v2";

export default async function fetchData(url = "/top-headlines") {
  return await fetch(VITE_BASE_URL + url)
    .then((res) => res.json())
    .then((res) => res.articles || res.result)
    .catch((err) => {
      console.log("err", err);
    });
}
