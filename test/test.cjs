const { flat, group } = require('radash');
const tree = require("./bookmarks_example");

const flatTree = (tree = []) => {
    if (!tree?.length) return [];
    return flat(tree.map(({ id, parentId, title, url, children }) => [{
        parentId: Number(parentId),
        id: Number(id),
        title,
        url,
    }, ...flatTree(children)]))
}

const groupBookmark = (bookmarks) => group(bookmarks, ({ parentId }) => parentId)


const run = () => {
    // console.log(JSON.stringify(tree[0].children[0], null, 2))

    console.log("=========")
    const res1 = flatTree(tree[0].children).sort((pre, next) => {

        if (pre.parentId === next.parentId) {
            return pre.id - next.id;
        }

        return pre.parentId - next.parentId;
    });
    console.log(JSON.stringify(res1, null, 2));
}

run();

