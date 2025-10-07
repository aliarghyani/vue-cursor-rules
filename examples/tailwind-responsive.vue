<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <article v-for="item in items" :key="item.id" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <slot :item="item" />
    </article>
  </div>

  <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
    Responsive Heading
  </h1>

  <section class="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
    <slot name="summary" />
  </section>
</template>
