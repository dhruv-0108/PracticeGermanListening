import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("netzwerkA2ChapterVocab")) return "vocab-a2";
          if (id.includes("netzwerkChapterVocab")) return "vocab-a1";
          if (id.includes("generatedConversations")) return "conversations";
          if (id.includes("netzwerkData")) return "syllabus-meta";
        }
      }
    }
  }
});
