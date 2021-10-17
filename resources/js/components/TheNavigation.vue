<template>
  <header class="bg-grey-900 ">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-700"
      aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between lg:border-none text-gray-200">
        <div class="flex items-center">
          <a
            class="text-3xl font-bold font-heading"
            href="#">
            <font-awesome-icon icon="skull" />
          </a>
          <div class="ml-10 space-x-8 lg:block">
            <a
              href="#"
              class="text-base font-medium"
              key="Posts">
              {{ $t('views.PostIndex.title')}}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
