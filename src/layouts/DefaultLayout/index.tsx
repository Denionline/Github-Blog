import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { BodyContainer } from "./style"

export const DefaultLayout = () => {
    return (
        <>
            <Header />
            <BodyContainer>
                <Outlet />
            </BodyContainer>
        </>
    )
}