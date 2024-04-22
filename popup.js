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

function sortBookmark() {
    chrome.bookmarks.getTree((tree) => {
        const bookmarkList = document.getElementById('bookmarkList');
        displayBookmarks(tree[0].children, bookmarkList);
    });
}

// Add click event listeners to the buttons
document.getElementById('sortButton').addEventListener('click', sortBookmark);