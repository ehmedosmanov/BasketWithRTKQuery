import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productApi } from './features/product/productAPİ'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import basketReducer from './features/basket/basketSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, basketReducer)

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    basket: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware)
})

export const persistor = persistStore(store)
setupListeners(store.dispatch)
