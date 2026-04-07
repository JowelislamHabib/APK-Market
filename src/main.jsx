import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        index: true,
        element: <h2>Homepage</h2>,
      },
      {
        path: "/apps",
        element: <div>All Apps</div>,
      },
    ],
    errorElement: (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            {/* Animated or Styled Status Code */}
            <h1 className="text-9xl font-bold text-primary">404</h1>

            <p className="py-6 text-2xl font-semibold">
              Oops! The page you're looking for doesn't exist.
            </p>

            <p className="mb-8 text-base-content/70">
              It seems you've found a glitch in the matrix or a broken link.
              Don't worry, it happens to the best of us.
            </p>

            <div className="flex justify-center gap-4">
              {/* Go Back Button */}
              <button
                onClick={() => window.history.back()}
                className="btn btn-outline btn-secondary"
              >
                Go Back
              </button>

              {/* Home Button */}
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
