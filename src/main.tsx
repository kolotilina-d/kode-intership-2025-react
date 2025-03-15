import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./app";
import store from "./store";

import "./shared/styles/reset.scss";
import "./shared/styles/normalize.scss";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/kode-intership-2025-react' : '/'}>
      <App />
    </BrowserRouter>
  </Provider>
);
