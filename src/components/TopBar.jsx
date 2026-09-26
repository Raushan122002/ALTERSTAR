import { SITE } from "../data/site";
import Icon from "./Icon";

export default function TopBar() {
  return (
    <div className="hidden border-b border-rule bg-mist lg:block">
      <div className="wrap flex h-9 items-center justify-between text-[0.8rem] text-ink-mute">
        <div className="flex items-center gap-5">
          <span className="font-mono tracking-[0.04em]">
            GSTIN {SITE.gstin}
          </span>
          <span className="h-3 w-px bg-rule" aria-hidden="true" />
          <span>
            Manufacturer, wholesaler and exporter, {SITE.city}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="font-mono">{SITE.hours[0].t}</span>
          <span className="h-3 w-px bg-rule" aria-hidden="true" />
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-600"
          >
            <Icon name="phone" className="w-3.5 h-3.5" />
            {SITE.phone}
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ok-600 transition-colors hover:text-ok-700"
          >
            <Icon name="whatsapp" className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
