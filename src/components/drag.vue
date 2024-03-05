<template>
  <draggable
    :list="modelValue"
    @change="$emit('update:modelValue', modelValue)"
    item-key="id"
    group="people"
  >
    <template #item="{ element, index }">
      <a-card class="my-cart">
        <!-- тител -->
        <template #title>
          <a-typography-paragraph
            v-model:content="element.title"
            :editable="{
              maxlength: 22,
              onChange: () => {
                update();
              },
            }"
          />
        </template>
        <!-- удалить -->
        <template #extra>
          <a-popconfirm
            title="Вы уверены, что удалили эту задачу?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm(element, index)"
            @cancel="cancel"
          >
            <DeleteFilled class="my-dell" />
          </a-popconfirm>
        </template>
        <!-- текст -->
        <a-textarea
          @change="update()"
          v-model:value="element.text"
          placeholder="Введите текст..."
          :rows="4"
        />
      </a-card>
    </template>
    <!-- добавить  -->
    <template #footer>
      <div class="btn-group list-group-item" role="group">
        <a-button class="my-butt" type="primary" @click="addBlock()">
          <FileAddOutlined />
          Добавить задачу</a-button
        >
      </div>
    </template>
  </draggable>
</template>
<script setup lang="ts">
import { DeleteFilled, FileAddOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import draggable from "vuedraggable";

const props = defineProps({
  modelValue: { type: Array, required: true, default: null },
});
const emit = defineEmits(["update:modelValue"]);

function addBlock() {
  const x = { title: "Задача", text: "" };
  emit("update:modelValue", [...props.modelValue, ...[x]]);
}
function confirm(e: any, idx: any) {
  let result = props.modelValue.filter((item, index) => {
    if (index != idx) return item;
  });
  emit("update:modelValue", result);
  message.success("Вы удалили:  " + e.title);
}
function update() {
  emit("update:modelValue", [...props.modelValue]);
}
const cancel = () => {
  message.error("Click on No");
};
</script>

<style lang="sass">
.my-cart
  margin: 10px
  width: 300px
  padding: 5px
  transition-duration: 0.6s
  &:hover
   box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.5)
   transform: scale(102%)translate(0, -2px)
.ant-card-body
  padding: 10px 0 !important
.ant-typography
  margin: 0 !important
  font-size: 18px !important
.ant-card-head
  padding: 0 20px 0 10px !important
.my-butt
    text-transform: uppercase
    width: 300px
    margin: 10px
    height: 48px
    font-size: 16px
    background-color: #1B5E20 !important
    transition-duration: 0.6s
    &:hover
      background-color: #2E7D32 !important
      transform: scale(101%)translate(0, -2px)
      box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3)
.my-dell
  transition-duration: 0.3s
  &:hover
    color: #2E7D32
    font-size: 16px
</style>
