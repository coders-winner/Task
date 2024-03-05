<template>
  <a-result
    class="my-text"
    status="success"
    title="Доска с заданиями"
    sub-title="Тестовый проект. Создай актуальные тебе задачи с возможностью перемещения!"
  >
    <template #extra>
      <a-button href="/task" type="primary">Доска с заданиями</a-button>
    </template>
  </a-result>
  <div class="my-text-center my-grid">
    <a href="https://github.com/coders-winner/Task" target="_blank"
      >Ссылка на проект GitHab ->
    </a>
    <a
      href="https://ryazan.hh.ru/resume/f139184aff059284360039ed1f715878366e66"
      target="_blank"
      >Ссылка мое резюме->
    </a>
  </div>
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
.my-grid {
  display: grid;
}
</style>
