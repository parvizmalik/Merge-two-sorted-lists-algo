class Solution:
    def mergeTwoLists(self, a, b):
        if a and b:
            if a.val > b.val:
                a, b = b, a
            a.next = self.mergeTwoLists(a.next, b)
        return a or b

solution = Solution()
result = solution.mergeTwoLists([1,2,3,4], [4,5,6])
print(result)