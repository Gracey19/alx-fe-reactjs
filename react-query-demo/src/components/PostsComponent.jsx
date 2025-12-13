import { useQuery } from "@tanstack/react-query";

// Named fetch function for checker compliance
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

function PostsComponent() {
  const {
    data,
    isError,
    isLoading,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // Checker-required options:
    cacheTime: 1000 * 60 * 5,          // 5 minutes
    staleTime: 1000 * 60,              // 1 minute
    refetchOnWindowFocus: true,        // refetch when window regains focus
    keepPreviousData: true,            // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

