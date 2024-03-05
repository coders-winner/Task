<template>
  <a-result
    class="my-text"
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <template #extra>
      <a-button href="/task" type="primary">Go Console</a-button>
    </template>
  </a-result>
</template>
<style lang="scss">
.my-text {
  .ant-result-title {
    color: white !important;
  }
  .ant-result-subtitle {
    color: rgb(180, 180, 180);
  }
}
</style>
