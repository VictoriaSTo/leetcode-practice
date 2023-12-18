arr = [[1,20], [9,19]]

def countNumbers(arr):
  for i in arr:
    totalUniqueNums = []
    # print(i)
    for j in range(i[0], i[1]+1):
      num = j
      visited = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      # print(num)
      
      while(num):
        if visited[num%10] == 1:
          break
        visited[num%10] = 1
        num = int(num / 10)
        
        if num == 0:
          totalUniqueNums.append(num)
    print(len(totalUniqueNums))


countNumbers(arr)