def lonelyinteger(a):
    # Write your code here
    a.sort()

    for i in range(0, len(a)-1, 2):
        if a[i] != a[i+1]:
            return a[i]
        
    return a[-1]