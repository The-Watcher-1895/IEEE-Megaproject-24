import {createReducer} from "@reduxjs/toolkit";
import {All_QUERY_REQUEST,All_QUERY_SUCCESS,All_QUERY_FAIL,NEW_QUERY_REQUEST,NEW_QUERY_SUCCESS,NEW_QUERY_FAIL,
STATUS_REQUEST,STATUS_SUCCESS,STATUS_FAIL,CLEAR_RESPONSE} from "../constants/queryConstant";

const initialState = {
    queries : [],
    loading : false,
    error : null,
};

const initialStateForNewQuery = {
    query : null,
    loading : false,
    error : null,
    response : null,
};

export const queryReducer = createReducer(initialState,{
    All_QUERY_REQUEST : (state,action) => {
        state.loading = true;
    },
    All_QUERY_SUCCESS : (state,action) => {
        state.loading = false;
        state.queries = action.payload;
    },
    All_QUERY_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
    }
});

export const newQueryReducer = createReducer(initialStateForNewQuery,{
    NEW_QUERY_REQUEST : (state,action) => {
        state.loading = true;
    },
    NEW_QUERY_SUCCESS : (state,action) => {
        state.loading = false;
        state.query = action.payload.query;
        state.response = action.payload.response;
    },
    NEW_QUERY_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
    },
    CLEAR_RESPONSE : (state,action) => {
        state.response = null;
    }
});

export const statusReducer = createReducer({loading : false , usage : null , error : null},{
    STATUS_REQUEST : (state,action) => {
        state.loading = true;
    },
    STATUS_SUCCESS : (state,action) => {
        state.loading = false;
        state.usage = action.payload;
    },
    STATUS_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
    }
});