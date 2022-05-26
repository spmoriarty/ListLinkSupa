// import functions and grab DOM elements
import { renderPosts } from './render.js';
import { fetchPost } from './fetch-utils.js';



const container = document.getElementById('post-container');




async function onLoad() {
    const data = await fetchPost();
    for (let post of data) {
        const postDiv = renderPosts(post);
        container.append(postDiv);
    }
  
}

onLoad();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
