链表题：
206 反转一个单链表
var reverseList = function(head) {
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

141,给定一个链表，判断链表中是否有环。
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

var detectCycle = function(head) {
  let map = new Map()
  while(head) {
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

var isValid = function(s) {
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
      while(this.inStack.length) {
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
      this.nums = nums.sort((a,b) => b - a)
      this.k = k
  }
  add(x) {
      this.nums.push(x)
      return this.nums.sort((a,b) => b - a)[this.k-1]
  }
}


239 滑动窗口最大值（待研究）



242 有效的字母异位词

sort方法 时间复杂度(NlogN)
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

1,两数之和
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
 var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len ; i++) {
      if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
      if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
      let L = i+1;
      let R = len-1;
      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];
          if(sum == 0){
              ans.push([nums[i],nums[L],nums[R]]);
              while (L<R && nums[L] == nums[L+1]) L++; // 去重
              while (L<R && nums[R] == nums[R-1]) R--; // 去重
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
var isValidBST = function(root) {
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

50，Pow(x,n) 计算x的n次幂函数
时间复杂度:O(logN)

var myPow = (x,n) => {
  if (n === 0) return 1
  if (n < 0) {
    return 1/myPow(x, -n)
  }
  if (n%2) {
    return x*myPow(x, n-1)
  }
  return myPow(x*x,n/2) 
}

169 多数元素 

因为确定存在，所以排序后的中间数就是 O(nlogN)
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

循环一遍利用map来做，O(n)
var majorityElement = function(nums) {
  let len = nums.length
  let map = new Map()
  for(let i = 0; i < len; i++) {
      if (!map.has(nums[i])) {
          map.set(nums[i], 1)
          if(map.get(nums[i]) > len/2) {
              return nums[i]
          }            
      } else {
          map.set(nums[i], map.get(nums[i]) + 1)
          if(map.get(nums[i]) > len/2) {
              return nums[i]
          }
      }
  }
};

122 买卖股票的最佳时机 II  

贪心算法 O(N)

let maxProfit = (prices)=> {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] > prices[i-1]) {
          profit += prices[i] - prices[i-1]
      }
  }
  return profit
}




