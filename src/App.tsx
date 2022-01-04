import React, { lazy } from "react";

import "./App.scss";
import { Provider } from "react-redux";
import configureStore from "./store";
import { logo } from "./react-app-env.d";
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/react";
const Loading = lazy(() => import('./components/loading/loading'));
const CryptoPage = lazy(() => import('./pages/crypto/index'));
const CryptoDetailPage = lazy(() => import('./pages/crypto/detail/index'));

const store = configureStore();

const override = css`
display: flex;
border-color: rgb(62, 16, 224);
position: absolute;
left: 50%;
top: 50%;
`;


const App: React.FC = () => {


  return (
    <React.Suspense fallback={<div style={{ textAlign: 'center', height: '100vh' }}>
      <ScaleLoader color={"rgb(62, 16, 224)"} loading={true} css={override} />
      <img src={logo} className="App-logo-h" alt="logo" />
    </div>}>

      <Provider store={store}>
        <Navbar />
        <div className="App">
          <div className="App-header">
            <Routes>
              <Route path="/" element={<CryptoPage />} />
              <Route path="/home" element={<CryptoPage />} />
              <Route path="/detail" element={<CryptoDetailPage />} />
              <Route path="/detail/:id" element={<CryptoDetailPage />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Not authorized!</p>
                    <Link
                      style={{ display: "block", margin: "1rem 0" }}
                      to={`/`}
                      key={1}
                    >
                      Home
                    </Link>
                  </main>
                }
              />


            </Routes>
          </div>

        </div>
      </Provider>
    </React.Suspense>
  );
}


export default App;
