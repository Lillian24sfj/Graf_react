import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FaktaData() {
  const { data, error, isLoading } = useSWR(
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
    fetcher
  );

  if (isLoading)
    return (
      <p className="text-pink-500 font-medium animate-pulse">Loading...</p>
    );
  if (error)
    return (
      <p className="text-red-500 font-semibold">
        Failed to load fact. Please try again.
      </p>
    );

  return (
    <div className="bg-white border border-pink-200 rounded-lg p-6 shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Random Fact</h2>
      <p className="text-gray-700 text-lg">{data?.text || "No fact available."}</p>
    </div>
  );
}

export default FaktaData;
