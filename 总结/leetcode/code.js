链表题：
206 反转一个单链表
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};


24. 两两交换链表中的节点
const swapPairs = (head) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const next = head.next; // 临时保存head.next，因为head.next待会要改变
    head.next = next.next;
    next.next = head;
    prev.next = next;

    prev = head;      // 指针更新
    head = head.next; // 指针更新
  }
  return dummy.next;
};

141, 给定一个链表，判断链表中是否有环。
var hasCycle = (head) => {
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true); // 存的是节点的地址引用，而不是节点值
    head = head.next;
  }
  return false;
};


var hasCycle = (head) => {
  let fast = head;
  let slow = head;
  while (fast) {
    if (fast.next == null) return false;
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
}

142： 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

var detectCycle = function (head) {
  let map = new Map()
  while (head) {
    if (!map.has(head)) {
      map.set(head, true)
    } else {
      return head
    }
    head = head.next
  }
  return null
}

25，K个一组翻转链表（困难）

20，有效的括号(给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。)

var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);
  const stk = [];
  s.split('').forEach(ch => {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    }
    else {
      stk.push(ch);
    }
  });
  return !stk.length;
};


232: 用栈实现队列
class MyQueue {
  constructor() {
    this.inStack = []
    this.outStack = []
  }
  push(x) {
    this.inStack.push(x)
  }
  checkOutStack() {
    if (!this.outStack.length) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
      }
    }
  }
  pop() {
    this.checkOutStack()
    return this.outStack.pop()
  }
  peek() {
    this.checkOutStack()
    return this.outStack[this.outStack.length - 1]
  }
  empty() {
    return (!this.outStack.length && !this.inStack.length)
  }
}

用队列实现栈

class MyStack {
  constructor() {
    this.queue = []
  }
  push(x) {
    this.queue.push(x)
  }
  pop() {
    let queue1 = []
    while (this.queue.length > 1) {
      queue1.push(this.queue.shift())
    }
    let res = this.queue.shift()
    this.queue = queue1
    return res
  }
  top() {
    return this.queue[this.queue.length - 1]
  }
  empty() {
    return (!this.queue.length)
  }
}


703 数据流中的第 K 大元素

class KthLargest {
  constructor(k, nums) {
    this.nums = nums.sort((a, b) => b - a)
    this.k = k
  }
  add(x) {
    this.nums.push(x)
    return this.nums.sort((a, b) => b - a)[this.k - 1]
  }
}


239 滑动窗口最大值（待研究）



242 有效的字母异位词

sort方法 时间复杂度(NlogN)
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

1, 两数之和
var twoSum = function (nums, target) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let anotherOne = target - nums[i];
    if (map.has(anotherOne) && map.get(anotherOne) !== i) {

      result.push(i);
      result.push(map.get(anotherOne))
      break;
    }
  }

  return result
};

15，三数之和：
排序加双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重
        while (L < R && nums[R] == nums[R - 1]) R--; // 去重
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return ans;
};

18，四数之和（暂没研究）

98 验证二叉搜索树
时间复杂度 O(n)
const helper = (root, lower, upper) => {
  if (root === null) {
    return true
  }
  if (root.val >= upper || root.val <= lower) {
    return false
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity)
}

236  二叉数的公共祖先

const lowestCommonAncestor = (root, p, q) => {
  if (root == null) { // 遇到null，返回null 没有LCA
    return null;
  }
  if (root == q || root == p) { // 遇到p或q，直接返回当前节点
    return root;
  }
  // 非null 非q 非p，则递归左右子树
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 根据递归的结果，决定谁是LCA
  if (left && right) {
    return root;
  }
  if (left == null) {
    return right;
  }
  return left;
};

235. 二叉搜索树的最近公共祖先

const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};

const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return root;
};

50，Pow(x, n) 计算x的n次幂函数
时间复杂度: O(logN)

var myPow = (x, n) => {
  if (n === 0) return 1
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2) {
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n / 2)
}

169 多数元素

因为确定存在，所以排序后的中间数就是 O(nlogN)
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

循环一遍利用map来做，O(n)
var majorityElement = function (nums) {
  let len = nums.length
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
      if (map.get(nums[i]) > len / 2) {
        return nums[i]
      }
    } else {
      map.set(nums[i], map.get(nums[i]) + 1)
      if (map.get(nums[i]) > len / 2) {
        return nums[i]
      }
    }
  }
};

122 买卖股票的最佳时机 II

贪心算法 O(N)

let maxProfit = (prices) => {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
}

102 二叉树的层序遍历(给你一个二叉树，请你返回其按 层序遍历 得到的节点值)给你一个二叉树，请你返回其按 层序遍历 得到的节点值

dfs   O(n)

var levelOrder = function (root) {
  if (!root) return []
  let res = []
  dfs(root, 0, res)
  return res
};

function dfs(root, step, res) {
  if (root) {
    if (!res[step]) res[step] = []
    res[step].push(root.val)
    dfs(root.left, step + 1, res)
    dfs(root.right, step + 1, res)
  }
}

bfs  O(n)

