
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./routes/Home";
import AddPage from "./routes/AddPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (  
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      
    </Provider>
  );
}

export default App;



















// import React from 'react';
// import { Provider } from 'react-redux'; // Import Provider
// import Grid from "@mui/material/Grid";
// import MyForm from "./components/MyForm";
// import MyTable from "./components/MyTable";
// import store from "./store";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={4} lg={6}>
//           <MyForm />
//         </Grid>
//         <Grid item xs={12} md={8} lg={6}>
//           <MyTable />
//         </Grid>
//       </Grid>
//     </Provider>
//   );
// };

// export default App;
