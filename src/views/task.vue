<template>
  <h1 class="my-text-center">Доска с заданиями</h1>
  <div class="my-cont">
    <a-row class="my-row">
      <a-col class="my-col">
        <h1 class="my-text-center mt-4">Backlog</h1>
        <div class="my-overflow">
          <drag v-model="backlog" />
        </div>
      </a-col>
      <a-col class="my-col">
        <h1 class="my-text-center mt-4">To Do</h1>
        <div class="my-overflow">
          <drag v-model="todo" />
        </div>
      </a-col>
      <a-col class="my-col">
        <h1 class="my-text-center mt-4">In Progress</h1>
        <div class="my-overflow">
          <drag v-model="progress" />
        </div>
      </a-col>
      <a-col class="my-col">
        <h1 class="my-text-center mt-4">Done</h1>
        <div class="my-overflow">
          <drag v-model="done" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import drag from "@/components/drag.vue";
import { computed } from "vue";
import { useStore } from "@/stores";

const store = useStore();
store.aLocalS();

const backlog: any = computed({
  get() {
    return store.getBacklog;
  },
  set(value) {
    store.aBacklog(value);
  },
});
const todo: any = computed({
  get() {
    return store.getTodo;
  },
  set(value) {
    store.aTodo(value);
  },
});
const progress: any = computed({
  get() {
    return store.getProgress;
  },
  set(value) {
    store.aProgress(value);
  },
});
const done: any = computed({
  get() {
    return store.getDone;
  },
  set(value) {
    store.aDone(value);
  },
});
</script>

<style lang="scss">
.my-col {
  margin: 20px;
  width: 340px;
  border-radius: 10px;
  background-color: #546e7a;
}
.my-cont {
  display: flex;
  justify-content: center;
}
.my-overflow {
  padding: 10px;
  overflow: overlay;
  overflow-x: hidden;
  height: 74dvh;
}
.my-row {
  overflow: overlay;
  flex-wrap: nowrap;
}
</style>
