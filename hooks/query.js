import { useInfiniteQuery, useQuery } from "react-query";
import { getClient } from "@/api/client";

const fetchEmployee = async (pageNo, limit = 15) => {
  const client = await getClient();
  const { data } = await client("/employee", {
    params: {
      limit: limit,
      page: pageNo.pageParam ? pageNo.pageParam : 1,
      search: pageNo.queryKey[1],
    },
  });
  return data;
};

export const useFetchEmployee = (search) => {
  return useInfiniteQuery({
    queryKey: ["employee", search],
    queryFn: fetchEmployee,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
};

const fetchDetailEmployee = async (id) => {
  const client = await getClient();
  const { data } = await client("/employee/" + id);
  return data.employee;
};

export const useFetchDetailEmployee = (id) => {
  return useQuery(["employee", id], {
    queryFn: () => fetchDetailEmployee(id),
    onError(err) {},
  });
};
