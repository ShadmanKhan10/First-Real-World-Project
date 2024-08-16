// Import necessary libraries
import axios from "axios";

// Define a function to fetch the data
export async function getServerSideProps() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        posts: [],
      },
    };
  }
}

// Define the page component
function PostsPage({ posts }) {
  return (
    <div>
      <h1 style={{ color: "#fff000" }}>List of Posts</h1>
    </div>
  );
}

// Export the component
export default PostsPage;
