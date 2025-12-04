import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const data = {
  name: "Underreacted",
  image: "data:image/png;base64,iVBORw0K...", // truncated
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header name={data.name} image={data.image} />
      <About image={data.image} about={data.about} />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;
