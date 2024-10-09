import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Home } from "./pages/Home"
import { Publication } from "./pages/Publication"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Publication" element={<Publication />} />
            </Route>
        </Routes>
    )
}