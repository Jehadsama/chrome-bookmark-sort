import { flat, group } from 'radash';


const flatTree = (tree = []) => {
    if (!tree.length) return [];

    return flat(tree.map(({ id, parentId, title, url, children }) => (
        [{
            parentId,
            id,
            title,
            url,
        }, ...flatTree(children)]
    )))
}


const groupBookmark = (bookmarks) => group(bookmarks, ({ parentId }) => parentId)

const initTree = () => {
    chrome.bookmarks.getTree((tree) => {
        let bookmarks = groupBookmark(flatTree(tree[0].children[0]));
        console.log(bookmarks);
        // ...
    });

}


// Add click event listeners to the buttons
document.getElementById('sortButton').addEventListener('click', initTree);