const Node = require('./trees').Node;
const BinaryTree = require('./trees').BinaryTree;
const BinarySearchTree = require('./trees').BinarySearchTree;

describe('tree',()=>{

    test('Instantiate an empty tree',()=>{
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    })

    test('Instantiate a tree with a single root node',()=>{
        let tree = new BinaryTree();
        let head = new Node(1);
        tree.root=head;
        expect(tree.root.value).toBe(1);
        expect(tree.root.right).toBe(null);
        expect(tree.root.left).toBe(null);
    })
    test('Add a left child and right child to a single root node',()=>{
      
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(15);
        expect(tree.root.value).toBe(10);
        expect(tree.root.right.value).toBe(15);
        expect(tree.root.left.value).toBe(5);
    })
    test('Return a collection ',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.preOrder()).toEqual([10,5,3,7,15,13,17]);
        expect(tree.inOrder()).toEqual([3,5,7,10,13,15,17]);
        expect(tree.postOrder()).toEqual([3,7,5,13,17,15,10]);
    })
    test('Inorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.inOrder()).toEqual([3,5,7,10,13,15,17]);
    })
    test('Postorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.postOrder()).toEqual([3,7,5,13,17,15,10]);
    })
})


describe('Get max node', () => {

    let tree = new BinaryTree();
    let tree1 = new Node(1);
    let tree2 = new Node(0);
    let tree3 = new Node(2);
    let tree4 = new Node(15);
    let tree5 = new Node(5);
    let tree6 = new Node(70);
    let tree7 = new Node(35);
    let tree8 = new Node(7);
    let tree9 = new Node(1);

    tree.root = tree1;
    tree.root.left = tree2;
    tree.root.right = tree3;
    tree.root.left.left = tree4;
    tree.root.left.right = tree5;
    tree.root.right.left = tree6;
    tree.root.right.right = tree7;
    tree.root.left.left.left = tree8;
    tree.root.left.left.right = tree9;
    test('max node value in a binary tree',()=>{
        expect(tree.getMax()).toBe(70);
    })
    test('returns an error statement for an empty tree',()=>{
        let tree2 = new BinaryTree();
        expect(tree2.getMax()).toBe('cant get max of an empty tree');
    })
})





