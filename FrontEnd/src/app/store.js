import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "./modules/data/dataReducer";

export const store = configureStore({
  reducer: {
    data: dataReducer
  }
});
