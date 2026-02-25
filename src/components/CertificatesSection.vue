<template>
    <section id="certificates" class="section-pad bg-slate-900/30">
        <div class="max-w-6xl mx-auto">
            <div data-aos="fade-up" class="text-center mb-16">
                <p class="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">{{
                    t.certificates.subtitle }}</p>
                <h2 class="section-title">{{ t.certificates.title }}</h2>
            </div>

            <!-- Certificate Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 min-h-[600px] content-start">
                <div v-for="(cert, i) in paginatedItems" :key="i"
                    class="card group hover:border-indigo-500/30 transition-all duration-300 h-full" data-aos="fade-up"
                    :data-aos-delay="(i % 6) * 50">

                    <div class="flex flex-col h-full">
                        <h3
                            class="text-lg font-bold text-slate-200 group-hover:text-indigo-400 transition-colors mb-2 line-clamp-2">
                            {{ cert.title }}
                        </h3>
                        <div
                            class="mt-auto flex items-center gap-2 text-sm text-slate-500 pt-4 border-t border-slate-700/50 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="w-4 h-4 text-indigo-500">
                                <path fill-rule="evenodd"
                                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="font-medium text-slate-400">{{ cert.issuer }}</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Pagination Controls -->
            <div v-if="totalPages > 1" class="flex flex-wrap justify-center items-center gap-2 mt-8" data-aos="fade-up">
                <!-- Previous Button -->
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous page">
                    <i class="fas fa-chevron-left text-xs md:text-sm"></i>
                </button>

                <!-- Page Numbers -->
                <div class="flex flex-wrap justify-center gap-1 md:gap-2">
                    <template v-for="(page, index) in displayedPages" :key="index">
                        <span v-if="page === '...'"
                            class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-slate-500 font-bold select-none">
                            ...
                        </span>
                        <button v-else @click="goToPage(page)" :class="[
                            'w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-xs md:text-sm font-medium transition-all border',
                            currentPage === page
                                ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20'
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-indigo-500/50 hover:text-indigo-400'
                        ]">
                            {{ page }}
                        </button>
                    </template>
                </div>

                <!-- Next Button -->
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    aria-label="Next page">
                    <i class="fas fa-chevron-right text-xs md:text-sm"></i>
                </button>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import AOS from 'aos'

const { t } = useLanguage()

// Pagination State
const currentPage = ref(1)

// Responsive items per page
const getItemsPerPage = () => {
    return window.innerWidth < 768 ? 5 : 12
}

const itemsPerPage = ref(getItemsPerPage())

// Update pagination on resize
window.addEventListener('resize', () => {
    itemsPerPage.value = getItemsPerPage()
})

// Computed Properties
const allItems = computed(() => {
    return t.value.certificates?.items || []
})

const totalPages = computed(() => {
    return Math.ceil(allItems.value.length / itemsPerPage.value)
})

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return allItems.value.slice(start, end)
})

const displayedPages = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const delta = 1 // Number of pages to show around current page

    const range = []
    const rangeWithDots = []
    let l

    range.push(1)

    if (total <= 1) return range

    for (let i = current - delta; i <= current + delta; i++) {
        if (i < total && i > 1) {
            range.push(i)
        }
    }
    range.push(total)

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1)
            } else if (i - l !== 1) {
                rangeWithDots.push('...')
            }
        }
        rangeWithDots.push(i)
        l = i
    }

    return rangeWithDots
})

// Watch for language changes to reset pagination
watch(() => t.value, () => {
    currentPage.value = 1
    refreshAOS()
})

// Correct pagination watch
watch(currentPage, () => {
    refreshAOS()
})

const refreshAOS = () => {
    setTimeout(() => {
        AOS.refresh()
    }, 100)
}

// Methods
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        scrollToSection()
    }
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        scrollToSection()
    }
}

const goToPage = (page) => {
    currentPage.value = page
    scrollToSection()
}

const scrollToSection = () => {
    const section = document.getElementById('certificates')
    if (section) {
        // Scroll slightly offset so title is visible
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
</script>
