export async function FetchCountriesData(filter: string): Promise<string[]> {
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: filter.length
        ? `{
                  countries(filter: {code: {in: "${filter}"}}){
                    name,
                    code
                  }
                }`
        : `{
                  countries{
                    name,
                    code
                  }
                
                }`,
    }),
  });
  const data = await response.json();
  return data.data.countries;
}
