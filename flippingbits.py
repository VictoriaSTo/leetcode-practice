def flippingBits(n):
    # Write your code here
    base_2 = "{0:032b}".format(n)
    base_2_flipped = ''
    
    for i in base_2:
        base_2_flipped += str(int(not bool(int(i))))
        
    return int(base_2_flipped, 2)