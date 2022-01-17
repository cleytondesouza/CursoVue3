<template>
  <teleport to="body">
    <div
      v-if="state.isActive"
      class="
        fixed
        top-0
        left-0
        z-50
        flex
        items-center
        justify-center
        w-full
        h-full
        bg-black bg-opacity-50
      "
      @click="handleModalToogle({ status: false })"
    >
      <div class="fixed mx-10" :class="state.width">
        <div
          class="
            flex flex-col
            overflow-hidden
            bg-white
            rounded-lg
            animate__animated animate__fadeInDown animate__faster
          "
        >
          <div class="flex flex-col px-12 py-10 bg-white">

        state.width = payload.width ?? DEFAULT_WIDTH
      } else {
        state.component = {}
        state.props = {}
        state.width = DEFAULT_WIDTH
      }
      state.isActive = payload.status
    }
    return {
      state,
      handleModalToogle
    }
  }
}
</script>
