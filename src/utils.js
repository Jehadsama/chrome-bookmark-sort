import { flat, group } from 'radash';

export const flatTree = (tree = []) => {
    if (!(tree?.length || 0)) return [];
    return flat(tree.map(({ id, parentId, title, url, children }) => (
        [{
            parentId,
            id,
            title,
            url,
        }, ...flatTree(children)]
    )))
}

export const groupBookmark = (bookmarks) => group(bookmarks, ({ parentId }) => parentId)