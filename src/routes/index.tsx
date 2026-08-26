import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Onboarding } from "@/components/Onboarding";
import { UploadSection } from "@/components/UploadSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manhwa Transtool Studio — AI Manga Translation Workspace" },
      {
        name: "description",
        content:
          "Upload manga and manhwa pages, extract text with AI, manage dictionaries and tags, and export consistent translations — bilingual EN/AR interface.",
      },
      {
        property: "og:title",
        content: "Manhwa Transtool Studio — AI Manga Translation Workspace",
      },
      {
        property: "og:description",
        content:
          "Upload pages, extract text, translate with AI, and export — with dictionary and tag management for consistent results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <UploadSection />
            <Onboarding />
          </main>
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
