import { flat, group } from 'radash';

export const flatTree = (tree = []) => {
  if (!(tree?.length || 0)) return [];
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

export const groupBookmarks = ({ bookmarks, key, isEmptyValue = false }) =>
  group(bookmarks, (bookmark) =>
    isEmptyValue ? !!bookmark[key] : bookmark[key]
  );

export const sortBookmarks = (bookmarks) => {
  if (!bookmarks?.length) return [];
  return bookmarks.sort((pre, next) => {
    if (pre.parentId === next.parentId)
      return pre.title.localeCompare(next.title);
    return Number(pre.parentId) - Number(next.parentId);
  });
};
