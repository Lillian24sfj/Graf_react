import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.text());
export default function SSBData () {
    

  const { data, error } = useSWR(
    "https://data.ssb.no/api/v0/dataset/49577.csv?lang=no",
    fetcher
  );

  if (error) return <p>Kunne ikke laste data...</p>;
  if (!data) return <p>Laster...</p>;

  const rows = data.split("\n").slice(1).map((row) => {
    const [region, år, statistikkvariabel] = row.split(";");
    return { region, år, statistikkvariabel };
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Region</th>
          <th>År</th>
          <th>Statistikkvariabel</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td>{row.region}</td>
            <td>{row.år}</td>
            <td>{row.statistikkvariabel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

