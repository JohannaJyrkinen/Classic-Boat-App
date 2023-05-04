import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { FrontPage } from "./pages/FrontPage"
import { Repairtips } from "./pages/RepairTips"
import { OneTypeClasses } from "./pages/OneTypeClasses"
import { ConstructionClasses } from "./pages/ConstructionClasses"
import { MetreClasses } from "./pages/MetreClasses"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontPage/>,
    },
    {
        path: "/yksityyppiluokat",
        element: <OneTypeClasses/>,
    },
    {
        path: "/kunnostus",
        element: <Repairtips />,
    },
    {
        path: "/konstruktioluokat",
        element: <ConstructionClasses/>
    },
    {
        path: "/metriluokat",
        element: <MetreClasses/>
    }
])