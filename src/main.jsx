import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Apps from "./pages/apps/Apps";
import InstalledApps from "./pages/installedApps/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <h2>Homepage</h2>,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installedapps",
        Component: InstalledApps,
      },
      {
        path: "/dashboard",
        element: <h2>Dashboard Upcoming</h2>,
      },
    ],
    errorElement: (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold text-primary">404</h1>

            <p className="py-6 text-2xl font-semibold">
              Oops! The page you're looking for doesn't exist.
            </p>

            <p className="mb-8 text-base-content/70">
              It seems you've found a glitch in the matrix or a broken link.
              Don't worry, it happens to the best of us.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="btn btn-outline btn-secondary"
              >
                Go Back
              </button>

              <a href="/" className="btn btn-primary">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
