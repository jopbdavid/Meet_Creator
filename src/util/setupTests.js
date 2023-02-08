import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();


it("Returns songs search from spotify API", async (term) => {
    const data = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })})
