
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Не вдалося завантажити публікації");
  }

  const posts: Post[] = await response.json();

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Список публікацій</h1>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}
