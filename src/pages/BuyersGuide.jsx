import { Accordion } from "../components/Accordion";
import { GuideCard } from "../components/Cards";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";
import { buyerGuideSections, guideCards } from "../data/guides";

export default function BuyersGuide() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader align="left" eyebrow="Buyer's Guide" title="Plan Before You Reserve" text="Easy-to-read notes for local, OFW, investor, and family buyers." />
        <div className="card-grid">{guideCards.map((guide) => <GuideCard key={guide.id} {...guide} />)}</div>
        <div className="content-panel"><Accordion items={buyerGuideSections} /></div>
        <DisclaimerBanner text="Requirements may vary depending on project, buyer profile, and payment terms. Confirm final requirements with Luisa or an official DMCI representative." />
      </div>
    </section>
  );
}
