export async function fetchData() {
    const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles?limit=10&offset=10');
    const data = await response.json();
    return data.entries;
  }
  