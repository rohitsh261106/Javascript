class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insert(root, value) {
  if (!root) {
    return new TreeNode(value);
  }

  if (value < root.data) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

let root = null;

root = insert(root, 10);
root = insert(root, 5);
root = insert(root, 15);
root = insert(root, 2);
root = insert(root, 7);