var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length > 0) {
    let len = queue.length
    let arr = []
    while (len) {
      let node = queue.shift()
      arr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len--
    }
    res.push(arr)
  }
  return res
};

104 二叉树的最大深度
BFS：O(n)

const maxDepth = (root) => {
  if (root === null) return 0
  const queue = [root]
  let depth = 1
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len--
    }
    if (queue.length) depth++
  }
  return depth
}

DFS O(n)
var maxDepth = function (root) {
  if (!root) {
    return 0
  } else {
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1;
  }
}

111  二叉树的最小深度
BFS:
const minDepth = (root) => {
  if (root === null) return 0
  let queue = [root]
  let depth = 1
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let node = queue.shift()
      if (node.left === null && node.right === null) {
        return depth
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len--
    }
    depth++
  }
}

DFS

const minDepth = (root) => {
  if (root == null) {            // 递归到null节点，返回高度0
    return 0;
  }
  if (root.left && root.right) { // 左右子树都存在，当前节点的高度1+左右子树递归结果的较小值
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {        // 左子树存在，右子树不存在
    return 1 + minDepth(root.left);
  } else if (root.right) {       // 右子树存在，左子树不存在
    return 1 + minDepth(root.right);
  } else {                       // 左右子树都不存在，光是当前节点的高度1
    return 1;
  }
};


22  括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

var generateParenthesis = function (n) {
  const res = [];

  const dfs = (lRemain, rRemain, str) => { // 左右括号所剩的数量，str是当前构建的字符串
    if (str.length == 2 * n) { // 字符串构建完成
      res.push(str);           // 加入解集
      return;                  // 结束当前递归分支
    }
    if (lRemain > 0) {         // 只要左括号有剩，就可以选它，然后继续做选择（递归）
      dfs(lRemain - 1, rRemain, str + "(");
    }
    if (lRemain < rRemain) {   // 右括号比左括号剩的多，才能选右括号
      dfs(lRemain, rRemain - 1, str + ")"); // 然后继续做选择（递归）
    }
  };

  dfs(n, n, ""); // 递归的入口，剩余数量都是n，初始字符串是空串
  return res;
};

51 N皇后（困难，暂无研究）

const solveNQueens = (n) => {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const cols = new Set();  // 列集，记录出现过皇后的列
  const diag1 = new Set(); // 正对角线集
  const diag2 = new Set(); // 反对角线集
  const res = [];

  const helper = (row) => {
    if (row == n) {
      const stringsBoard = board.slice();
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('');
      }
      res.push(stringsBoard);
      return;
    }
    for (let col = 0; col < n; col++) {
      // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = 'Q';  // 放置皇后
        cols.add(col);          // 记录放了皇后的列
        diag1.add(row + col);   // 记录放了皇后的正对角线
        diag2.add(row - col);   // 记录放了皇后的负对角线
        helper(row + 1);
        board[row][col] = '.';  // 撤销该点的皇后
        cols.delete(col);       // 对应的记录也删一下
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  };
  helper(0);
  return res;
};

36 有效的数独

var isValidSudoku = function (board) {
  // 三个方向判重
  let rows = {};
  let columns = {};
  let boxes = {};
  // 遍历数独
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num != '.') {
        // 子数独序号
        let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
        if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) {
          return false;
        }
        // 以各自方向 + 不能出现重复的数字 组成唯一键值，若出现第二次，即为重复
        rows[i + '-' + num] = true;
        columns[j + '-' + num] = true;
        boxes[boxIndex + '-' + num] = true;
      }
    }
  }
  return true;
};

37 解数独（困难，暂不研究）

69 x的平方根
二分查找 O(logN)
const mySqrt = (x) => {
  if (x < 2) return x;
  let left = 1;
  let right = x;
  while (left + 1 < right) {
    let mid = (left + right) >>> 1
    if (mid === x / mid) {
      return mid
    } else if (x < mid * mid) {
      right = mid
    } else {
      left = mid
    }
  }
  return right * right > x ? left : right
}

const mySqrt = (x, y) => {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = (left + right) >>> 1
    if (mid === x / mid) {
      return mid
    } else if (mid * mid > x) {
      right = mid
    } else {
      left = mid
    }
    if (right - left < y) {
      return mid
    }
  }
}


208 实现一个字典树（暂没研究）

class Trie {
  constructor() {
    this.root = Object.create(null)
  }
  insert(word) {
    let node = this.root
    for (const c of word) {
      if (!node[c]) node[c] = Object.create(null)
      node = node[c]
    }
    node.isWord = true
  }
  traverse(word) {
    let node = this.root
    for (const c of word) {
      node = node[c]
      if (!node) return null
    }
    return node
  }
  search(word) {
    const node = this.traverse(word)
    return !!node && !!node.isWord
  }
  startsWith(prefix) {
    return !!this.traverse(prefix)
  }
}

212 单词搜索II（困难，暂不研究）

位运算：
x & 1 === 1 or == 0 判断奇偶(x % 2 == 1)
x = x & (x - 1)  清零最低位的1
x & -x  得到最低位的1

191 位1的个数

var hammingWeight = (n) => {
  let count = 0
  while (n !== 0) {
    n = n & (n - 1)
    count++
  }
  return count
}

