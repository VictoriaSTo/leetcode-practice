# 2038. Remove Colored Pieces 
    def winnerOfGame(self, colors: str) -> bool:
        countA = 0
        countB = 0
        for i in range(len(colors)-2):
            if(colors[i:i+3] == "AAA"):
                countA += 1
            elif (colors[i:i+3] == "BBB"):
                countB +=1
        return countA > countB