import { defineStore } from "pinia";

interface State {
  backlog: Object;
  todo: Object;
  progress: Object;
  done: Object;
}

export const useStore = defineStore("defineStore", {
  state: (): State => {
    return {
      backlog: [],
      todo: [],
      progress: [],
      done: [],
    };
  },
  getters: {
    getBacklog(state) {
      return state.backlog;
    },
    getTodo(state) {
      return state.todo;
    },
    getProgress(state) {
      return state.progress;
    },
    getDone(state) {
      return state.done;
    },
  },
  actions: {
    aBacklog(value: any) {
      console.log(value);
      localStorage.setItem("backlog", JSON.stringify(value));
      this.backlog = value;
    },

    aTodo(value: any) {
      localStorage.setItem("todo", JSON.stringify(value));
      this.todo = value;
    },
    aProgress(value: any) {
      localStorage.setItem("progress", JSON.stringify(value));
      this.progress = value;
    },
    aDone(value: any) {
      localStorage.setItem("done", JSON.stringify(value));
      this.done = value;
    },
    aLocalS() {
      console.log(localStorage.backlog);
      if (localStorage.backlog) this.backlog = JSON.parse(localStorage.backlog);
      if (localStorage.todo) this.todo = JSON.parse(localStorage.todo);
      if (localStorage.progress)
        this.progress = JSON.parse(localStorage.progress);
      if (localStorage.done) this.done = JSON.parse(localStorage.done);
    },
  },
});
