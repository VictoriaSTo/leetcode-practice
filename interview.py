expressions = ['<<>>', '<>', '<<>', '>']
maxReplacements = [0, 2, 0, 1]

def balancedOrNot(expressions, maxReplacements):
    result = []
    
    for i in range(len(expressions)):
        expression = expressions[i]
        replacement = maxReplacements[i]
        unmatchedCount = 0
        balanced = True
        
        for j in range(len(expression)):
            if expression[j] == '<':
                unmatchedCount+=1
            elif expression[j] == '>':
                unmatchedCount -=1
            
        if unmatchedCount != 0 and replacement < abs(unmatchedCount):
            balanced = False
            
        result.append(balanced)
            
    return result

print(balancedOrNot(expressions, maxReplacements))