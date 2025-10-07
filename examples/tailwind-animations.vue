<template>
  <div class="flex items-center gap-6">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <button class="transform hover:scale-105 transition-transform duration-200">
      Hover me
    </button>
    <div class="opacity-0 animate-fade-in">Fades in on mount</div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-in-out forwards;
}
</style>
