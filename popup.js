// Search the bookmarks when entering the search keyword.
// Get the bookmarks and display them in the popup
chrome.bookmarks.getTree((tree) => {
    console.log(tree);
    const bookmarkList = document.getElementById('bookmarkList');
    displayBookmarks(tree[0].children, bookmarkList);
});

// Recursively display the bookmarks
function displayBookmarks(nodes, parentNode) {
    for (const node of nodes) {
        // If the node is a bookmark, create a list item and append it to the parent node
        if (node.url) {
            const listItem = document.createElement('li');
            listItem.textContent = node.title;
            parentNode.appendChild(listItem);
        }

        // If the node has children, recursively display them
        if (node.children) {
            const sublist = document.createElement('ul');
            parentNode.appendChild(sublist);
            displayBookmarks(node.children, sublist);
        }
    }
}

// Add a bookmark for www.google.com
function sortBookmark() {
    // chrome.bookmarks.create(
    //     {
    //         parentId: '1',
    //         title: 'Google',
    //         url: 'https://www.google.com'
    //     },
    //     () => {
    //         console.log('Bookmark added');
    //         location.reload(); // Refresh the popup
    //     }
    // );
}

// Add click event listeners to the buttons
document.getElementById('sortButton').addEventListener('click', sortBookmark);