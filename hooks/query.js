import { useInfiniteQuery, useQuery } from "react-query";
import { getClient } from "@/api/client";

const fetchEmployee = async (param) => {
  const client = await getClient();
  const { data } = await client("/employee", {
    params: {
      limit: 15,
      page: param.pageParam ? param.pageParam : 1,
      search: param.queryKey[1],
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
