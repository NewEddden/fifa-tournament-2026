async function fetchData() {
  try {
    let response = await fetch("./js/players.json");
    if (!response.ok) {
      throw new Error("Could not retrieve data");
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

let playerData = await fetchData();
console.log(playerData);
