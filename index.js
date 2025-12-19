// Function to display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  // Clear the list first in case we call this multiple times
  postList.innerHTML = '';

  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    // Set content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append to li
    li.appendChild(title);
    li.appendChild(body);

    // Append li to ul
    postList.appendChild(li);
  });
}

// Function to get a random subset of posts
function getRandomPosts(allPosts, numberOfPosts) {
  const shuffled = allPosts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfPosts);
}

// Async function to fetch posts from API
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    // Get 5 random posts
    const randomPosts = getRandomPosts(posts, 5);

    // Display the random posts
    displayPosts(randomPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the fetchPosts function to load posts when page loads
fetchPosts();
