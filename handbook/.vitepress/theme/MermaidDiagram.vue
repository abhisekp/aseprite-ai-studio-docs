<script setup lang="ts">
import { onMounted, ref, useId, watch } from "vue";
import { useData } from "vitepress";
const props = defineProps<{ source: string }>();
const { isDark } = useData();
const svg = ref("");
const error = ref(false);
const id = "mermaid-" + useId().replace(/[^a-zA-Z0-9-]/g, "");
let revision = 0;
async function render() {
  const current = ++revision;
  try {
    const { default: mermaid } = await import("mermaid");
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: isDark.value ? "dark" : "default",
      flowchart: { htmlLabels: false },
    });
    const result = await mermaid.render(id + "-" + current, props.source);
    if (current === revision) {
      svg.value = result.svg;
      error.value = false;
    }
  } catch {
    if (current === revision) {
      svg.value = "";
      error.value = true;
    }
  }
}
onMounted(() => {
  void render();
  watch([() => props.source, isDark], render);
});
</script>

<template>
  <figure class="mermaid-diagram" aria-label="Creation workflow diagram">
    <div v-if="svg" v-html="svg" />
    <template v-else-if="error">
      <p role="alert">The diagram could not be rendered.</p>
      <pre>{{ source }}</pre>
    </template>
    <p v-else role="status">Loading diagram...</p>
  </figure>
</template>

<style scoped>
.mermaid-diagram {
  margin: 24px 0;
  overflow-x: auto;
  text-align: center;
}
.mermaid-diagram :deep(svg) {
  display: block;
  margin: auto;
  height: auto;
}
</style>
