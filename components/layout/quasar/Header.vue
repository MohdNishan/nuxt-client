<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('toggle-left')" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Title
      </q-toolbar-title>

      <SettingsMenu />

      <q-btn dense flat round icon="menu" @click="$emit('toggle-right')" />
    </q-toolbar>

<div class="row">
  <div class="col-auto">
    <q-tabs dense align="left">
      <q-route-tab
        v-for="tab in homeTab"
        :key="tab.path"
        :href="tab.path"
        :label="t(tab.label)"
        no-caps
      />
    </q-tabs>
  </div>
  <q-space/>
  <div class="col-auto">
    <q-tabs dense align="right">
      <q-route-tab
        v-for="tab in rightTabs"
        :key="tab.path"
        :label="t(tab.label)"
        :href="tab.path"
        no-caps
      />
    </q-tabs>
  </div>
</div>

  </q-header>
</template>

<script setup lang="ts">
import SettingsMenu from '~/components/layout/shared/SettingsMenu.vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCookie } from '#app'
import { useAuthStore } from '~/stores/auth'
import { useLandingLinks } from '~/composables/utils/useLandingLinks'

const { locale, t } = useI18n()

const authStore = useAuthStore()

const { landingLinks } = useLandingLinks()

function autoLabel(href: string): string {
  const filename = href.split('/').pop()?.replace('.html', '') || ''
  return filename.charAt(0).toUpperCase() + filename.slice(1)
}

const homeTab = computed(() =>
  landingLinks.value
    .filter(link => link.href && link.href.endsWith('index.html'))
    .map(link => ({
      path: link.href,
      label: 'Home'
    }))
)

const rightTabs = computed(() =>
  landingLinks.value
    .filter(link => link.href && link.href.endsWith('.html') && !link.href.endsWith('index.html'))
    .map(link => ({
      path: link.href,
      label: autoLabel(link.href)
    }))
)

</script>
