<template>
    <div class="relative w-full mx-auto select-none " @keydown.left.prevent="prev" @keydown.right.prevent="next"
        tabindex="0" ref="root">
        <!-- Slides wrapper -->
        <div class="overflow-hidden relative">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @touchstart="onTouchStart"
                @touchmove="onTouchMove" @touchend="onTouchEnd">
                <div v-for="(img, i) in imagesToShow" :key="i" class="flex-shrink-0 w-full">
                    <img :src="img" class="w-full h-[880px] object-cover block" :alt="`slide-${i + 1}`"
                        draggable="false" />
                </div>
            </div>

            <!-- Prev / Next Buttons (inside image) -->
            <button
                class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white p-2 rounded-full shadow-md focus:ring-2 focus:ring-white"
                @click="prev" aria-label="Previous">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white p-2 rounded-full shadow-md focus:ring-2 focus:ring-white"
                @click="next" aria-label="Next">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Dots / Points -->
            <div class="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                <button v-for="(dot, idx) in imagesToShow.length" :key="idx" @click="goTo(idx)" :class="[
                    'w-3 h-3 rounded-full transition-transform',
                    currentIndex === idx ? 'scale-125' : 'opacity-60'
                ]" :aria-current="currentIndex === idx ? 'true' : 'false'">
                    <span
                        :class="currentIndex === idx ? 'block w-full h-full bg-white' : 'block w-full h-full bg-white/50'"
                        class="rounded-full"></span>
                </button>
            </div>
        </div>
        <div class="absolute top-[72%] left-1/2 -translate-x-1/2 bg-[hsla(0,0%,100%,.76)] rounded-[9px]">
            <div class="flex flex-col items-center w-[577px] h-[180px]">
                <h1 class="text-[25px] py-[25px]">Yoshlar daftariga kirish uchun ariza yuboring</h1>
                <div class="flex items-center gap-[20px]">
                    <button class="bg-[#0a58ca] text-white rounded-[5px] py-[6px] px-[10px]">Ariza yuborish</button>
                    <button class="bg-white rounded-[5px] py-[6px] px-[10px]">Ariza holatini tekshirish</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

/**
 * Props
 * - images: array of image urls (defaults to 4 placeholders)
 * - autoplay: boolean to enable autoplay
 * - autoplayInterval: ms between slides
 */
const props = defineProps({
    images: {
        type: Array,
        default: () => [
            // default 4 images — replace with your actual URLs
            'https://picsum.photos/id/1015/1200/800',
            'https://picsum.photos/id/1016/1200/800',
            'https://picsum.photos/id/1020/1200/800',
            'https://picsum.photos/id/1024/1200/800'
        ]
    },
    autoplay: { type: Boolean, default: false },
    autoplayInterval: { type: Number, default: 4000 }
})

const imagesToShow = props.images
const currentIndex = ref(0)
const root = ref(null)

let timer = null

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % imagesToShow.length
}

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + imagesToShow.length) % imagesToShow.length
}

const goTo = (i) => {
    currentIndex.value = i
}

/* Autoplay handling */
const startAutoplay = () => {
    stopAutoplay()
    if (props.autoplay) {
        timer = setInterval(next, props.autoplayInterval)
    }
}
const stopAutoplay = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
}

/* Pause on hover/focus */
const onRootMouseEnter = () => stopAutoplay()
const onRootMouseLeave = () => startAutoplay()

/* Touch (swipe) handling */
let touchStartX = 0
let touchDeltaX = 0
const onTouchStart = (e) => {
    stopAutoplay()
    touchStartX = e.touches[0].clientX
}
const onTouchMove = (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX
}
const onTouchEnd = () => {
    if (Math.abs(touchDeltaX) > 50) {
        if (touchDeltaX < 0) next()
        else prev()
    }
    touchDeltaX = 0
    startAutoplay()
}

/* Keyboard focus: automatically focus container to listen to arrow keys if user tabs into it */
onMounted(() => {
    if (root.value) {
        root.value.addEventListener('mouseenter', onRootMouseEnter)
        root.value.addEventListener('mouseleave', onRootMouseLeave)
    }
    startAutoplay()
})

onBeforeUnmount(() => {
    stopAutoplay()
    if (root.value) {
        root.value.removeEventListener('mouseenter', onRootMouseEnter)
        root.value.removeEventListener('mouseleave', onRootMouseLeave)
    }
})

/* if images prop changes reset index */
watch(() => props.images, (newVal) => {
    if (!newVal || newVal.length === 0) currentIndex.value = 0
    else currentIndex.value = Math.min(currentIndex.value, newVal.length - 1)
})
</script>

<style scoped>
/* optional: smoother image dragging prevention */
img {
    -webkit-user-drag: none;
    user-select: none;
}
</style>
