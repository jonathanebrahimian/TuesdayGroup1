from random import random as rand
from sys import argv

def processBases(filename, branch):
  lines = open(filename, "r").readlines()
  currentState = ""
  retVal = []
  for i in range(len(lines)):
    line = lines[i].strip()
    if len(line) == 0:
      currentState = ""
      continue

    if currentState == "":
      currentState = line
      continue

    if branch == "Coast Guard": line = "Coast Guard Station " + line
    retVal.append({"branch": branch, "name": line, "state": currentState})
  
  return retVal
    
def randomMilitaryBranch():
  proportions = [1e6, 1.8e5, 7e5, 5.6e5, 4e4]
  randomNumber = rand() * sum(proportions)
  for i in range(5):
    if randomNumber < proportions[i]:
      return i
    randomNumber -= proportions[i]
  
  return 0

def main(numPeople, outputFileName):
  boyNames = open("boyNames.txt", "r").readlines()
  girlNames = open("girlNames.txt", "r").readlines()
  lastNames = open("lastNames.txt", "r").readlines()

  armyBases = processBases("armyBases.txt", "Army")
  marineBases = processBases("marineBases.txt", "Marines")
  navyBases = processBases("navyBases.txt", "Navy")
  airForceBases = processBases("airForceBases.txt", "Air Force")
  coastGuardBases = processBases("coastGuardBases.txt", "Coast Guard")

  militaryBases = armyBases + marineBases + navyBases + airForceBases + coastGuardBases

  armyRanks = open("armyRanks.txt", "r").readlines()
  marineRanks = open("marineRanks.txt", "r").readlines()
  navyRanks = open("navyRanks.txt", "r").readlines()
  airForceRanks = open("airForceRanks.txt", "r").readlines()
  coastGuardRanks = open("coastGuardRanks.txt", "r").readlines()


  # Remove extra whitespace
  for listToTrim in [boyNames, girlNames, lastNames, armyRanks, marineRanks, navyRanks, airForceRanks, coastGuardRanks]:
    for i in range(len(listToTrim)):
      listToTrim[i] = listToTrim[i].strip().title()
  
  ranks = {
    "Army": armyRanks,
    "Marines": marineRanks,
    "Navy": navyRanks,
    "Air Force": airForceRanks,
    "Coast Guard": coastGuardRanks
  }

  minAge = 22
  maxAge = 45

  outputFileCSV = open(outputFileName+".csv", "w+")
  outputFileCSV.write("Name,Gender,Age,Branch,Base Name,Base Location\n")

  outputFileSQL = open(outputFileName+".sqlData", "w+")
  for i in range(numPeople):
    gender = 'Male' if rand() > .5 else 'Female'
    firstName = boyNames[int(rand() * len(boyNames))] if gender == "Male" else girlNames[int(rand() * len(girlNames))]
    lastName = lastNames[int(rand() * len(lastNames))]
    age = str(int(rand() * (maxAge - minAge) + minAge))
    baseInfo = militaryBases[int(rand() * len(militaryBases))]
    rank = ranks[baseInfo["branch"]][int(rand() * len(ranks[baseInfo["branch"]]))]

    article = "an" if rank[0] in ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] else "a"
    outputFileCSV.write(f"{firstName} {lastName},{gender},{age},{baseInfo['branch']},{rank},{baseInfo['name']},{baseInfo['state']},Hello! I am {firstName} {lastName}! I am {article} {rank} for the {baseInfo['branch']}!")
    outputFileSQL.write(f"(\"{firstName} {lastName}\",\"{gender}\",{age},\"{baseInfo['branch']}\",\"{rank}\",\"{baseInfo['name']}\",\"{baseInfo['state']}\",\"Hello! I am {firstName} {lastName}! I am {article} {rank} for the {baseInfo['branch']}!\")")
    if i != numPeople - 1:
      outputFileCSV.write("\n")
      outputFileSQL.write("\n")    

if __name__ == "__main__":
  if len(argv) > 1:
    main(int(argv[1]), argv[2])
  else:
    print("Command line arguments:")
    print("  Number of people")
    print("  Output file")