<template>
  <div>
    <TheHeader />
    Some *custom* layout
    <slot name="header">
        Default  content
      </slot>
    <TheFooter />
  </div>
</template>
