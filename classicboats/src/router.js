import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { AllClasses } from "./pages/AllClasses"
import { Repairtips } from "./pages/RepairTips"
import { OneTypeClasses } from "./pages/OneTypeClasses"
import { ConstructionClasses } from "./pages/ConstructionClasses"
import { SkerryBoats } from "./pages/SkerryBoats"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AllClasses/>,
    },
    {
        path: "/yksityyppiluokat",
        element: <OneTypeClasses/>,
    },
    {
        path: "/kevathuolto",
        element: <Repairtips />,
    },
    {
        path: "/konstruktioluokat",
        element: <ConstructionClasses/>
    },
    {
        path: "/sk",
        element: <SkerryBoats/>
    }
])