import { flatTree, sortBookmarks } from './utils';

const sortTree = async () => {
  chrome.bookmarks.getTree(async (tree) => {
    let bookmarks = sortBookmarks(flatTree(tree[0].children[0].children));

    let parentId;
    let index = 0;

    bookmarks = bookmarks.map((bookmark) => {
      if (parentId !== bookmark.parentId) {
        index = 0;
        parentId = bookmark.parentId;
      }

      bookmark.index = index;
      index++;
    });

    await Promise.all(
      bookmarks.map(({ id, index }) => chrome.bookmarks.move(id, { index }))
    );
  });
};

// Add click event listeners to the buttons
document.getElementById('sortButton').addEventListener('click', sortTree);
