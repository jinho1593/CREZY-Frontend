import {
  REQUEST_PLAYLISTS_TO_SPRING,
  REQUEST_PLAYLIST_TO_SPRING,
  REQUEST_MY_PLAYLISTS_TO_SPRING,
  REQUEST_MY_LIKED_PLAYLISTS_TO_SPRING,
} from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
  requestPlaylistsToSpring({ commit }) {
    return axiosInst.springAxiosInst.get("/playlist/list").then((res) => {
      commit(REQUEST_PLAYLISTS_TO_SPRING, res.data);
    });
  },
  requestPlaylistToSpring({ commit }, playlistId) {
    return axiosInst.springAxiosInst
      .get(`/playlist/${playlistId}`)
      .then((res) => {
        commit(REQUEST_PLAYLIST_TO_SPRING, res.data);
      });
  },
  requestMyPlaylistsToSpring({ commit }) {
    return axiosInst.springAxiosInst.get("/playlist/my-list").then((res) => {
      commit(REQUEST_MY_PLAYLISTS_TO_SPRING, res.data);
    });
  },
  requestMyLikedPlaylistsToSpring({ commit }) {
    return axiosInst.springAxiosInst.get("/playlist/liked-list").then((res) => {
      commit(REQUEST_MY_LIKED_PLAYLISTS_TO_SPRING, res.data);
    });
  },
};
