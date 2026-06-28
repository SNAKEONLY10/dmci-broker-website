import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";

const steps = ["Select project and unit", "Request latest computation", "Confirm availability", "Prepare requirements", "Pay reservation fee only through official/approved channel", "Submit documents", "Sign reservation/computation documents", "Proceed with documentation"];
const checklist = ["Reservation Agreement", "Reservation Fee Receipt", "Client Registration Form", "Signed Computation Sheet", "TIN or BIR Form 1904", "Valid government-issued ID", "Proof of Billing", "SPA if applicable", "Additional documents depending on buyer/payment type"];

export default function ReservationRequirements() {
  return (
    <section className="page-section soft">
      <div className="container">
        <SectionHeader align="left" eyebrow="Reservation Requirements" title="Prepare Safely Before Paying" text="Use this as a planning checklist, then confirm final requirements." />
        <div className="steps-grid">{steps.map((step, index) => <article key={step}><strong>{index + 1}</strong><p>{step}</p></article>)}</div>
        <div className="warning-box">Do not send payment without official confirmation and verified payment instructions.</div>
        <div className="checklist-grid">{checklist.map((item) => <span key={item}>{item}</span>)}</div>
        <DisclaimerBanner />
      </div>
    </section>
  );
}
