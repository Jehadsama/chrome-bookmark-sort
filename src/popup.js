import { flatTree, groupBookmark } from "./utils";

const initTree = () => {
    chrome.bookmarks.getTree((tree) => {
        console.log(tree[0].children[0]);
        let bookmarks = groupBookmark(flatTree(tree[0].children[0]));
        console.log(bookmarks);
        // ...
    });

}


// Add click event listeners to the buttons
document.getElementById('sortButton').addEventListener('click', initTree);
