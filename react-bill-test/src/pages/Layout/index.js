import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"

const Layout = ()=> {
    return (
        <div>
            wo shi Layout
            <Outlet />
            <Button color="primary">测试全局</Button>
            <div className="puple">
            <Button color="primary">测试全局</Button>
            </div>
        </div>
    )
}

export default Layout