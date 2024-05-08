import { useQuery } from "@tanstack/react-query";

const useFetchData = (apiUrl, dependencies = []) => {
  const { isFetching, error, data, refetch } = useQuery({
    queryKey: dependencies,
    queryFn: () => fetch(apiUrl).then((res) => res.json()),
  });
  return { isFetching, error, data, refetch };
};
export default useFetchData;
