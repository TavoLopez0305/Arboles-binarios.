class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function areIdenticalTrees(treeA, treeB) {
    if (treeA === null && treeB === null) {
      return true;
    }
    if (treeA === null || treeB === null) {
      return false;
    }
  
    return (
      treeA.value === treeB.value &&
      areIdenticalTrees(treeA.left, treeB.left) &&
      areIdenticalTrees(treeA.right, treeB.right)
    );
  }

  function cloneBinaryTree(root) {
    if (root === null) {
      return null;
    }
  
    const newTree = new TreeNode(root.value);
    newTree.left = cloneBinaryTree(root.left);
    newTree.right = cloneBinaryTree(root.right);
  
    return newTree;
  }

  function printNodesAtLevel(root, level) {
    if (root === null) {
      return;
    }
    if (level === 0) {
      console.log(root.value);
    } else {
      printNodesAtLevel(root.left, level - 1);
      printNodesAtLevel(root.right, level - 1);
    }
  }

  function countLeaves(root) {
    if (root === null) {
      return 0;
    }
    if (root.left === null && root.right === null) {
      return 1;
    }
    return countLeaves(root.left) + countLeaves(root.right);
  }
  