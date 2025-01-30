export const fetchData = async () => {
  const query = {
    query: [
      {
        code: "Innvandringsgrunn",
        selection: { filter: "item", values: ["00"] },
      },
      {
        code: "Lanbakgrunn",
        selection: {
          filter: "item",
          values: ["1", "2", "3", "4", "5", "6", "8", "9"],
        },
      },
      {
        code: "Tid",
        selection: {
          filter: "item",
          values: ["2018", "2019", "2020", "2021", "2022"],
        },
      },
    ],
    response: { format: "json-stat2" },
  };

  try {
    const response = await fetch("https://data.ssb.no/api/v0/no/table/07113/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
