export const fetchGithubUser = async (username: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`
  );

  if (!res.ok) throw new Error("user not found");

  const data = await res.json();
  // console.log(data);

  return data;
};

/* We'll use the concept 'debounce' so that we wont run the API
after every keystroke, by 'debouncing' there's a wait time before the API
call is made
*/
export const searchGithubUser = async (query: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${query}`
  );

  if (!res.ok) throw new Error("user not found");

  const data = await res.json();
  // console.log(data);

  return data.items;
};
