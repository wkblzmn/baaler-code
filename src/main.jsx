import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-book',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('https://raw.githubusercontent.com/wkblzmn/book-review-json/main/Books.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
