import { html } from "lit";

import { Feedback } from "../observatory-landing/feedback.js";
import { PageLayout } from "../page-layout/server.js";
import { ServerComponent } from "../server/index.js";

export class ObservatoryResults extends ServerComponent {
  /**
   * @param {import("@fred").Context<import("@rari").SPAPage>} context
   * @returns {import("@lit").TemplateResult}
   */
  render(context) {
    const extendedContext = {
      ...context,
      doc: {
        parents: [
          { uri: "/en-US/observatory", title: "HTTP Observatory" },
          {
            title: "Report",
          },
        ],
      },
    };

    return PageLayout.render(
      extendedContext,
      html`
        <div class="obs-layout obs-layout--results">
          <div
            id="content"
            class="obs-layout__content obs-layout__content--results"
          >
            <section class="obs-results">
              <section class="obs-results__header">
                <h1 class="obs-results__title">
                  <span class="obs-results__title-accent"
                    >${context.l10n("obs-title")}</span
                  >
                  ${context.l10n("Report")}
                </h1>
                <div class="obs-results__feedback">${Feedback(context)}</div>
              </section>

              <aside class="obs-toc">
                <h2 class="obs-toc__heading">${context.l10n("obs-title")}</h2>
                <ul class="obs-toc__list">
                  <li class="obs-toc__item">
                    <a
                      href="/en-US/observatory/docs/tests_and_scoring"
                      class="obs-toc__link"
                      >Tests &amp; Scoring</a
                    >
                  </li>
                  <li class="obs-toc__item">
                    <a href="/en-US/observatory/docs/faq" class="obs-toc__link"
                      >FAQ</a
                    >
                  </li>
                </ul>
              </aside>

              <mdn-observatory-results
                class="obs-results__mdn-results"
              ></mdn-observatory-results>
            </section>
          </div>
        </div>
      `,
    );
  }
}
