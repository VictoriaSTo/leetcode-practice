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
                if unmatchedCount == 0:
                    if replacement > 0:
                        replacement -=1
                    else:
                        balanced = False
                        break
                else:
                    unmatchedCount -=1
            
        if unmatchedCount > 0 and replacement < unmatchedCount:
            balanced = False
            
        result.append(balanced)
            
    return result

print(balancedOrNot(expressions, maxReplacements))