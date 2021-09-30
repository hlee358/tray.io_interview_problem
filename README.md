# This repo contains the first interview problem: robotic hoover program
## the goal of the program is to read input.txt file that contains the definition of the grid of the room, initial position of the hoover, list of dirty spots, and the step by step direction commands that is indicated by North, East, West, and South.
## the output of the program is to display the last coordinate of the hoover in the first line and the number of dirty spots cleaned for the given input.txt instructions.
## the code was developed and tested with Visual Studio Code and the final program is included with launch.json file to assist with the launch of the program. The input.txt file has the example from the technical test populated and the content of the input.txt can be modified to test various scenarios of the hoover so long as the following criteria are met:
### the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
### the second line holds the hoover position
### subsequent lines contain the zero or more positions of patches of dirt (one per line)
### the last line then always contains the driving instructions (at least one)
