App structure:
  1) |__ Common folder: Which contains the common components that will be used several times across the app
        |__ Inside the common folder:  We got a folder for each common component, where within will be an index and style files.

  2) |__ modules folder: Which contains All the components and logic in the application
        |__ Inside the modules folder: There should be a folder for each page, in addition to the layout module, in which it holds the navbar & footer

  3) |__ pages folder: which is the main required folder by next.js and it contains the routes for each page
        |__ Inside the pages folder: we got a file renamed as we want our routes to be.

  4) |__ public folder: which contains all the assets

  // 