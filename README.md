# This repo contains the first interview problem: robotic hoover program
## The goal of the program is to read input.txt file that contains the definition of the grid of the room, initial position of the hoover, list of dirty spots, and the step by step direction commands that is indicated by North, East, West, and South.
## The output of the program is to display the last coordinate of the hoover in the first line and the number of dirty spots cleaned for the given input.txt instructions.
## The code was developed in Node.js and tested with Visual Studio Code. The input.txt file has the example from the technical test populated and so long as the input.txt file is in the same directory as the HL Hoover.js, "HL Hoover.js" can be executed to receive the desired output. The content of the input.txt can be modified to test various scenarios of the hoover so long as the following criteria are met:
### The first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
### The second line holds the hoover position
### Subsequent lines contain the zero or more positions of patches of dirt (one per line)
### The last line then always contains the driving instructions (at least one)
