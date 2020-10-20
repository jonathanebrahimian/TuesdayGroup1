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

    if branch == "Coast Guard": line = "Coase Guard Station " + line
    retVal.append(branch + "," + line + "," + currentState)
  
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
  firstNames = open("firstNames.txt", "r").readlines()
  lastNames = open("lastNames.txt", "r").readlines()
  locations = open("locations.txt", "r").readlines()

  armyBases = processBases("armyBases.txt", "Army")
  marineBases = processBases("marineBases.txt", "Marines")
  navyBases = processBases("navyBases.txt", "Navy")
  airForceBases = processBases("airForceBases.txt", "Air Force")
  coastGuardBases = processBases("coastGuardBases.txt", "Coast Guard")

  militaryBases = [armyBases, marineBases, navyBases, airForceBases, coastGuardBases]

  # Remove extra whitespace
  for i in range(len(firstNames)):
    firstNames[i] = firstNames[i].strip()
  for i in range(len(lastNames)):
    lastNames[i] = lastNames[i].strip()
  for i in range(len(locations)):
    locations[i] = locations[i].strip()
  
  minAge = 22
  maxAge = 45

  outputFile = open(outputFileName, "w+")
  outputFile.write("Last Name,First Name,Gender,Age,Location,Branch,Base Name,Base Location")
  for i in range(numPeople):
    outputFile.write(lastNames[int(rand() * len(lastNames))] + "," + firstNames[int(rand() * len(firstNames))]+ ",")
    outputFile.write(str(int(rand() * (maxAge - minAge) + minAge)) + ",")
    outputFile.write(locations[int(rand() * len(locations))] + ",")
    branch = militaryBases[randomMilitaryBranch()]
    outputFile.write(branch[int(rand() * len(branch))] + "\n")

if __name__ == "__main__":
  if len(argv) > 1:
    main(int(argv[1]), argv[2])
  else:
    print("Command line arguments:")
    print("  Number of people")
    print("  Output file")