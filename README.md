﻿# Merge-two-sorted-lists-algo

Let's consider the following lists:
`list1`: [1, 3, 5, 7]
`list2`: [2, 3, 6, 8, 10]

1. **Initialization**:
We start with `dummy` and `cur` pointing to a new node.
```
dummy/cur -> |  | -> None
list1 -> 1 -> 3 -> 5 -> 7
list2 -> 2 -> 3 -> 6 -> 8 -> 10
```

2. **First iteration**:
We compare `list1` (1) and `list2` (2). Since 1 < 2, `cur.next` will point to `list1`, and then `list1` and `cur` will move to the next node.
```
dummy -> |  | -> 1
cur -> 1
list1 -> 3 -> 5 -> 7
list2 -> 2 -> 3 -> 6 -> 8 -> 10
```

3. **Second iteration**:
We compare `list1` (3) and `list2` (2). Since 3 > 2, `cur.next` will point to `list2`, and then `list2` and `cur` will move to the next node.
```
dummy -> |  | -> 1 -> 2
cur -> 2
list1 -> 3 -> 5 -> 7
list2 -> 3 -> 6 -> 8 -> 10
```

4. **Third iteration**:
Both `list1` and `list2` are now pointing at 3. Since 3 == 3, `cur.next` will point to either, but in our code logic, we choose `list2`. `list2` and `cur` move to the next node.
```
dummy -> |  | -> 1 -> 2 -> 3
cur -> 3
list1 -> 3 -> 5 -> 7
list2 -> 6 -> 8 -> 10
```

5. **Fourth iteration**:
We compare `list1` (3) with `list2` (6). 3 < 6, so `cur.next` points to `list1`. `list1` and `cur` move to the next node.
```
dummy -> |  | -> 1 -> 2 -> 3 -> 3
cur -> 3
list1 -> 5 -> 7
list2 -> 6 -> 8 -> 10
```

Continuing this pattern, we end up with:
```
dummy -> |  | -> 1 -> 2 -> 3 -> 3 -> 5 -> 6 -> 7 -> 8 -> 10
cur -> 10 (last node in merged list)
list1 -> None
list2 -> None (because all nodes have been merged)
```

The code then simply returns `dummy.next` which is the start of our merged list: 1 -> 2 -> 3 -> 3 -> 5 -> 6 -> 7 -> 8 -> 10.

**Edge Cases**:

1. If `list1` or `list2` starts as empty (or becomes empty during merging), the algorithm will handle it gracefully. Say, after a few iterations, if `list1` becomes empty, the remaining nodes of `list2` will simply be appended to the merged list, because of the `if list1 or list2: cur.next = list1 if list1 else list2` part in the code.

2. If both lists are empty from the start, `dummy.next` will be `None`, which is the correct merged empty list. 

For the given solution, the worst-case scenario is that it will go through all nodes in both lists once, making it run in O(n) time, where n is the total number of nodes in both lists combined.