var hammingWeight = (n) => {
  return n.toString(2).replace(/0/g, '').length
}

231 2的幂   判断一个整数是否是2的幂次方

// 大于零且二进制位中只有一个1
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1))s === 0
}


var isPowerOfTwo = function (n) {
  while (n > 1) {
    n /= 2;
  }
  if (n == 1) {
    return true;
  } else {
    return false;
  }
};


338 比特位计数

var countBits = function (num) {
  let result = []
  let n = 0
  while (n <= num) {
    let count = 0;
    let y = n
    while (y !== 0) {
      y = y & (y - 1)
      count++
    }
    result.push(count)
    n++
  }
  return result
};


70 爬楼梯 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
有n个台阶
dp[n] 到第n阶的总走法个数

var climbStairs = function (n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

120  三角形最小路径和   给定一个三角形 triangle ，找出自顶向下的最小路径和。
dp[i][j]代表到这个位置的最小路径和

var minimumTotal = function (triangle) {
  let h = triangle.length;
  let dp = new Array(h)
  for (let i = 0; i < h; i++) {
    dp[i] = new Array(triangle[i].length)
  }
  for (let i = h - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === h - 1) {
        dp[i][j] = triangle[i][j]
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
      }
    }
  }
  return dp[0][0]
}


152 乘积最大子数组
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组
（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
时间复杂度 O(n)


var maxProduct = function (nums) {
  // dp[i]表示以nums[i]结尾的连续子数组的最大乘积
  // dp[i] = Math.max(nums[i], nums[i] * F(i-1)), F(i)表示以nums[i]结尾的某序列的乘积
  // if (nums[i] < 0) 希望F(i-1)越小越好
  // if (nums[i] > 0) 希望F(i-1)越大越好
  // 定义 dp_max[i] 表示以nums[i]结尾的连续子数组最大乘积
  // 定义 dp_min[i] 表示以nums[i]结尾的连续子数组最小乘积
  let maxMul = -Infinity;
  const dp_max = Array(nums.length);
  const dp_min = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp_max[i] = dp_min[i] = nums[i];
    } else {
      if (nums[i] === 0) {
        dp_max[i] = dp_min[i] = 0;
      } else if (nums[i] > 0) {
        dp_max[i] = Math.max(nums[i], nums[i] * dp_max[i - 1]);
        dp_min[i] = Math.min(nums[i], nums[i] * dp_min[i - 1]);
      } else {
        dp_max[i] = Math.max(nums[i], nums[i] * dp_min[i - 1]);
        dp_min[i] = Math.min(nums[i], nums[i] * dp_max[i - 1]);
      }
    }
  }
  // console.log(dp_max);
  // console.log(dp_min);
  return Math.max.apply(this, dp_max);
};


300 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

dp[i] 表示以 nums[i] 结尾的最长上升子序列；
var lengthOfLIS = (nums) => {
  let len = nums.length;
  if (!len) return 0;
  let dp = new Array(nums.length).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}


322 零钱兑换
dp[i]: 表示总金额为 i 的时候最优解法的硬币数

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

72  编辑距离
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。 插入，删除和替换操作

定义 dp[i][j]的含义为：当字符串 word1 的长度为 i，字符串 word2 的长度为 j 时，
将 word1 转化为 word2 所使用的最少操作次数为 dp[i][j]

var minDistance = function (word1, word2) {
  let n1 = word1.length;
  let n2 = word2.length;
  let dp = new Array(n1 + 1)
  for (let i = 0; i < n1 + 1; i++) {
    dp[i] = new Array(n2 + 1).fill(0)
  }
  // dp[0][0...n2]的初始值
  for (let j = 1; j <= n2; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }
  // dp[0...n1][0] 的初始值
  for (let i = 1; i <= n1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  // 通过公式推出 dp[n1][n2]
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[n1][n2];
};


200 岛屿的数量
DFS
遍历所有的点，遇到为1的点，将它以及其四周的点都清为0。直到遇到边界或者为0的点。这个时候岛屿数 + 1

var numIslands = function (grid) {
  let res = 0
  let rows = grid.length;
  if (rows === 0) return 0
  let cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        helper(grid, i, j, rows, cols)
        res++
      }
    }
  }
  return res;
}


function helper(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') return;
  grid[i][j] = '0'
  helper(grid, i - 1, j, rows, cols)
  helper(grid, i, j - 1, rows, cols)
  helper(grid, i + 1, j, rows, cols)
  helper(grid, i, j + 1, rows, cols)
}


547 省份的数量（待研究）

146 LRU 缓存机制

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (val === undefined) return -1;

    this.map.delete(key); // 因为被用过一次，原有位置删除
    this.map.set(key, val); // 放入最下面表示最新使用
    return val;
  }

  put(key, val) {
    if (this.map.has(key)) this.map.delete(key); // 如果有，删除

    this.map.set(key, val); // 放到最下面表示最新使用

    if (this.map.size > this.capacity) {
      // 这里有个知识点
      // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
      // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
      this.map.delete([...this.map.keys()][0])
    }
  }
}