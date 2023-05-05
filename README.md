# HostfullyAssessment
Hostfully QA Engineer Cypress exercise

## HOW TO RUN

1. `git clone https://github.com/GenerousDev/Hostfully.git` the repository
2. `npm install`
3. `npx cypress open`

## ISSUES ENCOUNTERED AND RESOLUTION METHOD
Major issues I encountered was how to setup cucumber with cypress TS 
because there is a lot of update in the ecosystem which has not been properly documnented
And I resolved this mainly by following the example of badeball on their main repository.

## HOW I APPROACHED THE TASK AND WHY I MADE CERTAIN DECISIONS

I created my feature file and used cuke extension to auto generate the test steps,
I also created my most used commands in my support file and used them in my step file.
While adding the beforeEach hook scenerio run to my e2e file in support.  

## POSSIBLE ERROR AND RESOLLUTION

> If Chrome and Edge does not work on cypress launchpad/Test Runner
> Open cypress test runner > Go to File -> View App Data > Delete everything in here > Close cypress and open it up again
 
