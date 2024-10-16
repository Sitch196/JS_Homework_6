class DataHandler {
  constructor(data = []) {
    this.data = data;
  }

  async fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const result = await response.json();

      this.data = result;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  listPosts() {
    return this.data.sort((a, b) => {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
  }

  async getPost(id) {
    if (typeof id !== "number") {
      throw new Error("Id must be a number");
    }

    const post = this.data.find((post) => post.id === id);

    if (!post) {
      throw new Error("Post was not found");
    }

    return post;
  }

  async clearPosts() {
    this.data = [];

    console.log("All posts have been deleted");
  }
}
