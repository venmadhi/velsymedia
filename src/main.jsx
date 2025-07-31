import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IssueForm from './components/Issueform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <IssueForm/>
  </StrictMode>,
)
