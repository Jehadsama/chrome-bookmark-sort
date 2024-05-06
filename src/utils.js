import { flat } from 'radash';

export const flatTree = (tree = []) => {
  if (!(tree?.length || 0)) {
    return [];
  }
  return flat(
    tree.map(({ id, parentId, title, url, children }) => [
      {
        parentId,
        id,
        title,
        url,
      },
      ...flatTree(children),
    ])
  );
};

export const sortBookmarks = (bookmarks) => {
  if (!bookmarks?.length) {
    return [];
  }
  return bookmarks.sort((pre, next) => {
    const { parentId: preParentId, title: preTitle, url: preUrl } = pre;
    const { parentId: nextParentId, title: nextTitle, url: nextUrl } = next;

    if (preParentId === nextParentId) {
      return (
        Number(!!preUrl) - Number(!!nextUrl) ||
        preTitle.localeCompare(nextTitle)
      );
    }

    return Number(preParentId) - Number(nextParentId);
  });
};
