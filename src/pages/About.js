import { Routes, Route } from 'react-router-dom'
import CompanyHistory from "./CompanyHistory"

export default function About() {
  return (
    <div>
        <h2>About</h2>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi."
        </p>
        <Routes>
          <Route path='CompanyHistory' element={<CompanyHistory />} />
        </Routes>
    </div>
  )
}
