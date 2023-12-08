# Views

This is where all prototype screens live.
Any page or directory in this folder can be accessed in the URL tree.

## Directory structure

```ascii
.
├─ agent                              // NB1
├─ citizen                            // NB1
├─ dwp-components                     // NB4
├─ includes                           // NB3
├─ library                            // Index of screens and components used
├─ service-centre                     // Service centre screens (NB5)
│  ├─ i4                              // Increment 4 screens
│  │  ├─ claimants                    // Data for dummy claimants
│  │  │  ├─ ij                        // Dummy data includes for Ian Johnson
│  │  │  │  └─ application.html       // Claim data included on view-claim
│  │  │  │  └─ book.html              // NB6
│  │  │  │  └─ history.html           // Claim history included on view-claim
│  │  │  │  └─ key-details.html       // Claimant details summary included on view-claim
│  │  │  │  └─ mismatch.html          // NINo-CIS record mismatch warning included on view-claim
│  │  │  ├─ kb                        // Dummy data includes for Karan Bhopal (structure as previous)
│  │  │  │  └─ …
│  │  │  └─ sh                        // Dummy data includes for Simon Hamilton (structure as previous)
│  │  │     └─ …
│  │  ├─ includes
│  │  │  ├─ actions.html              // Actions included on view-claim screen
│  │  │  └─ warnings.html             // Warnings included on view-claim screen
│  │  ├─ mi
│  │  │  ├─ choose-task.html          // NB1
│  │  │  └─ index.html                // Management information dashboard
│  │  ├─ _routes.js                   // Routes for this increment (reference this in main file)
│  │  ├─ choose-task.html             // Choose task, first screen in journey
│  │  ├─ confirmation.html             // Confirmation of status update screen
│  │  ├─ duplicates.html              // nino-search results when duplicates exist
│  │  ├─ nino-search.html             // NINo search screen
│  │  ├─ nino.html                    // NB6
│  │  ├─ screens.html                 // Index for this directory, list of scenarios
│  │  ├─ update.html                  // Update claim status screen
│  │  └─ view-claim.html              // View claim details screen
│  ├─ i5                              // Increment 5 screens (structure as previous)
│  │  └─ …
│  ├─ i6                              // Increment 6 screens (structure as previous)
│  │  └─ …
│  ├─ i7                              // Increment 7 screens (structure as previous)
│  │  └─ …
│  ├─ mvp                             // MVP screens (structure as previous)
│  │  └─ …
│  ├─ choose-task.html                // NB1
│  ├─ index.html
│  └─ understanding-exceptions.html   // NB2
├─ sprints                            // Sprintly breakdown of work (e.g. UI variations)
│  └─ …
├─ increments.html                    // NB1
├─ index.html                         // Prototype homepage
├─ layout_unbranded.html              // NB2
├─ layout.html                        // NB2
└─ README.md                          // ☛ You are here
```

**NB1:** Not sure if this is still needed  
**NB2:** Could likely be refactored away  
**NB3:** Probably where new components are added for reuse  
**NB4:** Probably where new DWP components are added for reuse  
**NB5:** So as not to duplicate code and for better maintainability these should be split into separate release branches  
**NB6:** Not sure where this is used
