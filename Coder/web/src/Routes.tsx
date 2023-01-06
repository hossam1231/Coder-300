// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/layout" page={LayoutPage} name="layout" />
      <Route path="/component" page={ComponentPage} name="component" />
      <Route path="/folder" page={FolderPage} name="folder" />
      <Route path="/library" page={LibraryPage} name="library" />
      <Route path="/page" page={PagePage} name="page" />
      <Route path="/application" page={ApplicationPage} name="application" />
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
